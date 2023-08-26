import Joi from "joi";
import {
  existeEmailPersonalTrainer,
  idSalonExiste,
} from "../utils/dbValidators.js";

const nombre = Joi.string();
const emailPersonal = Joi.string().email().external(existeEmailPersonalTrainer);
const emailCorporativo = Joi.string()
  .email()
  .external(existeEmailPersonalTrainer);
const telefono = Joi.string()
  .regex(/^\d{10}$/)
  .message("telefono debe tener 10 digitos numericos");

const salon_id = Joi.string().external(idSalonExiste);

export const postTrainerShema = Joi.object({
  nombre: nombre.required(),
  emailPersonal: emailPersonal.required(),
  emailCorporativo: emailCorporativo.required(),
  telefonoMovil: telefono.required(),
  telefonoResidencia: telefono.required(),
  telefonoEmpresa: telefono.required(),
  salon_id: salon_id.required(),
});
