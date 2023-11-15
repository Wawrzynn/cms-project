const Post = require("../models/post");
const { v4: uuidv4 } = require("uuid");

exports.getPosts = async (req, res) => {
  Post.find()
    .then((posts) => res.status(200).json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getPost = async (req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.createPost = async (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  newPost
    .save()
    .then(() => res.status(201).json("Post added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.editPost = async (req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      post.title = req.body.title;
      post.content = req.body.content;
      post
        .save()
        .then(() => res.status(200).json("Post updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.deletePost = async (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Post deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
};
