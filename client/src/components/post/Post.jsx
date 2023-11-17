import axios from "axios";
import { useEffect } from "react";
import Button from "../reusable/Button.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const PostItem = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const formattedDate = new Date(post.createdAt).toLocaleString();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_LOCALHOST_API_URL}posts/${id}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const deletePost = async () => {
    await axios
      .delete(`${import.meta.env.VITE_LOCALHOST_API_URL}posts/${post._id}`)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
      <p>Created: {formattedDate}</p>
      <div className="">
        <Button>
          <Link to={`/edit-post/${post._id}`}>Edit</Link>
        </Button>
        <Button
          onClick={() => {
            deletePost();
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default PostItem;
