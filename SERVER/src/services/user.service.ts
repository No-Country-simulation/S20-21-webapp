import { User } from "../models/user.model"; // Modelo Sequelize de la tabla "users"
import cloudinary from "../config/cloudinary";


export interface UpdateUser {
    name?: string;
    phone?: string;
    img?: string;
    company?: string;
    typeBusiness?: string;
  }
  
export interface responseUser{
  user: UpdateUser;
  message:string;

}

export class UserService {
   async updateUser(userId: number, updateData: UpdateUser, image?: Express.Multer.File): Promise<any> {
    try {
      const user = await User.findByPk(userId);

      if (!user) {
        throw new Error("Usuario no encontrado");
      }

      if (image) {
        const uploadResult = await cloudinary.uploader.upload(image.path, {
          folder: "users",
          public_id: `user_${userId}`,
          overwrite: true,
        });

        updateData.img = uploadResult.secure_url;
      }

      await user.update(updateData);

      return { message: "Usuario actualizado correctamente", user };
    } catch (error) {
      console.error("Error en updateUser:", error);
      throw new Error(`Error al actualizar el usuario: ${error instanceof Error ? error.message : "Error desconocido"}`);
    }
  }
}
