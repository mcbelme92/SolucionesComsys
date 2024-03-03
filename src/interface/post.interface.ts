/**
 * Interfaz que representa un post.
 * @interface Post
 * @property {number} [userId] - El ID del usuario que creó el post (opcional).
 * @property {number} id - El ID del post.
 * @property {string} title - El título del post.
 * @property {string} [body] - El cuerpo del post (opcional).
 */
export interface Post {
  userId: number;
  id: number;
  title: string;
  body?: string;
}
/**
 * Interfaz que representa la respuesta de una solicitud para obtener posts.
 * @interface getPost
 * @property {Post[]} [data] - Un array de posts (opcional).
 */
export interface getPost {
  data?: Post[];
}

/**
 * Interfaz que representa el recuento de publicaciones por usuario.
 * @interface UserPosts
 * @property {number} userId - El ID del usuario.
 * @property {number} count - El número de publicaciones para el usuario.
 */
export interface UserPosts {
  userId: number;
  count: number;
}

/**
 * Props para el componente PostInfoDisplay.
 * @interface PostInfoDisplayProps
 * @property {string} title - El título del componente.
 * @property {UserPosts[]} postsByUser - Un array de objetos que representa las publicaciones por usuario.
 * @property {Post[]} longestTitles - Un array de objetos que representa las publicaciones con títulos más largos.
 */
export interface PostInfoDisplayProps {
  title: string;
  postsByUser: UserPosts[];
  longestTitles: Post[];
}
