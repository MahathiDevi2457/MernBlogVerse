const mongoose = require("mongoose");
const Post = require("../models/post");

const editableFields = [
  "title",
  "content",
  "category",
  "tags",
  "coverImage",
  "published",
];

function canManage(post, user) {
  return (
    post.author.toString() === user._id.toString() ||
    user.role === "admin"
  );
}

async function getPosts(req, res, next) {
  try {
    const filter = req.user
      ? { $or: [{ published: true }, { author: req.user._id }] }
      : { published: true };

    const posts = await Post.find(filter)
      .populate("author", "name")
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    next(error);
  }
}

async function getPost(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    const post = await Post.findById(req.params.id).populate("author", "name");

    if (!post) return res.status(404).json({ message: "Post not found" });

    if (!post.published && (!req.user || !canManage(post, req.user))) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    next(error);
  }
}

async function createPost(req, res, next) {
  try {
    const { title, content } = req.body;

    if (
      typeof title !== "string" || !title.trim() ||
      typeof content !== "string" || !content.trim()
    ) {
      return res.status(400).json({ message: "Title and content required" });
    }

    const data = { author: req.user._id };

    for (const field of editableFields) {
      if (req.body[field] !== undefined) data[field] = req.body[field];
    }

    const post = await Post.create(data);
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
}

async function updatePost(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ message: "Post not found" });

    if (!canManage(post, req.user)) {
      return res.status(403).json({ message: "Access denied" });
    }

    for (const field of editableFields) {
      if (req.body[field] !== undefined) post[field] = req.body[field];
    }

    await post.save();
    res.json(post);
  } catch (error) {
    next(error);
  }
}

async function deletePost(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ message: "Post not found" });

    if (!canManage(post, req.user)) {
      return res.status(403).json({ message: "Access denied" });
    }

    await post.deleteOne();
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    next(error);
  }
}

async function getMyPosts(req, res, next) {
  try {
    res.json(
      await Post.find({ author: req.user._id }).sort({ createdAt: -1 })
    );
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  getMyPosts,
};