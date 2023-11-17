import { Link } from "react-router-dom";
import Button from "../reusable/Button.jsx";

const Post = ({ post }) => {
  const formattedDate = new Date(post.createdAt).toLocaleString();

  return (
    <li key={post._id} className="mt-5">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
      <p>Created: {formattedDate}</p>
      <div className="flex flex-row justify-between items-center">
        <Button>
          <Link to={`/post/${post._id}`}>View post</Link>
        </Button>
      </div>
    </li>
  );
};

export default Post;
