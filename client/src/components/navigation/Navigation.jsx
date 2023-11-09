import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link className="pr-3" to="/">Home</Link>
      <Link className="pr-3" to="/login">Login</Link>
      <Link className="pr-3" to="/signup">Signup</Link>
    </nav>
  );
};

export default Navigation;
