import { Post } from "./post.interface";

/**
 * Definición del tipo para la función que cuenta las publicaciones por usuario.
 * Esta función toma un array de objetos Post y devuelve un objeto donde las claves son los IDs de usuario
 * y los valores son el número de publicaciones asociadas a ese usuario.
 * @param posts Un array de objetos Post que representan las publicaciones.
 * @returns Un objeto donde las claves son los IDs de usuario y los valores son el número de publicaciones.
 */
export type CountPostsByUserFunction = (posts: Post[]) => {
  [key: number]: number;
};

/**
 * Definición del tipo para la función que encuentra los títulos más largos.
 * Esta función toma un array de objetos Post que representan las publicaciones
 * y devuelve un array de objetos con la estructura { id: number, title: string },
 * representando las publicaciones con los títulos más largos.
 * @param posts Un array de objetos Post que representan las publicaciones.
 * @returns Un array de objetos con la estructura { id: number, title: string } representando las publicaciones con los títulos más largos.
 */

export type FindLongestTitles = (
  posts: Post[]
) => { userId: number; id: number; title: string }[];

/**
 * Definición del tipo para la función que prepara los datos de las publicaciones por usuario.
 * Esta función toma un array de objetos Post que representan las publicaciones
 * y devuelve un array de objetos con la estructura { userId: number, count: number }[],
 * que representa el recuento de publicaciones por usuario.
 * @param posts Un array de objetos Post que representan las publicaciones.
 * @returns Un array de objetos con la estructura { userId: number, count: number }[] representando el recuento de publicaciones por usuario.
 */

export type PreparePostsByUser = (posts: Post[]) => {
  userId: number;
  count: number;
}[];
