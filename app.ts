import express from "express";
import dotenv from "dotenv";
import handler from "./src/routes/handler";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());

//handler(app);
app.get("/", async (req, res, next) => {
  try {
    return res.json({ message: "Datos de servicios", data: ["..."] });
  } catch (err: any) {
    console.log(err.message);
  }
});
app.listen(443, async () => {
  console.log(`servicio arthemis back en linea`);
});
