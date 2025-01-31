import { DataTypes, Model, Optional, Sequelize } from "sequelize";

// Atributos del modelo Notification
export interface NotificationAttributes {
  id: number;
  idUser: number;
  idProduct: number;
  message: string;
  read: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// Define el tipo del objeto que se pasa a Notification.create()
export interface NotificationCreate extends Optional<NotificationAttributes, "id" | "read"> {}

export class Notification extends Model<NotificationAttributes, NotificationCreate> {
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
        idProduct: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        message: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        read: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
      },
      {
        timestamps: true,
        sequelize: sequelize,
        modelName: "notification",
        paranoid: false,
      }
    );
  }
}

Notification.prototype.toJSON = function () {
  const values = this.get();
  return values;
};
