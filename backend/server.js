import express from "express"; // common js by default, not ES modules (as we used in the frontend)
import dotenv from "dotenv";
import products from "./data/products.js"; // must add .js if we would like to import a file  

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("API is haha...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 4000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
