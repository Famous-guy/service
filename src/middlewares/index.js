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