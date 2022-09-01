import React from "react";
import { cardService } from "../../components/APIs/Services/Cards";

const PostsContext = React.createContext([]);

function PostsProvider({ children }) {
  const [isTrue, setIsTrue] = React.useState(false);
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    cardService.getAllPosts().then(({ data }) => setPosts(data));
  }, []);

  return (
    <PostsContext.Provider value={[{ isTrue, setIsTrue, posts }]}>
      {children}
    </PostsContext.Provider>
  );
}

const usePostsContext = () => {
  const postsContext = React.useContext(PostsContext);
  return postsContext;
};

export { usePostsContext, PostsProvider };
