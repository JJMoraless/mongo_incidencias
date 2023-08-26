import { request, response } from "express";
import db from "../db/config.js";
const User = db.collection("users");

export const userPost = async (req = request, res = response) => {
  try {
    const { password, ...restUser } = req.body;
    const userInsert = await User.insertOne({
      ...restUser,
      password,
    });
    res.status(200).json({ ok: true, insert: userInsert });
  } catch (error) {
    console.log("🚀 ~ file: user.controller.js:14 ~ userPost ~ error:", error);
    res.status(500).json({ ok: false, msg: error });
  }
};
