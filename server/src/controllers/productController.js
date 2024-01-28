const productModel = require("../models/products");

// Basics CURD Operations Over Products

// Fetching all existing Products
const getProduct = async (req, res) => {
  try {
    const allProducts = await productModel.find();
    res.status(200).json(allProducts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Creating New Product
const createProduct = async (req, res) => {
  try {
    const { title, description, price, category } = req.body;
    const images = req.files.map((file) => file.filename);

    const newProduct = new productModel({
      title,
      description,
      price,
      category,
      images,
    });

    console.log("New Product:", newProduct); // Log the new product object
    await newProduct.save();
    res.status(200).json({ message: "Product is Created Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};


// Deleting Existing Product
const deleteProduct = async (req, res) => {
  const product_id = req.params.product_id;
  console.log(product_id);
  try {
    const product = await productModel.findByIdAndDelete(product_id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Updating Existing Product
const updateProduct = async (req, res) => {
  try {
    const product_id = req.params.product_id;

    const { title, description, price, category } = req.body;

    const updatedProduct = await productModel.findByIdAndUpdate(
      product_id,
      {
        title,
        description,
        price,
        category,
      },
      { new: true }
    );

    if (!updateProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Filtering the Products
const getFilterProducts = async (req, res) => {
  try {
    const {category, price, title} = req.query;

    const filter = {};

    if(title){
      filter.title = { $regex: new RegExp(title, 'i') };
    }

    if(category){
      filter.category = { $regex: new RegExp(category, 'i') };
    }

    
    if(price){
      filter.price = price;
    }

    const filteredProducts = await productModel.find(filter);

    if(filteredProducts.length === 0){
      return res.status(404).json({message:"No matching product found"});
    }

    res.status(200).json(filteredProducts);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}


module.exports = { getProduct, createProduct, deleteProduct, updateProduct, getFilterProducts };
