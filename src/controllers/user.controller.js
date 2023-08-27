import { request, response } from "express";
import db from "../db/config.js";
import { hash } from "bcrypt";
const User = db.collection("users");

export const userPost = async (req = request, res = response) => {
  try {
    const data = req.body;
    const userInsert = await User.insertOne({
      ...data,
      password: await hash(data.password, 10),
      role: "user_role",
    });
    res.status(200).json({ ok: true, insert: userInsert });
  } catch (error) {
    console.log("🚀 ~ file: user.controller.js:14 ~ userPost ~ error:", error);
    res.status(500).json({ ok: false, msg: error });
  }
};
