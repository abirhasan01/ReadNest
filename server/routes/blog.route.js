const { AdminLogin, adminLogin, addBlog } = require("../controllers/blog.controller")
const upload = require("../middleware/multer")

const blogRouter = require("express").Router()


blogRouter.post("/login", adminLogin)
blogRouter.post("/add-blog", upload.single("image"), addBlog)

module.exports = blogRouter