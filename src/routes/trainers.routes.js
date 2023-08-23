import { Router } from "express";
import db from "../db/config.js";
import { ObjectId } from "mongodb";
// const Trainer = db.collection("trainers");
const Area = db.collection("areas");
const Salon = db.collection("salones");
// const Insidiencia = db.collection("insidiencias");

const router = Router();
router.get("/", async (req, res) => {
  try {
    const resAres = await Salon.insertOne({
      nombre: "apolo",
      area_id: new ObjectId("64e68c23419cb8a394f62616"),
    });
    res.status(200).json({ ok: true, insert: resAres });
  } catch (error) {
    res.status(500).json({ ok: false, msg: error });
  }
});

export { router };
