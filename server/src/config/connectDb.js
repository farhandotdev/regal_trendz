const mongoose = require("mongoose");

const connectDatabse = () => {
  mongoose.connect(process.env.DB_URL).then(() => {
    console.log("DB connected Successfully...");
  });
};

module.exports = connectDatabse;