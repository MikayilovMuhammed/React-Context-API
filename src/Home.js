import React from "react";
import { useHistory } from "react-router-dom";
import { usePostsContext } from "./context/Post";

function Home() {
  const { push } = useHistory();
  const [{ isTrue, posts }] = usePostsContext();

  const getComments = React.useCallback(
    (id) => {
      push("/comments", id);
    },
    [push]
  );

  const handleLogStateFromContext = React.useCallback(() => {
    console.log(isTrue);
  }, [isTrue]);

  return (
    <div className="container">
      <div className="row">
        {posts.map(({ id, title, body }) => (
          <div className="col-md-4" key={id}>
            <div className="cards">
              <h1>{title}</h1>
              <p> {body} </p>
              <button onClick={() => getComments(id)}>Get comments</button>
              <button onClick={() => handleLogStateFromContext()}>
                Show isTrueState
              </button>
            </div>
          </div>
        ))}
      </div>
      <button>Go to the About page</button>
    </div>
  );
}

export default Home;
