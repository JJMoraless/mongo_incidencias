import { Router } from "express";
import passport from "passport";
import {
  getSalones,
  pushEquiposToSalon,
} from "../controllers/salones.controller.js";

import { validatorHandler } from "../middlewares/validateShemas.js";
import { getSalonShema, putEquipoShema } from "../shemas/salonesShema.js";
import { checkRoles } from "../middlewares/auth.middleware.js";

const router = Router();
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  checkRoles("admin", "user_role"),
  getSalones
);

router.put(
  "/:id",
  validatorHandler(getSalonShema, "params"),
  validatorHandler(putEquipoShema, "body"),
  pushEquiposToSalon
);

export { router };
