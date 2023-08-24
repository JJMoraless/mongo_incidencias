import { Router } from "express";
import { trainerPost } from "../controllers/trainers.controller.js";

const router = Router();
router.post("/", trainerPost);

export { router };
