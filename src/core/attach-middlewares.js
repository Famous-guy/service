import express from "express";
import helmet from "helmet";

export function attachMiddlewares(app) {
  app.use(helmet());
  app.use(express.json());
}