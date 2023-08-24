import { request, response } from "express";
import { createToken } from "../utils/jwt.js";
import db from "../db/config.js";
const User = db.collection("users");

export const login = async (req = request, res = response) => {
  try {
    const { username, email, password } = req.body;
    const userFound = await User.findOne({ email });

    if (!userFound) {
      return res.status(404).json({ message: "credenciales incorrectas" });
    }

    const token = await createToken(1);
    res.cookie("token", token);
    res.status(200).json({ message: "autenticado correctamete", token });
  } catch (error) {
    console.log("paso por aca");
    res.status(404).json(error);
  }
};

export const logOut = (req = request, res = response) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  res.status(200).json({ msg: "sesión cerrada" });
};
