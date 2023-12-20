import { Router } from "express";
import autentificacion from "./autentificacion/index";
import servicios from "./servicios/index";

const handler = (routes: Router) => {
  routes.use("/api/auth", autentificacion);
  routes.use("/api/servicios", servicios);
};
export default handler;
