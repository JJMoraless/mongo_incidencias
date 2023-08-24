import { request, response } from "express";
import db from "../db/config.js";
import { ObjectId } from "mongodb";
const Salon = db.collection("salones");

export const pushEquiposToSalon = async (req = request, res = response) => {
  try {
    const { equipos } = req.body;
    const { id } = req.params;

    const salonUpdated = await Salon.findOneAndUpdate(
      {
        _id: new ObjectId(id),
      },
      { $push: { equipos: { $each: equipos } } },
      {
        returnDocument: "after",
      }
    );

    res.status(200).json({ ok: true, salon_actualizado: salonUpdated.value });
  } catch (error) {
    console.log(
      "🚀 ~ file: trainers.controller.js:11 ~ trainerGet ~ error:",
      error
    );
    res.status(500).json({ ok: false, msg: error });
  }
};

export const getSalones = async (req = request, res = response) => {
  try {
    const salones = await Salon.find().toArray();
    res.status(200).json({ ok: true, salones });
  } catch (error) {
    console.log(
      "🚀 ~ file: trainers.controller.js:11 ~ trainerGet ~ error:",
      error
    );
    res.status(500).json({ ok: false, msg: error });
  }
};
