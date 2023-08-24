import { Router } from "express";
import { insidenciasPost } from "../controllers/insidencias.controller.js";

const router = Router();
router.post("/", insidenciasPost);

export { router };
