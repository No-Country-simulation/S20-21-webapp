import { ProductService } from "../services/product.service";
import { Request, Response, NextFunction } from "express";
const productService = new ProductService();

export const catchError = (controller: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    controller(req, res, next).catch(next);
  };
};

export const createProduct = catchError(async (req: Request, res: Response) => {
  console.log(req.body)
  const product = await productService.createProduct(req.body);
  console.log("product", product)
  res.status(201).json({
    message: "Producto creado exitosamente",
    product,
  });
});

export const getAllProducts = catchError(async (req: Request, res: Response) => {
  const products = await productService.getAllProducts();
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
  const product = await productService.updateProduct(Number(req.params.id), req.body);
  res.status(200).json({
    message: "Producto actualizado exitosamente",
    product,
  });
});

export const deleteProduct = catchError(async (req: Request, res: Response) => {
  const response = await productService.deleteProduct(Number(req.params.id));
  res.status(200).json(response);
});
