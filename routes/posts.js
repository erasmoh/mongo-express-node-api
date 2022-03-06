const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const Post = require("../models/Post");

// Get all posts
router.get("/", async (req, res) => {
  //   res.send("We are on posts");
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// Create a post
router.post("/", auth, async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  const savedPost = await post.save();
  res.json(savedPost);
});

// Get specific post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete specific post
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Edit one post
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title, description: req.body.description } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
