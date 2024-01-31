const express = require('express');
const user = require('../controllers/userAuth')
const userrouter = express.Router()

userrouter.post('/',user.createuser)

exports.userrouter = userrouter