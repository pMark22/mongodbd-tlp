import {UserModel} from "../models/user.model.js";

const createUser = async(req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new UserModel({ name, email, password });

    await newUser.save();
    return res.status(201).json({
        msg: "Usuario creado correctamente", user: newUser
    });
    } catch (error) {
    console.error(error);
    return res.status(500).json({ 
        msg: "Error interno del servidor",
    });
  }
};

const getAllUsers = async(req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error interno del servidor" });
  }
};

const getUserById = async(req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error interno del servidor" });
  }
};

const updateUser = async(req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error interno del servidor" });
  }
};

const deleteUser = async(req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error interno del servidor" });
  }
};
};
