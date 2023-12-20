
export default class Autentificacion {
  public static obtenerAutentificacion: any = async () => {
    try {

      return {
        code: 200,
        status: "success",
      };
    } catch (err: any) {
      console.log(err.message);
    }
  };
}
