const fs = require("fs");
const express = require("express");
const morgan = require("morgan");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const server = express();

//using morgan to log things
server.use(morgan("default"));

server.use(express.json()); //body parser --> while using req.body we need body parser otherwise it wouldnt work \

// server.use(express.urlencoded());
server.use(express.static("public"));

//CREATE POST /products
server.post("/products", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(201).json(req.body);
});

//READ GET /PRODUCTS
server.get("/products", (req, res) => {
  res.json(products);
});

//READ GET /product/:id
server.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const prod = products.find((i) => i.id === id);
  res.json(prod);
});

//UPDATE PUT /products/:id
server.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const prodIndex = products.findIndex((i) => i.id === id);
  products.splice(prodIndex, 1, { ...req.body, id: id });
  res.status(201).json({ product: "updated" });
});

//UPDATE PATCH /products/:id
server.patch("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const prodIndex = products.findIndex((i) => i.id === id);
  const product = products[prodIndex];
  products.splice(prodIndex, 1, { ...product, ...req.body, id: id });
  res.status(201).json({ product: "updated" });
});

//DELETE /products/:id
server.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const prodIndex = products.findIndex((i) => i.id === id);
  const product = products[prodIndex];
  products.splice(prodIndex, 1);
  res.status(201).json(product);
});

server.listen(8080, () => {
  console.log("server started");
});
