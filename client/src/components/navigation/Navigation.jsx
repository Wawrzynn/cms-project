import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link className="pr-3" to="/">
        Home
      </Link>
      <Link className="pr-3" to="/add-post">
        Add Post
      </Link>
    </nav>
  );
};

export default Navigation;
