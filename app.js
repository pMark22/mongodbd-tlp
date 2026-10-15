import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import { startDB } from ".src/config/database.js";
// import UserModel from "moongose/models/user_model";

const app = express();
const PORT = 3000;

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//rutas

app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
