
export default class Servicio {
  public static obtenerServicio: any = async (req:any) => {

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