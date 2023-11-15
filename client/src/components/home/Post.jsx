const Post = ({post}) => {
  return (
    <li key={post._id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
    </li>
  );
};

export default Post;
