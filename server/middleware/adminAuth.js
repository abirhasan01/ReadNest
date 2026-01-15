require("dotenv").config()
const jwt = require("jsonwebtoken")

const adminAuth = async (req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) {
          return res.json({
            success: false,
            message: "Not Authorized",
          });
        }
        const decoded_token = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded_token !== process.env.ADMIN_EMAIL) {
          return res.json({
            success: false,
            message: "Not Authorized Login Again",
          });
        }
        next()
    } catch (error) {
        console.log(error);
        res.json({
          success: false,
          message: error.message,
        });
    }
}
module.exports = {
    adminAuth
}