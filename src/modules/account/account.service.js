/** @typedef {import("express").Request} Request */
/** @typedef {import("express").Response} Response */
/** @typedef {import("express").NextFunction} NextFunction */

/**
 * 
 * @endpoint /api/v1/account
 * @access PRIVATE
 * 
 * @param {Request} req Express request.
 * @param {Response} res Express response.
 */
export function accountInfo(req, res) {

  return res.status(200).json({message: "Hi there!", user: req.user});

}