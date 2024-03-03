/**
 * Componente para mostrar información sobre publicaciones por usuario y publicaciones con títulos más largos.
 *
 * @component
 * @param {PostInfoDisplayProps} props - Props para el componente PostInfoDisplay.
 * @param {string} props.title - El título del componente.
 * @param {UserPosts[]} props.postsByUser - Un array de objetos que representa las publicaciones por usuario.
 * @param {Post[]} props.longestTitles - Un array de objetos que representa las publicaciones con títulos más largos.
 * @returns {TSX.Element}
 */

import React from "react";
import {
  Post,
  PostInfoDisplayProps,
  UserPosts,
} from "../../interface/post.interface";

const PostInfoDisplay: React.FC<PostInfoDisplayProps> = ({
  title,
  postsByUser,
  longestTitles,
}): JSX.Element => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">{title}</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Publicaciones por Usuario</h2>
              <div>
                {postsByUser.map((userPost: UserPosts) => (
                  <div key={userPost.userId}>
                    <strong>ID Usuario:</strong> {userPost.userId}{" "}
                    <strong>Publicaciones: </strong>
                    {userPost.count}
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
                {longestTitles.map((post: Post) => (
                  <li key={post.id} className="list-group-item">
                    <strong>ID Post:</strong> {post.id} <strong>Título:</strong>{" "}
                    {post.title}
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

export default PostInfoDisplay;
