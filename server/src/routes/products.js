const express = require("express");

const { getProduct, createProduct, deleteProduct, updateProduct, getFilterProducts } = require("../controllers/productController");
const upload = require("../middleware/upload");

const productRouter = express.Router();

productRouter.get("/productList", getProduct);

productRouter.post("/createProduct", upload.array('images', 4), createProduct);
 
productRouter.delete("/:product_id", deleteProduct);

productRouter.put("/:product_id", updateProduct);

productRouter.get("/filterProducts", getFilterProducts);

module.exports = {productRouter};