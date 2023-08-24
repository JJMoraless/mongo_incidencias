import { request, response } from "express";
import { verifyToken } from "../utils/jwt.js";

export const authRequired = async (req = request, res = response, next) => {
  try {
    const { token } = req.cookies;
    const { authorization } = req.headers;
    if (!authorization && !token) {
      return res
        .status(401)
        .json({ message: "no token, authorization denied" });
    }

    const payload = await verifyToken(token || authorization);
    if (!payload) {
      return res
        .status(401)
        .json({ message: "token invalid, authorization denied" });
    }

    req.user = payload;
    next();
  } catch (error) {
    res.status(501).json(error);
  }
};
