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

module.exports = {
    adminLogin,
    addBlog
}