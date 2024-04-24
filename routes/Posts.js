const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
});

router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  await newPost.save();
  res.status(201).send("Post created");
});

module.exports = router;
