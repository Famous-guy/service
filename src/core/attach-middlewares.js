import express from "express";
import session from "express-session";
import helmet from "helmet";
import passport from "passport";
import LocalStrategy from "passport-local";

/**
 * 
 * @param {express.Application} app
 */
export function attachMiddlewares(app) {

  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

  app.use(helmet());

  app.use(session({
    name: "session",
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
    },
  }));

  app.use(passport.session());

  passport.use("local", new LocalStrategy.Strategy({
    usernameField: "email",
  }, (email, password, cb) => {

    const user = {
      id: 1,
      name: "John Doe",
    };

    return cb(null, user);

  }));

  passport.serializeUser((user, cb) => {

    process.nextTick(() => {
      cb(null, user);
    });

  });

  passport.deserializeUser((user, cb) => {

    process.nextTick(() => {
      cb(null, user);
    });

  });

}