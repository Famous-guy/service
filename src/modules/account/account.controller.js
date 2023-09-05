import express from "express";
import {authenticate} from "./account.service.js";

const accountRouter = express.Router();

accountRouter.get("/", authenticate);

export {accountRouter};