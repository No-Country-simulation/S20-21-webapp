import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controllers/product.controller";

export const productRouter = express.Router();


productRouter.post("/",createProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.put("/:id",updateProduct);
productRouter.delete("/:id", deleteProduct);