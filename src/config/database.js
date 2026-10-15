import mongoose from "mongoose";
// Conexión básica
mongoose
  .connect("mongodb://localhost:27017/mi_base_datos")
  .then(() => console.log("Conectado a MongoDB exitosamente"))
  .catch((err) => console.error("Error de conexión:", err));
