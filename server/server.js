require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT
const cors = require("cors")
const connectDB = require("./config/db")
const connectCloudinary = require("./config/cloudinary")
const adminRouter = require("./routes/admin.route")
const clinetRouter = require("./routes/client.route")


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
app.use("/api/admin", adminRouter)
app.use("/api/blog", clinetRouter)

app.listen(PORT, ()=> {
    console.log(`Server is running at http://localhost:${PORT}`);
})