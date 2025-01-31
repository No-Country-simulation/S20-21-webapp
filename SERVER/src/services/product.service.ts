import { Product } from "../models/product.model";
import { sendNotification } from "../socket/webSocket";
import notificationService from "./notification.service";

interface productInput {
  idUser: number;
  name: string;
  description: string
  price: number,
  stock: number,
  minimum_stock: number,
  status: string,
  active: boolean,
  img?: string
}
type productUpdateInput = Partial<Pick<productInput, 'name' | 'description' | 'price' | 'stock' | 'minimum_stock' | 'status' | 'active' | 'img'>>;

// Servicio de Producto

export class ProductService {
  async createProduct(data: productInput) {
    if (!data.idUser) {
      throw new Error("Usuario no logueado");
    }
    return await Product.create({
      ...data,
      img: data.img || null, // Guarda la imagen si existe
    });
  }

  async getAllProducts(idUser: number) {
    const products = await Product.findAll({
      where: { idUser },
    });
  
    if (!products || products.length === 0) {
      throw new Error("Sin productos para este usuario");
    }
  
    return products;
  }
  

  async getProductById(id: number) {
    return await Product.findByPk(id);
  }

  async updateProduct(id: number, data: productUpdateInput) {
    const product = await Product.findByPk(id) as Product;
    if (!product) throw new Error("Producto no encontrado");

    await product.update({
      ...data,
      img: data.img || product.dataValues.img // Mantiene la imagen si no se actualiza
    });
    if(data.stock!==undefined && data.stock <= product.dataValues.minimum_stock){
      const message = `⚠️ El producto ${product.dataValues.name} está por agotarse. Stock actual: ${data.stock}`;
      sendNotification(message);
    }
    return 
  }

  async deleteProduct(id: number) {
    const product = await Product.findByPk(id);
    if (!product) throw new Error("Producto no encontrado");
    await product.destroy();
    return { message: "Producto eliminado correctamente" };
  }
}