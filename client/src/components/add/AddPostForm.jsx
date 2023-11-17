import { useForm } from "react-hook-form";
import axios from "axios";
import Button from "../reusable/Button.jsx";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { title, content } = data;
    const postObject = {
      title,
      content,
    };
    await axios
      .post(`${import.meta.env.VITE_LOCALHOST_API_URL}posts`, postObject)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center"
    >
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        className="border border-black p-2 rounded-md"
        {...register("title", {
          required: "true",
        })}
      />
      {errors.title && <span>This field is required</span>}
      <label htmlFor="content">Content</label>
      <textarea
        name="content"
        id="content"
        cols="30"
        rows="10"
        className="border border-black p-2 rounded-md"
        {...register("content", {
          required: "true",
        })}
      ></textarea>
      {errors.content && <span>This field is required</span>}
      <Button type="submit">Add Post</Button>
    </form>
  );
};

export default AddPostForm;
