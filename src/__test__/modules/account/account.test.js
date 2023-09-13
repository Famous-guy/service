import chai from "chai";
import chaiHttp from "chai-http";
import express from "express";
import {configureServer} from "../../../core/index.js";

const app = express();
configureServer(app);

chai.use(chaiHttp);
// This enables line 21.
chai.should();

describe("Account module:", () => {

  describe("/api/v1/account", () => {

    it("should return 401 if not authenticated", (done) => {
      chai.request(app)
        .get("/api/v1/account")
        .end((err, res) => {
          res.should.have.status(401); // <- Because you are not logged in.
          done();
        });
    });

    it("should return 200 if authenticated", async () => {
      const agent = chai.request.agent(app);

      await agent
        .post("/api/v1/account/authenticate")
        .send({
          email: "an@email.com", // Random
          password: "pw"         // credentials.
        });
      const r = await agent.get("/api/v1/account");

      // Think of the agent as a client making requests to your sevice.
      // This passes because the agent has successfully logged in,
      // which you can observe by looking for the cookie header.
      chai.expect(r).to.have.status(200);
      chai.expect(r.body).to.have.property("message");
      chai.expect(r.body).to.have.property("user");

      agent.close();
    });

  });

});