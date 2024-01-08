const express = require("express");
const morgan = require("morgan");
const productRouter = require("./routes/product")


const server = express();

server.use(morgan("default"));
server.use(express.json());

server.use('/products', productRouter.routes);

server.listen(8080, () => {
  console.log("server started");
});
