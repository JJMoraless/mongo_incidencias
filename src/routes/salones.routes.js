import { Router } from "express";
import { pushEquiposToSalon } from "../controllers/salones.controller.js";

const router = Router();
router.post("/:id", pushEquiposToSalon);

export { router };
