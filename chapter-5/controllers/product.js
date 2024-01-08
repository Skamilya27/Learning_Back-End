const fs = require("fs");

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

exports.createProduct = (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.status(201).json(req.body);
  };
  
exports.getAllProducts = (req, res) => {
    res.json(products);
  };
  
exports.getProduct = (req, res) => {
    const id = Number(req.params.id);
    const prod = products.find((i) => i.id === id);
    res.json(prod);
  };
  
exports.replaceProduct = (req, res) => {
    const id = Number(req.params.id);
    const prodIndex = products.findIndex((i) => i.id === id);
    products.splice(prodIndex, 1, { ...req.body, id: id });
    res.status(201).json({ product: "updated" });
  };
  
exports.updateProduct = (req, res) => {
    const id = Number(req.params.id);
    const prodIndex = products.findIndex((i) => i.id === id);
    const product = products[prodIndex];
    products.splice(prodIndex, 1, { ...product, ...req.body, id: id });
    res.status(201).json({ product: "updated" });
  };
  
exports.deleteProduct = (req, res) => {
    const id = Number(req.params.id);
    const prodIndex = products.findIndex((i) => i.id === id);
    const product = products[prodIndex];
    products.splice(prodIndex, 1);
    res.status(201).json(product);
  };