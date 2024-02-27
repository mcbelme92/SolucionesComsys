// Importa las bibliotecas necesarias
import React, { useEffect, useState } from "react";
import { Post } from "../../interface/post.interface";
import { ApiManagerPost } from "../../api/post.api";
import { countPostsByUser, findLongestTitles } from "../../utils/postUtils";
import { HomeProps } from "../../interface/HomeProps";
import PostInfoDisplay from "../PostInfoDisplay/PostInfoDisplay";

const Home: React.FC<HomeProps> = ({ title }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  // Efecto para cargar los datos del JSON al montar el componente
  useEffect(() => {
    const fetchData = async () => {
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

  return (
    <div>
      <PostInfoDisplay
        title={title}
        postsByUser={Object.keys(countPostsByUser(posts)).map((userId) => ({
          userId: parseInt(userId),
          count: countPostsByUser(posts)[parseInt(userId)],
        }))}
        longestTitles={findLongestTitles(posts)}
      />
    </div>
  );
};

export default Home;
