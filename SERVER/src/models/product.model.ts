import { DataTypes, Model, Optional, Sequelize } from "sequelize";

// Atributos del modelo Product
export interface ProductAttributes {
  id: number;
  idUser: number;
  name: string;
  description?: string;
  price: number;
  stock: number;
  minimum_stock: number;
  status: string;
  active: boolean;
  img?: string | null;
  updatedAt?: Date;
  createdAt?: Date;
}

// Define el tipo del objeto que se pasa a Product.create()
export interface ProductInput extends Optional<ProductAttributes, "id" | "active" | "description" | "img"> {}

export class Product extends Model<ProductAttributes, ProductInput> {
  static initModel(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        idUser: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        price: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        stock: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        minimum_stock: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        status: {
          type: DataTypes.ENUM,
          values: ['DISPONIBLE', 'POR_AGOTARSE', 'AGOTADO'], 
          allowNull: false,
      },
        active: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
        },
        img: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        timestamps: true,
        sequelize: sequelize,
        modelName: "product",
        paranoid: false,
      }
    );
  }
}

Product.prototype.toJSON = function () {
  const values = this.get();
  return values;
};
