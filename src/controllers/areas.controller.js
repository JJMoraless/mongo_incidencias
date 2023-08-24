import { request, response } from "express";
import db from "../db/config.js";
const Area = db.collection("areas");

export const getAreas = async (req = request, res = response) => {
  try {
    const areas = await Area.find().toArray();
    res.status(200).json({ ok: true, areas });
  } catch (error) {
    console.log(
      "🚀 ~ file: trainers.controller.js:11 ~ trainerGet ~ error:",
      error
    );
    res.status(500).json({ ok: false, msg: error });
  }
};
