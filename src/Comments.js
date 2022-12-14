import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { cardService } from "./components/APIs/Services/Cards";
import { usePostsContext } from "./context/Post";

function Comments() {
  const { state: stateFromHomePage } = useLocation();
  const { push } = useHistory();
  const [commentsByPost, setCommentsByPost] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [{ setIsTrue, isTrue }] = usePostsContext();

  React.useEffect(() => {
    setIsLoading(true);
    cardService
      .getCommentsById(stateFromHomePage)
      .then(({ data }) => setCommentsByPost(data))
      .finally(() => setIsLoading(false));
  }, [stateFromHomePage]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleFunc = () => setIsTrue(!isTrue);
  return (
    <div className="container">
      <button onClick={() => push("/")}>Go back</button>

      <div className="row">
        {commentsByPost.map(({ id, name, email, body }) => (
          <div className="col-md-4 my-5 border" key={id}>
            <div className="cards">
              <p> {body} </p>
            </div>
            <div>
              <b>From: {name} </b>
            </div>
            <div>
              <b>Email: {email} </b>
            </div>
            <button onClick={handleFunc}>Change isTrueState</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
