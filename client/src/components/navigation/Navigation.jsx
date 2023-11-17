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
      <Link className="pr-3" to="/login">
        Login
      </Link>
    </nav>
  );
};

export default Navigation;
