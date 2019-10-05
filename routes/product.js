const express = require("express");
const route = express.Router();
let products = [
  {
    id: 1,
    name: "First Product"
  },
  {
    id: 2,
    name: "First Product"
  },
  {
    id: 3,
    name: "First Product"
  },
  {
    id: 4,
    name: "First Product"
  },
  {
    id: 5,
    name: "First Product"
  },
  {
    id: 6,
    name: "First Product"
  }
];
route.get("/", (req, res) => {
  res.json(products);
});
route.post("/", (req, res) => {
  products.push(req.query);
  res.json(products);
});
route.delete("/:id", (req, res) => {
  const newProduct = products.filter(
    product => product.id !== parseInt(req.params.id)
  );
  products = newProduct;
  res.json(products);
});
route.put("/:id", (req, res) => {
  parseInt(req.params.id) > products.length
    ? res.send("ID does not exist")
    : products.map(product => {
        if (product.id === parseInt(req.params.id))
          product.name = req.query.name;
      });
  res.json(products);
});

module.exports = route;
