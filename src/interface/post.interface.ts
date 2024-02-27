export interface Post {
  userId?: number;
  id: number;
  title: string;
  body?: string;
}

export interface getPost {
  data?: Post[];
}

export interface UserPosts {
  userId: number;
  count: number;
}

export interface PostInfoDisplayProps {
  title: string;
  postsByUser: UserPosts[];
  longestTitles: Post[];
}
