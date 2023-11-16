import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_LOCALHOST_API_URL}posts/${id}`)
      .then((res) => {
        Object.entries(res.data).forEach(([key, value]) => {
          setValue(key, value);
        });
      })
      .catch((error) => console.log(error));
  }, [id, setValue]);

  const onSubmit = (data) => {
    axios
      .put(`${import.meta.env.VITE_LOCALHOST_API_URL}posts/${id}`, data)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Title:
          <input type="text" name="title" {...register("title")} />
        </label>
        <label>
          Content:
          <textarea name="content" {...register("content")} />
        </label>
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;
