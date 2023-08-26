import { Router } from "express";
import { insidenciasPost } from "../controllers/insidencias.controller.js";
import { validatorHandler } from "../middlewares/validateShemas.js";
import { postIncidenciaSchema } from "../shemas/incidenciaShema.js";

const router = Router();
router.post(
  "/",
  validatorHandler(postIncidenciaSchema, "body"),
  insidenciasPost
);

export { router };
