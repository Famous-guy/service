import chai from "chai";
import chaiHttp from "chai-http";
import express from "express";
import {configureServer} from "../../../core/index.js";

const app = express();
configureServer(app);

chai.use(chaiHttp);
chai.should();

describe("Account module:", () => {

  describe("/api/v1/account", () => {

    it("should return 401 if not authenticated", (done) => {
      chai.request(app)
        .get("/api/v1/account")
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });

    it("should return 200 if authenticated", async () => {
      const agent = chai.request.agent(app);

      await agent
        .post("/api/v1/account/authenticate")
        .send({
          email: "an@email.com",
          password: "pw"
        });
      const r = await agent.get("/api/v1/account");

      chai.expect(r).to.have.status(200);
      chai.expect(r.body).to.have.property("message");
      chai.expect(r.body).to.have.property("user");

      agent.close();
    });

  });

});