import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./contents/Home";
import { Post } from "./contents/Post";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<Post />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
