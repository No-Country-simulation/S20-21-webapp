import sequelize from "../config/db";
import { Notification } from "./notification.model";
import { OTP } from "./OTP.model";
import { Product } from "./product.model";
import { User } from "./user.model";


export const initModels = () => {

  User.initModel(sequelize);
  OTP.initModel(sequelize);
  Product.initModel(sequelize);
  Notification.initModel(sequelize);

  User.hasMany(Product, {
    foreignKey: 'idUser',
    as: 'product', // Nombre del alias para la relación
  });

  Product.belongsTo(User, {
    foreignKey: 'idUser',
    as: 'user',

  });

  Product.hasMany(Notification, { foreignKey: "idProduct", as: "notifications" });

  Notification.belongsTo(Product, { foreignKey: "idProduct", as: "product" });

};

initModels();