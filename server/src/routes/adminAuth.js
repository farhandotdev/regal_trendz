const express = require("express");
const { signup, signin } = require("../controllers/adminAuthController");

const adminAuthRouter = express.Router();

// Using Signup Methods from adminAuthController.js
adminAuthRouter.post("/signup", signup);
adminAuthRouter.post("/signin", signin);

module.exports = {adminAuthRouter};