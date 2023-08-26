import { request, response } from "express";
import db from "../db/config.js";
import { ObjectId } from "mongodb";
const Incidencia = db.collection("incidencias");

export const insidenciasPost = async (req = request, res = response) => {
  try {
    const { salon_id, ...insidenciaRest } = req.body;
    const incidenciaInsert = await Incidencia.insertOne({
      ...insidenciaRest,
      salon_id: new ObjectId(salon_id),
    });
    
    const [incidencia] = await Incidencia.aggregate([
      {
        $match: { _id: incidenciaInsert.insertedId },
      },
      {
        $lookup: {
          from: "salones",
          localField: "salon_id",
          foreignField: "_id",
          as: "salon",
        },
      },
      {
        $unwind: "$salon",
      },
      {
        $lookup: {
          from: "areas",
          localField: "salon.area_id",
          foreignField: "_id",
          as: "area",
        },
      },
      {
        $project: { "salon.equipos": 0, "salon._id": 0, "area._id": 0 },
      },
      {
        $unwind: "$area",
      },
    ]).toArray();

    res.status(200).json({ ok: true, insert: incidencia });
  } catch (error) {
    console.log(
      "🚀 ~ file: trainers.controller.js:11 ~ trainerGet ~ error:",
      error
    );
    res.status(500).json({ ok: false, msg: error });
  }
};
