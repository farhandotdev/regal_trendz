const ErrorHandler = require("../utils/errorHandler");
const User = require("../models/userModel");
// const sendToken = require("../utils/jwtToken");
// const sendEmail = require("../utils/sendEmail");
// const crypto = require("crypto");
const catchAsyncErros = require("../middlewares/catchAsyncErrors");

// Register User
exports.registerUser = catchAsyncErros(async (req, res, next) => {
  const { email, name, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is a sample id",
      url: "profilePic_url",
    },
  });
  res.status(201).json({
    success:true,
    user
  })
  // sendToken(user, 201, res);
});

// // Login User
// exports.loginUser = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;

//     // checking if user has given password and email both

//     if (!email || !password) {
//       return next(new ErrorHandler("Please Enter Email & Password", 400));
//     }

//     const user = await User.findOne({ email }).select("+password");

//     if (!user) {
//       return next(new ErrorHandler("Invalid email or password", 401));
//     }

//     const isPasswordMatched = await user.comparePassword(password);

//     if (!isPasswordMatched) {
//       return next(new ErrorHandler("Invalid email or password", 401));
//     }

//     sendToken(user, 200, res);
//   } catch (error) {
//     next(error);
//   }
// };

// // Logout user
// exports.logout = async (req, res, next) => {
//   try {
//     res.cookie("token", null, {
//       expires: new Date(Date.now()),
//       httpOnly: true,
//     });

//     res.status(200).json({
//       success: true,
//       message: "Logged Out ",
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // Forgot Password
// exports.forgotPassword = async (req, res, next) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });

//     if (!user) {
//       return next(new ErrorHandler("User not Found", 404));
//     }

//     // Get ResetPassword Token
//     const resetToken = user.getResetPasswordToken();
//     await user.save({ validateBeforeSave: fasle });

//     const resetPasswordUrl = `${req.protocol}://${req.get(
//       "host"
//     )}/api/v1/password/reset/${resetToken}`;

//     const message = `Your password reset is :- \n\n${resetPasswordUrl} \n\n If you have not requested this email then, please ignore it`;

//     try {
//       await sendEmail({
//         email: user.email,
//         subject: "RegalTrendz Password Recovery",
//         message,
//       });

//       res.status(200).json({
//         success: true,
//         message: `Email send to ${user.email} successfully`,
//       });
//     } catch (error) {
//       user.resetPasswordToken = undefined;
//       user.resetPasswordExpire = undefined;

//       await user.save({ validateBeforeSave: false });
//       return next(new ErrorHandler(error.message, 500));
//     }
//   } catch (error) {
//     next(error);
//   }
// };

// exports.resetPassword = async (req, res, next) => {
//   try {
//     // creating token Hash
//     const resetPasswordToken = crypto
//       .createHash("sha256")
//       .update(req.params.token)
//       .digest("hex");

//     const user = await User.findOne({
//       resetPasswordToken,
//       resetPasswordExpire: { $gt: Date.now() },
//     });
//     if (!user) {
//       return next(
//         new ErrorHandler(
//           "Reset Password Token is invalid or has been expried",
//           404
//         )
//       );
//     }

//     if (req.body.password !== req.body.confirmPassword) {
//       return next(new ErrorHandler("Password doesn't matched", 404));
//     }

//     user.password = req.body.password;
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpire = undefined;
//     await user.save();

//     sendToken(user, 200, res);
//   } catch (error) {
//     next(error);
//   }
// };

// // Get User Details
// exports.getUserDetails = async (req, res, next) => {
//   try {
//     const user = await User.findById(req.user.id);

//     res.status(200).json({
//       success: true,
//       user,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // Get Update Password
// exports.updatePassword = async (req, res, next) => {
//   try {
//     const user = await User.findById(req.user.id).select("+password");

//     const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

//     if (!isPasswordMatched) {
//       return next(new ErrorHandler("Old password is incorrect", 400));
//     }

//     if (req.body.newPassword !== req.body.confirmPassword) {
//       return next(new ErrorHandler("password does not match", 400));
//     }

//     user.password = req.body.newPassword;

//     await user.save();

//     sendToken(user, 200, res);
//   } catch (error) {
//     next(error);
//   }
// };

// // Get Update Profile
// exports.updateProfile = async (req, res, next) => {
//   try {
//     const newUserData = {
//       name: req.body.name,
//       email: req.body.email,
//     };

//     //  we will add cloudinary later

//     const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
//       new: true,
//       runValidators: true,
//       useFindAndModify: false,
//     });
//     res.status(200).json({
//       success: true,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // Get Alll Users (admin)
// exports.getAllUsers = async (req, res, next) => {
//   try {
//     const users = await User.find();
//     res.status(200).json({
//       success: true,
//       users,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // Get Single User (admin)
// exports.getSingleUser = async (req, res, next) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) {
//       return res.status(401).json({
//         msg: `No user found wit id: ${req.params.body}`,
//       });
//     }
//     res.status(200).json({
//       success: true,
//       user,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // Get Update User Role (Admin)
// exports.updateUserRole = async (req, res, next) => {
//   try {
//     const newUserData = {
//       name: req.body.name,
//       email: req.body.email,
//       role: req.body.role,
//     };

//     const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
//       new: true,
//       runValidators: true,
//       useFindAndModify: false,
//     });
//     res.status(200).json({
//       success: true,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // Get Delete User (Admin)
// exports.deleteUser = async (req, res, next) => {
//   try {
//     const user = await User.findById(req.user.id);

//     if (!user) {
//       return next(
//         new ErrorHandler(`User does not exist with Id: ${req.params.id}`)
//       );
//     }

//     // Check if the user has a role property before accessing it
//     if (!user.role) {
//       return next(new ErrorHandler(`User does not have a role property`));
//     }

//     // Continue with the deletion logic
//     await user.deleteOne();
//     res
//       .status(200)
//       .json({ success: true, message: "User deleted successfully" });
//   } catch (error) {
//     next(error);
//   }
// };
