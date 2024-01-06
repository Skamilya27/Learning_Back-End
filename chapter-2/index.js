const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

const products = data.products;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if(req.url.startsWith('/product')) {
    const id = req.url.split('/')[2];
    const product = products.find(p => p.id === (+id));

    res.setHeader("Content-Type", "text/html");
      let modifieldIndex = index
        .replace("**Title**", product.title)
        .replace("**url**", product.thumbnail)
        .replace("**price**", product.price)
        .replace("**rating**", product.rating);
      res.end(modifieldIndex);
      return;
  }

  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;

    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
      break;

    case "/product":
      res.setHeader("Content-Type", "text/html");
      let modifieldIndex = index
        .replace("**Title**", product.title)
        .replace("**url**", product.thumbnail)
        .replace("**price**", product.price)
        .replace("**rating**", product.rating);
      res.end(modifieldIndex);
      break;

    default:
      res.writeHead(404, "NOT FOUND");
      res.end("NOT FOUND");
  }
});

server.listen(8080);
