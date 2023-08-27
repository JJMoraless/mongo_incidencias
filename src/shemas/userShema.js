import Joi from "joi";
import { existeEmailUser } from "../utils/dbValidators.js";

const username = Joi.string()
  .min(5)
  .message("min 5 characters max 20 characters")
  .max(20)
  .message("max 20 characters");
const email = Joi.string().email();
const password = Joi.string()
  .min(5)
  .message("min 5 characters max 20 characters")
  .max(20)
  .message("max 20 characters");

export const postUserShema = Joi.object({
  username: username.required(),
  email: email.required().external(existeEmailUser),
  password: password.required(),
});

export const putUserShema = Joi.object({
  username: username,
  email: email,
  password: password,
});
