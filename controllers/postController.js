const Posting = require("../models/modelPost.js");
const mongoose = require("mongoose");

//get all post

const getPosts = async (req, res) => {
  const posts = await Posting.find({}).sort({ createdAd: -1 });

  res.status(200).json(posts);
};

//get single post

const getPost = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json("Algo no funcionó");
  }
  const post = await Posting.findById(id);
  if (!post) {
    return res.status(404).json("Algo no funcionó");
  }
  res.status(200).json(post);
};

//create post

const createPost = async (req, res) => {
  //ad to bd
  const { user, content } = req.body;
  try {
    const post = await Posting.create({
      user: req.body.user,
      content: req.body.content,
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete post
const deletePost = async (req, res) => {
  const id = req.params.id;
  console.log("Id: " + id);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json("Algo no funcionó");
  }
  const post = await Posting.findOneAndDelete({ _id: id });
  if (!post) {
    return res.status(404).json("Algo no funcionó");
  }
  res.status(200).json(post);
};

//update post
const updatePost = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json("Algo no funcionó");
  }
  const post = await Posting.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!post) {
    return res.status(404).json("Algo no funcionó");
  }
  res.status(200).json(post);
};
module.exports = {
  createPost,
  getPosts,
  getPost,
  deletePost,
  updatePost,
};
