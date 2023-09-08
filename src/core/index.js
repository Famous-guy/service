import {attachMiddlewares} from "./attach-middlewares.js";
import {attachRoutes} from "./attach-routes.js";

/**
 * 
 * @param {import("express").Application} app
 */
export function configureServer(app) {

  attachMiddlewares(app);
  attachRoutes(app);

}