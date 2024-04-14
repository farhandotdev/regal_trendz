const ErrorHandler = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser = async (req, res, next) => {
  try {
    const {token} = req.cookies;
    if (!token) return next(new ErrorHandler("Please login to access this resource", 401));
    
    // Verify token
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodedData.id);
    console.log('USER', req.user);
    next();
  } catch (error) {
    next(error);
  }
};

// exports.authorizedRoles = (...roles) => {
//     return (req, res, next) => {
//         if(!roles.includes(req.user.role)) {
//             return next(new ErrorHandler(`You are not authorised to perform this action`,  403));
//         }
//         next();
//     };
// }
