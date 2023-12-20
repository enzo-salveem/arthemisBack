import axios from "axios";
import { AutentificacionModel } from "../interfaces/autentificacion.model";

export default class Autentificacion {
  public static obtenerAutentificacion: any = async () => {
    try {
      const body: AutentificacionModel = {
        apiKey: `${process.env.RANA_API_KEY}`,
        secret: `${process.env.RANA_API_SECRET}`
      };
      const url = `${process.env.RANA_API_URL}/api/session`;
      let axiosResponse:any = await axios.post(url, body);
      return {
        code: 200,
        status: "success",
        data: axiosResponse.data.session,
      };
    } catch (err: any) {
      console.log(err.message);
    }
  };
}
