import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ErrorModal from "../../components/reusable/ErrorModal.jsx";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState([]);

  const onSubmit = async (data) => {
    await axios
      .post(`${import.meta.env.VITE_LOCALHOST_API_URL}users/register`, data)
      .then((response) => {
        console.log(response);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.errors.map((e) => e.msg));
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username:</label>
        <input
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 5,
              message: "Username must be at least 5 characters long",
            },
            maxLength: {
              value: 15,
              message: "Username must be at most 15 characters long",
            },
          })}
        />
        {errors.username && <span>{errors.username.message}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
            minLength: {
              value: 5,
              message: "Email must be at least 5 characters long",
            },
            maxLength: {
              value: 30,
              message: "Email must be at most 30 characters long",
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Password must be at least 5 characters long",
            },
            maxLength: {
              value: 12,
              message: "Password must be at most 12 characters long",
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <button type="submit">Register</button>
      {error && (
        <div>
          {error.map((err, index) => (
            <ErrorModal key={index} error={err} />
          ))}
        </div>
      )}
    </form>
  );
};

export default RegisterForm;
