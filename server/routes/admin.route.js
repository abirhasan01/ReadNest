
const { adminLogin, addBlog, blogList, removeBlog, getDashboardData, togglePublish } = require("../controllers/admin.controller")
const { adminAuth } = require("../middleware/adminAuth")
const upload = require("../middleware/multer")

const adminRouter = require("express").Router()


adminRouter.post("/login", adminLogin)
adminRouter.post("/add-blog", adminAuth ,upload.single("image"), addBlog)
adminRouter.get("/list",  blogList)
adminRouter.post("/remove",  removeBlog)
adminRouter.get("/dashboard",  getDashboardData)
adminRouter.put("/update-toggle",  togglePublish)

module.exports = adminRouter;