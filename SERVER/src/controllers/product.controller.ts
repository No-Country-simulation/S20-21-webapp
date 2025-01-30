import { catchError } from "../middlewares/catchError";
import { ProductService } from "../services/product.service";
import { Request, Response, NextFunction } from "express";
const productService = new ProductService();



export const createProduct = catchError(async (req: Request, res: Response) => {
 
  const image = req.file ? req.file.path : null; // Extrae la URL de la imagen
  const product = await productService.createProduct({ ...req.body, img: image });
  res.status(201).json({
    message: "Producto creado exitosamente",
    product,
  });
});

export const getAllProducts = catchError(async (req: Request, res: Response) => {
  const idUser = Number(req.params.idUser); // Convertir el parámetro a número

  if (isNaN(idUser)) {
    return res.status(400).json({ message: "ID de usuario no válido" });
  }

  const products = await productService.getAllProducts(idUser);
  res.status(200).json(products);
});

export const getProductById = catchError(async (req: Request, res: Response) => {
  const product = await productService.getProductById(Number(req.params.id));
  if (!product) {
    res.status(404).json({ message: "Producto no encontrado" });
    return;
  }
  res.status(200).json(product);
});

export const updateProduct = catchError(async (req: Request, res: Response) => {
  const image = req.file ? req.file.path : null;
  const product = await productService.updateProduct(Number(req.params.id), { ...req.body, img: image });
  res.status(200).json({
    message: "Producto actualizado exitosamente",
    product,
  });
});

export const deleteProduct = catchError(async (req: Request, res: Response) => {
  const response = await productService.deleteProduct(Number(req.params.id));
  res.status(200).json(response);
});
