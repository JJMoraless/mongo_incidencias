import { ObjectId } from "mongodb";
import db from "../db/config.js";
const User = db.collection("users");
const Categoria = db.collection("categoria_insidencia");
const Tipo = db.collection("tipo_insidencia");
const Salon = db.collection("salones");
const Trainer = db.collection("trainers");

export const emailExiste = async (correo = "", helpers) => {
  const existeEmail = await User.findOne({ correo });
  if (existeEmail) return helpers.message("el correo ya esta registrado");
};

export const categoriaExiste = async (nombre = "", helpers) => {
  const existeCategoria = await Categoria.findOne({ nombre });
  if (!existeCategoria)
    return helpers.message(`categoria ${nombre} no existe `);
  return nombre;
};

export const tipoExiste = async (nombre = "", helpers) => {
  try {
    const existeTipo = await Tipo.findOne({ nombre });
    if (!existeTipo) return helpers.message(`tipo ${nombre} no existe`);
    return nombre;
  } catch (error) {
    helpers.message(`tipo ${nombre} no existe`);
  }
};

export const idSalonExiste = async (idSalon = "", helpers) => {
  try {
    const existe = await Salon.findOne({ _id: new ObjectId(idSalon) });
    if (!existe) return helpers.message("id salon no existe");
    return idSalon;
  } catch (error) {
    return helpers.message("id salon no existe");
  }
};

export const existeEmailPersonalTrainer = async (email = "", helpers) => {
  const existe = await Trainer.findOne({
    emailPersonal: email,
  });
  if (existe) return helpers.message("email ya registrado");
  return email;
};

export const existeEmailCorporativoTrainer = async (email = "", helpers) => {
  const existe = await Trainer.findOne({ emailCorporativo: email });
  if (existe) return helpers.message("email ya registrado");
  return email;
};
