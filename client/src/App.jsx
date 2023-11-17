import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import AddPost from "./views/AddPost.jsx";
import EditPost from "./views/EditPost.jsx";
import Post from "./views/Post.jsx";
import Navigation from "./components/navigation/Navigation.jsx";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/edit-post/:id" element={<EditPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
