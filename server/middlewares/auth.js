// // middleware/authMiddleware.js
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// exports.protect = async (req, res, next) => {
//   let token;

//   // Check for token in headers
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     token = req.headers.authorization.split(" ")[1];
//   }

//   if (!token) {
//     return res
//       .status(401)
//       .json({ success: false, message: "Not authorized, token missing" });
//   }

//   try {
//     // Verify token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // Attach user to request
//     req.user = await User.findById(decoded.id).select("-password");

//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(401).json({ success: false, message: "Not authorized, token invalid" });
//   }
// };




// middleware/auth.js
const jwt = require('jsonwebtoken');


module.exports = function (req, res, next) {
const token = req.header('Authorization')?.split(' ')[1];
if (!token) return res.status(401).json({ message: 'No token, authorization denied' });
try {
const decoded = jwt.verify(token, process.env.JWT_SECRET);
req.user = decoded.user;
next();
} catch (err) {
res.status(401).json({ message: 'Token is not valid' });
}
};

