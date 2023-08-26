import { Router } from "express";
import { userPost } from "../controllers/user.controller.js";
import { postUserShema } from "../shemas/userShema.js";
import { validatorHandler } from "../middlewares/validateShemas.js";

const router = Router();
router.post("/", validatorHandler(postUserShema, "body"), userPost);

export { router };
