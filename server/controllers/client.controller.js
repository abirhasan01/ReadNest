const BlogModel = require("../models/blog.model")


const Lists = async (req, res) => {
    try {
      const Blogs = await BlogModel.find();
      const allBlogs = Blogs.filter((blog) => blog.isPublished !== false);

      res.json({
        success: true,
        allBlogs,
      });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: error.message,
      });
    }
}

const singleBlog = async (req, res) => {
  try {
    const { id } = req.params
    const blog = await BlogModel.findById(id);
    res.json({
      success: true,
      blog
    })
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = {
  Lists,
  singleBlog,
};