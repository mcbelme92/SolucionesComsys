import { Post } from "./post.interface";
/* Esta interfaz define una función que devuelve una promesa que eventualmente
se resolverá en un objeto con una propiedad data que contiene un array de objetos de tipo Post,
o undefined si no hay datos disponibles. */
export interface getPostApi {
  (): Promise<{ data: Post[] | undefined }>;
}
//Esta interfaz define una función que devuelve una promesa sin ningún valor de retorno explícito.
export interface FetchData {
  (): Promise<void>;
}
