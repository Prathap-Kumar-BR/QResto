const productModel = require("../models/productModel");

exports.addProductController = async (req, res) => {
  const product = req.body.product;
  try {
    const newProduct = new productModel({
      name: product.name,
      varients: ["small", "medium", "large"],
      image: product.image,
      description: product.description,
      category: product.category,
      prices: [product.prices],
    });

    await newProduct.save();
    res.status(200).json({
      successMessage: "New Product added successfully",
    });
  } catch (err) {
    console.log(err, "productController error", err);
    res.status(500).json({
      errorMessage: "Please try again later",
    });
  }
};

exports.getAllProductsController = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ products });
  } catch (err) {
    console.log(err, "getAllProductsController error", err);
    res.status(500).json({
      errorMessage: "Please try again later",
    });
  }
};

exports.editProductController = async (req, res) => {
  const editedProduct = req.body.editedProduct;
  try {
    const newProduct = await productModel.findOne({ _id: editedProduct._id });
    (newProduct.name = editedProduct.name),
      (newProduct.description = editedProduct.description),
      (newProduct.image = editedProduct.image),
      (newProduct.category = editedProduct.category);
    newProduct.prices = [editedProduct.prices];
    await newProduct.save();
    res.status(200).json({
      successMessage: "Edited Product successfully",
    });
  } catch (err) {
    console.log(err, "editProductController error", err);
    res.status(500).json({
      errorMessage: "Please try again later",
    });
  }
};

exports.deleteProductController = async (req, res) => {
  const productid = req.body.productid;
  try {
    await productModel.findOneAndDelete({ _id: productid });

    res.status(200).json({
      successMessage: " Product Deleted successfully",
    });
  } catch (err) {
    console.log(err, "deleteProductController error", err);
    res.status(500).json({
      errorMessage: "Please try again later",
    });
  }
};

exports.getProductControllerById = async (req, res) => {
  try {
    const productid = req.params.productid;

    const product = await productModel.findById(productid);

    res.json(product);
  } catch (err) {
    console.log(err, "productController error", err);
    res.status(500).json({
      errorMessage: "Please try again later",
    });
  }
};
