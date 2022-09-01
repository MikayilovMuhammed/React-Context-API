import React from "react";
import { usePostsContext } from "../../context/Post";

function Posts() {
  const [{ posts }] = usePostsContext();

  return (
    <>
      <ul>
        {posts.map(({ title, id }) => (
          <li key={id}>
            <h2>
              {id} - {title}
            </h2>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Posts;
