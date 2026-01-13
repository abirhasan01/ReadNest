require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT
const cors = require("cors")
const connectDB = require("./config/db")
const blogRouter = require("./routes/blog.route")
const connectCloudinary = require("./config/cloudinary")


// ------------middleware & app config------------
connectDB()
connectCloudinary()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// -----------api endpoints-----------
app.get("/", (req, res)=> {
    res.send("API Working")
})
app.use("/api/blog", blogRouter)

app.listen(PORT, ()=> {
    console.log(`Server is running at localhost:${PORT}`)
})