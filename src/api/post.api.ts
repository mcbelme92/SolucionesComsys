import axios from "axios";
import { BASE_URL_PATH } from "./constants";
import { Post } from "../interface/post.interface";

export class ApiManagerPost {
  getPostApi = async (): Promise<{ data: Post[] | undefined }> => {
    try {
      const url: string = `${BASE_URL_PATH}`;
      const response = await axios.get<Post[]>(url);
      const result = response.data;
      return { data: result };
    } catch (error) {
      console.error("Error al obtener datos:", error);
      return { data: undefined };
    }
  };
}
