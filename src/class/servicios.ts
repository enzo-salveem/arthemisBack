import axios from "axios";

export default class Servicio {
  public static obtenerServicio: any = async (req:any) => {
    let searchName= req.searchName
    let paymentType= req.paymentType
    try {
      const url = `${process.env.RANA_API_URL}/api/products?searchName=${searchName}&paymentType=${paymentType}`;
      let axiosResponse:any = await axios.post(url);
      return {
        code: 200,
        status: "success",
        data: axiosResponse.data.products,
      };
    } catch (err: any) {
      console.log(err.message);
    }
  };
}