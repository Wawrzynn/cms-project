import { useForm } from "react-hook-form";
import axios from "axios";

const AddPostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { title, content } = data;
    const postObject = {
      title,
      content,
    };
    await axios
      .post(`${import.meta.env.VITE_LOCALHOST_API_URL}posts`, postObject)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
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
        {...register("content", {
          required: "true",
        })}
      ></textarea>
      {errors.content && <span>This field is required</span>}
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPostForm;
