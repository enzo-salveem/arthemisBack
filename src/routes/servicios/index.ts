import express from "express";
import Servicio from "../../class/servicios";

let router = express.Router();
router.get("/", async (req, res, next) => {
  try {
    let response = res.send(await Servicio.obtenerServicio());
    return response;
  } catch (err: any) {
    console.log(err.message);
  }
});
export default router;
