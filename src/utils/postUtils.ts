import { Post } from "../interface/post.interface";

export const countPostsByUser = (posts: Post[]): { [key: number]: number } => {
  const postCount: { [key: number]: number } = {};
  posts.forEach((post) => {
    if (postCount[post.userId]) {
      postCount[post.userId] += 1;
    } else {
      postCount[post.userId] = 1;
    }
  });
  return postCount;
};

export const findLongestTitles = (
  posts: Post[]
): { id: number; title: string }[] => {
  const sortedPosts = posts.sort((a, b) => b.title.length - a.title.length);
  const longestTitles = sortedPosts.slice(0, 3);
  return longestTitles.map((post) => ({ id: post.id, title: post.title }));
};
