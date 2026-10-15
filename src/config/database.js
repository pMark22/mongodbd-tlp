import mongoose from "mongoose";

export const startDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/db-mongoose");

    console.log("Conexión a la base de datos establecida correctamente");
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
  }
};
