import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Button from "../reusable/Button.jsx";

const EditPostForm = () => {
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
        navigate(`/post/${id}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Edit Post</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center"
      >
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          {...register("title")}
          className="border border-black p-2 rounded-md"
        />
        <label htmlFor="content">Content:</label>
        <textarea
          name="content"
          id="content"
          cols="30"
          rows="10"
          className="border border-black p-2 rounded-md"
          {...register("content")}
        />

        <Button type="submit">Update Post</Button>
      </form>
    </div>
  );
};

export default EditPostForm;
