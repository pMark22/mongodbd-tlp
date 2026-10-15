import { model, Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    match: [/.+\@.+\..+/, "Por favor ingrese un correo electrónico válido"],
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
});

// const UserModel = model("User", userSchema);

// UserModel.

export default model("User", userSchema);
