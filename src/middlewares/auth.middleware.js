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

export const checkRoles = (...roles) => {
  return (req = request, res = response, next) => {
    if (!req.usuario) {
      return res.status(500).json({
        msg: "error, se quiere verificar role sin antes validar token",
      });
    }

    if (!roles.includes(req.usuario.rol)) {
      return res.status(401).json({
        msg: `el servicio requiere uno de estos roles: ${roles.join(", ")}`,
      });
    }

    next();
  };
};
