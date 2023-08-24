import { request, response } from "express";
import db from "../db/config.js";
import { ObjectId } from "mongodb";

const Incidencia = db.collection("incidencias");
const Tipo = db.collection("tipo_insidencia");
const Catategoria = db.collection("categoria_insidencia");

export const insidenciasPost = async (req = request, res = response) => {
  try {
    const { tipo, categoria, id_salon, ...insidenciaRest } = req.body;
    const tipoFound = await Tipo.findOne({ nombre: tipo });
    if (!tipoFound) {
      return res
        .status(401)
        .json({ ok: false, msg: "tipo de incidencia no existe" });
    }

    const categoriaFound = await Catategoria.findOne({ nombre: categoria });
    if (!categoriaFound) {
      return res.status(401).json({ ok: false, msg: "categoria no exixste" });
    }

    const incidenciaInsert = await Incidencia.insertOne({
      tipo,
      categoria,
      ...insidenciaRest,
      salon_id: new ObjectId(id_salon),
    });

    res.status(200).json({ ok: true, insidencia: incidenciaInsert });
  } catch (error) {
    console.log(
      "🚀 ~ file: trainers.controller.js:11 ~ trainerGet ~ error:",
      error
    );
    res.status(500).json({ ok: false, msg: error });
  }
};
