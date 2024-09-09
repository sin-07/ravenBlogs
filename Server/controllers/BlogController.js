const Blog = require("../models/Blog");

const createBlog = async (req, res) => {
  const { title, content, author, tags, thumbnail, publicId } = req.body;
  try {
    if (!title || !content || !author || !tags || !thumbnail || !publicId) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    let blog = await Blog.create({
      title,
      content,
      author,
      tags,
      thumbnail,
      publicId,
    });
    await blog.save();
    return res.status(201).json({ success: true, message: "Blog created" });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    let blogs = await Blog.find().sort({ createdAt: -1 });
    if (!blogs) {
      return res
        .status(404)
        .json({ success: false, message: "No blogs found" });
    }
    return res.status(200).json({ success: true, blogs });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

const getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    let blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ success: false, message: "No blog found" });
    }
    return res.status(200).json({ success: true, message:"blog fetched", blog });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
module.exports = { createBlog, getAllBlogs,getBlogById };
