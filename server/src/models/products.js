const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    price:{
        type: String,
        require: true
    },
    category:{
        type: String,
        require: true
    },
    images: [{type: String}]

}, {timestamps: true});

module.exports = mongoose.model("Product", ProductSchema)