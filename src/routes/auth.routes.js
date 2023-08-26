import { Router } from "express";
import { logOut, login } from "../controllers/auth.controller.js";

const router = Router();

router.get("/login", login);
router.get("/logout", logOut);

export { router };
