import { Router } from "express";
import { trainerPost } from "../controllers/trainers.controller.js";
import { validatorHandler } from "../middlewares/validateShemas.js";
import { postTrainerShema } from "../shemas/trainerShema.js";

const router = Router();
router.post("/", validatorHandler(postTrainerShema, "body"), trainerPost);

export { router };
