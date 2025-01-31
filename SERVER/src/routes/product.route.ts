import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controllers/product.controller";
import upload from "../config/multer";

export const productRouter = express.Router();


productRouter.post("/", upload.single("img"),createProduct);
productRouter.get("/userProducts/:idUser", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.put("/:id", upload.single("img"),updateProduct);
productRouter.delete("/:id", deleteProduct);