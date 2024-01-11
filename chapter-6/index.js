const express = require("express");
const morgan = require("morgan");
const productRouter = require("./routes/product");
const mongoose = require('mongoose');

const server = express();

//DB connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log('database connected');
}



server.use(morgan("default"));
server.use(express.json());

server.use('/products', productRouter.routes);

server.listen(8080, () => {
  console.log("server started");
});
