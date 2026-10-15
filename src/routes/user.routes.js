import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

export const userRouter = Router();
//rutas para crear un usuario

userRouter.post("/users", createUser);

//ruta para traer todos los usuarios

userRouter.get("/users", getAllUsers);

//ruta para traer un usuario por id
userRouter.get("/users/:id", getUserById);

//ruta para actualizar un usuario por id
userRouter.put("/users/:id", updateUser);

//ruta para eliminar un usuario por id
userRouter.delete("/users/:id", deleteUser);
