import express from "express";
import cors from "cors";
import { readFileSync } from "fs";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Load JSON data
const products = JSON.parse(
  readFileSync(new URL("./data/products.json", import.meta.url))
);


// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});



// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
