import {Notification} from "../models/notification.model";
import {Product} from "../models/product.model"; // Asegúrate de importar el modelo de productos

class NotificationService {
  async checkStock(productId: number) {
    const product = await Product.findByPk(productId);
    if (!product) throw new Error("Producto no encontrado");

    if (product.dataValues.stock <= product.dataValues.minimum_stock) {
      await this.createNotification(product);
    }
  }

  async createNotification(product: any) {
    await Notification.create({
      message: `El producto ${product.name} tiene un stock bajo (${product.stock})`,
      idUser: product.idUser, 
      idProduct: product.id,
    });
  }

  async getNotifications(userId: number) {
    return await Notification.findAll({ where: { idUser: userId, read: false } });
  }

  async markAsRead(notificationId: number) {
    await Notification.update({ read: true }, { where: { id: notificationId } });
  }
}

export default new NotificationService();
