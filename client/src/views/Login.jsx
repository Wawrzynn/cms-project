import LoginForm from "../components/login/LoginForm.jsx";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
      <p>Don't have account yet?</p>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Login;
