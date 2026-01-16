const { AdminLogin, adminLogin, addBlog, removeBlog, getDashboardData, blogList, togglePublish } = require("../controllers/blog.controller")
const { adminAuth } = require("../middleware/adminAuth")
const upload = require("../middleware/multer")

const blogRouter = require("express").Router()


blogRouter.post("/login", adminLogin)
blogRouter.post("/add-blog", adminAuth ,upload.single("image"), addBlog)
blogRouter.get("/list",  blogList)
blogRouter.post("/remove",  removeBlog)
blogRouter.get("/dashboard",  getDashboardData)
blogRouter.put("/update-toggle",  togglePublish)

module.exports = blogRouter