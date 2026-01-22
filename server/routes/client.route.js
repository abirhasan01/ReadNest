const { Lists, singleBlog } = require("../controllers/client.controller")

const clinetRouter = require("express").Router()

clinetRouter.get("/all", Lists)
clinetRouter.get("/single/:id", singleBlog)

module.exports = clinetRouter