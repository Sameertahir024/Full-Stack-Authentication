import express from "express";
const app = express();
import { config } from "dotenv";
config();
import cors from "cors";
const PORT = process.env.PORT || 5000;
import UserRouts from "./routs/UserRouts.js";
import connect from "./DB/db.js";
connect();

app.use(express.json());

app.use(cors());
app.use("/auth", UserRouts);

app.listen(PORT, () => {
  console.log(`app run`);
});
