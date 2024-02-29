import axios, { AxiosResponse } from "axios";
import { BASE_URL_PATH } from "./constants";
import { Post } from "../interface/post.interface";

export class ApiManagerPost {
  // Método para obtener los posts de la API
  // Devuelve una promesa que resuelve en un objeto con los datos de los posts o undefined en caso de error
  getPostApi = async (): Promise<{ data: Post[] | undefined }> => {
    try {
      const url: string = `${BASE_URL_PATH}`;
      const response: AxiosResponse<Post[]> = await axios.get<Post[]>(url);
      const result: Post[] | undefined = response.data;
      return { data: result };
    } catch (error: any) {
      console.error("Error al obtener datos:", error.message);
      return { data: undefined };
    }
  };
}
