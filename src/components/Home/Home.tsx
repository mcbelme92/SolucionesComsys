// Importa las bibliotecas necesarias
import React, { useEffect, useState } from "react";
import { Post } from "../../interface/post.interface";
import { ApiManagerPost } from "../../api/post.api";
import { countPostsByUser, findLongestTitles } from "../../utils/postUtils";
import { HomeProps } from "../../interface/HomeProps";
import PostInfoDisplay from "../PostInfoDisplay/PostInfoDisplay";
import { FetchData } from "../../interface/fetch.Interfaces";
import {
  FindLongestTitles,
  PreparePostsByUser,
} from "../../interface/post.types";

const Home: React.FC<HomeProps> = ({ title }): JSX.Element => {
  const [posts, setPosts] = useState<Post[]>([]);

  // Efecto para cargar los datos del JSON al montar el componente
  useEffect(() => {
    const fetchData: FetchData = async (): Promise<void> => {
      const apiManagerPost = new ApiManagerPost();

      const response = await apiManagerPost.getPostApi();

      if (response.data !== undefined) {
        setPosts(response.data);
      } else {
        console.error("La respuesta del servidor es indefinida.");
      }
    };
    fetchData();
  }, []);
  const preparePostsByUser: PreparePostsByUser = (
    posts: Post[]
  ): { userId: number; count: number }[] => {
    return Object.keys(countPostsByUser(posts)).map((userId) => ({
      userId: parseInt(userId),
      count: countPostsByUser(posts)[parseInt(userId)],
    }));
  };

  const prepareLongestTitles: FindLongestTitles = (
    posts: Post[]
  ): Array<Post> => {
    return findLongestTitles(posts);
  };

  return (
    <div>
      <PostInfoDisplay
        title={title}
        postsByUser={preparePostsByUser(posts)}
        longestTitles={prepareLongestTitles(posts)}
      />
    </div>
  );
};

export default Home;
