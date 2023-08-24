import { Router } from "express";
import {
  getSalones,
  pushEquiposToSalon,
} from "../controllers/salones.controller.js";

const router = Router();
router.get("/", getSalones);

router.post("/:id", pushEquiposToSalon);

export { router };
