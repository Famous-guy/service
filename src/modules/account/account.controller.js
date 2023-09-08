import express from "express";
import passport from "passport";

import {accountInfo} from "./account.service.js";
import {ensureAuthenticated} from "../../middlewares/index.js";

/**
 * @base_path /api/v1/account
 */
export const accountRouter = express.Router()
  .get("/", ensureAuthenticated, accountInfo)
  .post(
    "/authenticate",
    passport.authenticate("local"),
    (req, res) => {

      if (req.isUnauthenticated()) {

        return res.status(400).json({message: "Ah, who are you again?"});

      }

      return res.status(200).json({message: "Look who is back!", user: req.user});

    }
  );