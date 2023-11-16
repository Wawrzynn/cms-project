import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const formattedDate = new Date(post.createdAt).toLocaleString();

  return (
    <li key={post._id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
      <p>Created: {formattedDate}</p>
      <button>
        <Link to={`/edit-post/${post._id}`}>Edit</Link>
      </button>
    </li>
  );
};

export default Post;
