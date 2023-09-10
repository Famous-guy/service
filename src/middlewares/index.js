/** @typedef {import("express").Request} Request */
/** @typedef {import("express").Response} Response */
/** @typedef {import("express").NextFunction} NextFunction */

/**
 * 
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  return res.status(401).json({message: "Pardon, who are you?"});
}

/**
 * 
 * @param {unknown} err
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function errorCatcher(err, req, res, next) {

  console.error(err);
  return res.status(500).json({message: "Come home, kitchen's on fire."});

}