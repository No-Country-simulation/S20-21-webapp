import { Request, Response } from "express";
import { Product } from "../models/product.model";

interface productInput {
  idUser: number;
  name: string;
  description: string
  price: number,
  stock: number,
  minimum_stock: number,
  status: string,
  active: boolean
}
type productUpdateInput = Partial<Pick<productInput, 'name' | 'description' | 'price' | 'stock' | 'minimum_stock' | 'status' | 'active'>>;

// Servicio de Producto

export class ProductService {
  async createProduct(data: productInput) {
      return await Product.create(data);
  }

  async getAllProducts() {
    return await Product.findAll();
  }

  async getProductById(id: number) {
    return await Product.findByPk(id);
  }

  async updateProduct(id: number, data: productUpdateInput) {
    const product = await Product.findByPk(id);
    if (!product) throw new Error("Producto no encontrado");
    return await product.update(data);
  }

  async deleteProduct(id: number) {
    const product = await Product.findByPk(id);
    if (!product) throw new Error("Producto no encontrado");
    await product.destroy();
    return { message: "Producto eliminado correctamente" };
  }
}