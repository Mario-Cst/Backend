const express = require("express");
const {
  createPost,
  getPosts,
  getPost,
  deletePost,
  updatePost,
} = require("../controllers/postController.js");

const Posting = require("../models/modelPost.js");

const router = express.Router();

//GET ALL POSTS
router.get("/", getPosts);

//GET SINGLE POST
router.get("/:id", getPost);

//POST POST
router.post("/", createPost);

//DELETE POST
router.delete("/:id", deletePost);

//UPDATE POSTS
router.patch("/:id", updatePost);

module.exports = router;
