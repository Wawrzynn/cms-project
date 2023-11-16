import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import AddPost from "./views/AddPost.jsx";
import EditPost from "./views/EditPost.jsx";
import Navigation from "./components/navigation/Navigation.jsx";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/edit-post/:id" element={<EditPost />} />
      </Routes>
    </div>
  );
};

export default App;
