import Joi from "joi";
const id = Joi.string().hex().length(24);

export const getSalonShema = Joi.object({
  id: id.required(),
});

const equipoSchema = Joi.object({
  codigo: Joi.string().required(),
  nombre: Joi.string().required(),
});

export const putEquipoShema = Joi.object({
  equipos: Joi.array().items(equipoSchema).required(),
});
