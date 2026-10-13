import express from "express";
import "dotenv/config";
import dns from "dns";
import mongoose from "mongoose";
import connectDB from "./database/db.js";
import Product from "./models/productShema.js";
import productRoute from "./routes/productsRoute.js";

const app = express();
dns.setServers(["8.8.8.8", "1.1.1.1"]);

app.use(express.json());

const port = process.env.PORT || 3000;

connectDB();

app.use("/api/products", productRoute);

app.listen(port, () => {
  console.log("server is running on port ", port);
});
