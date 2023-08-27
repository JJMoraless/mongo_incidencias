import { Router } from "express";
import { logOut, login } from "../controllers/auth.controller.js";
import passport from "passport";

const router = Router();

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  login
);
router.post("/logout", logOut);

export { router };
