import express from "express";

import {accountRouter} from "../modules/account/account.controller.js";

/**
 * 
 * @param {express.Application} app
 */
export function attachRoutes(app) {

  const router = express.Router();
  router.use("/account", accountRouter);

  // Path of the below `router` is prefixed with `/api/v1`,
  // so the full path of `accountRouter` is `/api/v1/account`.
  app.use("/api/v1", router);

  app.get("/healthcheck", (_, res) => {
    return res.status(200).json({message: "Service is healthy."});
  });

  app.get("/", (_, res) => {
    return res.status(200).json({message: "Welcome to the service. This is the root path."});
  });

}