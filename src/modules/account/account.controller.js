import express from "express";
import passport from 'passport';

/**
 * @base_path /api/v1/account
 */
export const accountRouter = express.Router()
  .post(
    "/authenticate",
    passport.authenticate("local"),
    (req, res) => {
      return res.status(200).json({message: "Authenticated", user: req.user});
    }
  );