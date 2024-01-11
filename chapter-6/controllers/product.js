const fs = require("fs");
const { Product } = require("../model/product");

//CREATE
exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json(err);
  }
};

//READ
exports.getAllProducts = async (req, res) => {
  // const products = await Product.find(); //to get all the products list

  try {
    const products = await Product.find({ price: { $gt: 500 } }); //to find the products which has price greater than 500
    res.json(products);
  } catch (err) {
    res.status(400).json(err);
  }
};

//READ USING ID
exports.getProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const products = await Product.findById(id);
    res.json(products);
  } catch (err) {
    res.status(400).json(err);
  }
};

//UPDATE PUT REQ
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndReplace({ _id: id }, req.body, {new:true});
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};


//UPDATE PATCH REQ
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndUpdate({ _id: id }, req.body, {new:true});
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};


//DELETE
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndDelete({ _id: id});
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};
