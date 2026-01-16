require("dotenv").config()
const jwt = require("jsonwebtoken")
const { v2 : cloudinary } = require("cloudinary");
const BlogModel = require("../models/blog.model");

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (
          email !== process.env.ADMIN_EMAIL ||
          password !== process.env.ADMIN_PASSWORD
        ) {
          res.status(404).json({
            success: false,
            message: "Invalid Credential",
          });
        }

        const token = jwt.sign({ email }, process.env.JWT_SECRET);

        res.status(200).json({
            success: true,
            message: "Login Successfull",
            token
        })

    } catch (error) {
        console.log(error)
        res.json({
          success: false,
          message: error.message
        });
    }
}
const addBlog = async (req, res) => {
    try {
        const { title, subTitle, description, category, isPublished } = req.body
        const image = req.file?.path

        const resultImage = await cloudinary.uploader.upload(image, {resource_type: "image"})

        const newBlog = {
            title,
            subTitle,
            description,
            image: resultImage.secure_url,
            category,
            isPublished
        }
        const blog = new BlogModel(newBlog)
        await blog.save()

        res.json({
            success: true,
            message: "Blog Added"
        })

    } catch (error) {
        console.log(error);
        res.json({
          success: false,
          message: error.message,
        });
    }
}

const blogList = async (req, res) => {
    try {
        const allBlog = await BlogModel.find({}).sort({ createdAt: -1 });
        res.json({
            success: true,
            allBlog
        })

    } catch (error) {
        console.log(error);
        res.json({
          success: false,
          message: error.message,
        });
    }
}
const removeBlog = async (req, res) => {
    try {
        const { id } = req.body
        await BlogModel.findByIdAndDelete(id)
        res.json({
            success: true,
            message: "Remove Successfull"
        })
        
    } catch (error) {
        console.log(error);
        res.json({
          success: false,
          message: error.message,
        });
    }
}

const getDashboardData = async (req, res) => {
    try {

        const recentBlogs = await BlogModel.find({})
          .sort({ createdAt: -1 })
          .limit(5);
        const blogs = await BlogModel.countDocuments();
        const comments = 0
        const drafts = await BlogModel.countDocuments({ isPublished : false })

        const dashboardData = {
          blogs,
          comments,
          drafts,
          recentBlogs,
        };
        res.json({
            success: true,
            dashboardData
        })
        
    } catch (error) {
        console.log(error);
        res.json({
          success: false,
          message: error.message,
        });
    }
}

const togglePublish = async (req, res) => {
    try {
        const {id} = req.body
        const selectedItem = await BlogModel.findById(id)
        selectedItem.isPublished = !selectedItem.isPublished;
        await selectedItem.save()

        res.json({
            success: true,
            message: "Status Updated"
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
  adminLogin,
  addBlog,
  blogList,
  removeBlog,
  getDashboardData,
  togglePublish,
};