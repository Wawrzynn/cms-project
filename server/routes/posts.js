const express = require("express");

const postController = require("../controllers/posts");

const router = express.Router();

router.get("/", postController.getPosts);
router.get("/:id", postController.getPost);
router.post("/", postController.createPost);
router.put("/:id", postController.editPost);
router.delete("/:id", postController.deletePost);

module.exports = router;
