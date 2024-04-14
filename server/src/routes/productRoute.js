const express = require("express");
const { getAllProduct, createMultipleProducts, createProduct } = require("../controllers/productController");

const router = express.Router();

router.route("/products").get(getAllProduct);
router.route("/products/new").post(createProduct);
router.route("/products/multiple_products").post(createMultipleProducts);

module.exports = router;
 