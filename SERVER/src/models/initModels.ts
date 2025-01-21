import  sequelize  from "../config/db";
import { OTP } from "./OTP.model";
import { Product } from "./product.model";
import { User } from "./user.model";


  export const initModels = () => {

    User.initModel(sequelize);
    OTP.initModel(sequelize);
    Product.initModel(sequelize);

    User.hasMany(Product, {
      foreignKey: 'idUser',
      as: 'product', // Nombre del alias para la relación
    });
  
    Product.belongsTo(User, {
      foreignKey: 'idUser',
      as: 'user',

    });

  };

  initModels();