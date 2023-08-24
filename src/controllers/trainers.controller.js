import { request, response } from "express";
import db from "../db/config.js";
import { ObjectId } from "mongodb";
const Trainer = db.collection("trainers");

export const trainerPost = async (req = request, res = response) => {
  try {
    const { salon_id, ...trainerRest } = req.body;

    const trainerInsert = await Trainer.insertOne({
      salon_id: new ObjectId(salon_id),
      ...trainerRest,
    });

    res.status(200).json({ ok: true, insert: trainerInsert });
  } catch (error) {
    console.log(
      "🚀 ~ file: trainers.controller.js:11 ~ trainerGet ~ error:",
      error
    );
    res.status(500).json({ ok: false, msg: error });
  }
};
