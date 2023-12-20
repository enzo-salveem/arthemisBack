import express from "express";
import dotenv from "dotenv";
import handler from "./src/routes/handler";
import cors from 'cors';


dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(cors())
app.use(express.json());

handler(app);

app.listen(process.env.PORT || 3000, async () => {
  console.log(`servicio Commodito en el puerto: ${process.env.PORT} `);
});
