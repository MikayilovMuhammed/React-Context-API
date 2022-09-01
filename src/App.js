import "./App.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Error from "./components/Error";
import Posts from "./components/Posts";
import Home from "./Home";
import Header from "./components/Header";
import Comments from "./Comments";
import { PostsProvider } from "./context/Post";

function App() {
  return (
    <Router>
      <PostsProvider>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/comments" component={Comments} />
          <Route path="/posts" component={Posts} />
          <Route path="/error" component={Error} />
          <Redirect to="/error" />
        </Switch>
      </PostsProvider>
    </Router>
  );
}

export default App;
