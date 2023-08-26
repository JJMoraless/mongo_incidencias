import { Router } from "express";
import {
  getSalones,
  pushEquiposToSalon,
} from "../controllers/salones.controller.js";

import { validatorHandler } from "../middlewares/validateShemas.js";
import { getSalonShema, putEquipoShema } from "../shemas/salonesShema.js";

const router = Router();
router.get("/", getSalones);

router.put(
  "/:id",
  validatorHandler(getSalonShema, "params"),
  validatorHandler(putEquipoShema, "body"),
  pushEquiposToSalon
);

export { router };
