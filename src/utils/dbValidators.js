import db from "../db/config";
const User = db.collection("users");

export const emailExiste = async (correo = "") => {
  const existeEmail = await User.findOne({ correo });
  if (existeEmail) throw new Error(`El correo: ${correo}, ya está registrado`);
};
