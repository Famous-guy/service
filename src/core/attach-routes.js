import express from "express";
import {accountRouter} from "../modules/account/account.controller.js";

/**
 * 
 * @param {express.Application} app
 */
export function attachRoutes(app) {

  const router = express.Router();
  router.use("/account", accountRouter);

  app.use("/api/v1", router);

}