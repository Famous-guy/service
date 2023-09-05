import {attachMiddlewares} from "./attach-middlewares.js";
import {attachRoutes} from "./attach-routes.js";

export function configureServer(app) {

  attachMiddlewares(app);
  attachRoutes(app);
  
}