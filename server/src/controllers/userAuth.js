const model = require("../models/userAuth");
const userAuth = model.userAuthSchema;
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

exports.createuser = async (req, res) => {
  try {
    const userData = new userAuth(req.body);
    const hashpassword = bcrypt.hashSync(req.body.password, 10);
    userData.password = hashpassword;
    const hashconfirmpassword = bcrypt.hashSync(req.body.confirmpassword, 10);
    userData.confirmpassword = hashconfirmpassword;
    var token = jwt.sign({ email: req.body.email }, "shhhhh");
    userData.token = token;
    const savedData = await userData.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(500).json({
      message:
        "An error is occurred in creating user successfully in the database",
    });
    console.log(error);
  }
};
