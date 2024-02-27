import { Post } from "../interface/post.interface";

/**
 * Cuenta el número de publicaciones por usuario.
 * @param posts Un array de objetos Post que representan las publicaciones.
 * @returns Un objeto donde las claves son los IDs de usuario y los valores son el número de publicaciones asociadas a ese usuario.
 */

export const countPostsByUser = (posts: Post[]): { [key: number]: number } => {
  const postCount: { [key: number]: number } = {};
  posts.forEach((post) => {
    // Comprobación de tipo para evitar valores undefined
    if (post.userId !== undefined) {
      if (postCount[post.userId]) {
        postCount[post.userId] += 1;
      } else {
        postCount[post.userId] = 1;
      }
    }
  });
  return postCount;
};

/**
 * Encuentra las publicaciones con los títulos más largos.
 * @param posts Un array de objetos Post que representan las publicaciones.
 * @returns Un array de objetos con la estructura { id: number, title: string }, representando las publicaciones con los títulos más largos.
 */
export const findLongestTitles = (
  posts: Post[]
): { id: number; title: string }[] => {
  const sortedPosts = posts.sort((a, b) => b.title.length - a.title.length);
  const longestTitles = sortedPosts.slice(0, 3);
  return longestTitles.map((post) => ({ id: post.id, title: post.title }));
};
