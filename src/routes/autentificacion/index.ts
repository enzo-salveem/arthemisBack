import express from "express";
import Autentificacion from "../../class/autentificacion";

let router = express.Router();

router.post("/", async (req, res, next) => {
  let response = res.send(await Autentificacion.obtenerAutentificacion());
  console.log('paso por el router');
  return response;
});

export default router;
