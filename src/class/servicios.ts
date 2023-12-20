import { Request, Response } from "express";
export default class Servicio {
  public static obtenerServicio: any = async (req:Request, res: Response) => {
    try {
      return res.json({ message: "Datos de servicios", data: ["..."] });
    } catch (err: any) {
      console.log(err.message);
    }
  };
}
