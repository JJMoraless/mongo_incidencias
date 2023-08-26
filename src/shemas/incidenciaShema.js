import Joi from "joi";
import {
  categoriaExiste,
  idSalonExiste,
  tipoExiste,
} from "../utils/dbValidators.js";

const descripcion = Joi.string();
const categoria = Joi.string();
const tipo = Joi.string();
const fechaReporte = Joi.date();
const salonId = Joi.string().external(idSalonExiste);

export const postIncidenciaSchema = Joi.object({
  categoria: categoria.required().external(categoriaExiste),
  tipo: tipo.required().external(tipoExiste),
  fecha_reporte: fechaReporte.required(),
  descripcion: descripcion.required(),
  salon_id: salonId.required(),
});



export const putIncidenciaSchema = Joi.object({
  categoria: categoria,
  tipo: tipo,
  fecha_reporte: fechaReporte,
  descripcion: descripcion,
  salon_id: salonId,
});