const mongoose = require('mongoose');
const { Schema } = mongoose;

const userAuthSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true
      },
    email: {
        type: String,
        unique: true,
        trim: true,
        validate: {
          validator: function(v) {
            return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(v);
          },
          message: props => `${props.value} is not a valid Email`
        },
        required: [true, 'User Email is required']
      },
    password: {
        type: String,
        trim: true,
        required: true
      },
    confirmpassword: {
        type: String,
        trim: true,
        required: true
      },
    token : {type: String}
  },{timestamps:true});
  
exports.userAuthSchema = mongoose.model('userdatas', userAuthSchema);