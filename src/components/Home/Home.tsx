// Importa las bibliotecas necesarias
import React, { useEffect, useState } from "react";
import { Post } from "../../interface/post.interface";
import { ApiManagerPost } from "../../api/post.api";
import "bootstrap/dist/css/bootstrap.min.css";
import { countPostsByUser, findLongestTitles } from "../../utils/postUtils";

const Home: React.FC = () => {
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
    <div className="container mt-5">
      <h1 className="text-center">Soluciones Comsys</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Publicaciones por Usuario</h2>
              <div>
                {Object.keys(countPostsByUser(posts)).map((userId) => (
                  <div key={userId}>
                    <h5>ID Usuario: {userId}</h5>
                    <p>
                      Publicaciones: {countPostsByUser(posts)[parseInt(userId)]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">
                Publicaciones con Títulos Más Largos
              </h2>
              <ul className="list-group">
                {findLongestTitles(posts).map((post) => (
                  <li key={post.id} className="list-group-item">
                    <strong>ID Post:</strong> {post.id} -{" "}
                    <strong>Título:</strong> {post.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
