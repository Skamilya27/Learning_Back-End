const fs = require("fs");
const express = require("express");
const morgan = require("morgan");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

const server = express();

//using morgan to log things 
server.use(morgan('default'));

server.use(express.json()); //body parser
// server.use(express.urlencoded());
server.use(express.static('public'));

//creating middlewares
// server.use((req, res, next) => {
//     console.log(req.get('User-Agent'), req.method, req.ip, req.hostname);
//     next();
// })

const auth = (req, res, next) => {
    console.log(req.query);
    if(req.query.password === '123'){
    next();
    }
    else {
        res.sendStatus(401);
    }
}
// server.use(auth);

server.get("/", auth,(req, res) => {
  res.json({ type: "GET" });
});
server.post("/", (req, res) => {
  res.json({ type: "POST" });
});
server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});
server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});
server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

server.get("/demo", (req, res) => {
    console.log(req.query, req.params);
  res.json(req.query);
  res.json({receivedParams: req.query});
});

server.listen(8080, () => {
  console.log("server started");
});
