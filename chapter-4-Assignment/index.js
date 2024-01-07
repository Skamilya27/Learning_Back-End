const fs = require("fs");
const express = require("express");
const morgan = require("morgan");

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const quotes = data.quotes;

const server = express();
server.use(morgan("default"));

server.use(express.json());

server.post("/quotes", (req, res) => {
    console.log(req.body);
    quotes.push(req.body);
    res.status(201).json(req.body)
})

server.get("/quotes", (req, res) => {
    res.json(quotes);
})

server.get("/quotes/:id", (req,res) => {
    const id = Number(req.params.id);
    const quote = quotes.find((i) => i.id === id);
    res.json(quote);
})


server.put("/quotes/:id", (req, res) => {
    const id = Number(req.params.id);
    const quoIdx = quotes.findIndex((i) => i.id === id);
    quotes.splice(quoIdx, 1, {...req.body, id:id});
    res.status(200).json({product: 'updated'})
})

server.patch("/quotes/:id", (req, res) => {
    const id = +req.params.id;
    const quoIdx = quotes.findIndex((i) => i.id === id);
    const quo = quotes[quoIdx];
    quotes.splice(quoIdx, 1, {...quo,...req.body, id:id});
    res.status(200).json({product: 'updated'})
})


server.delete("/quotes/:id", (req, res) => {
    const id = Number(req.params.id);
    const quoIdx = quotes.findIndex((i) => i.id === id);
    const quo = quotes[quoIdx];
    quotes.splice(quoIdx, 1);
    res.status(200).json(quo);
})

server.listen(3000, () => {
    console.log("server started");
})