const { AdminLogin, adminLogin, addBlog, removeBlog } = require("../controllers/blog.controller")
const { adminAuth } = require("../middleware/adminAuth")
const upload = require("../middleware/multer")

const blogRouter = require("express").Router()


blogRouter.post("/login", adminLogin)
blogRouter.post("/add-blog" ,upload.single("image"), addBlog)
blogRouter.post("/list",  addBlog)
blogRouter.post("/remove",  removeBlog)

module.exports = blogRouter