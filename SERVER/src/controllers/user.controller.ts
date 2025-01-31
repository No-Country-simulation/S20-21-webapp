import { catchError } from "../middlewares/catchError";
import { UserService } from "../services/user.service";
import { Request, Response, NextFunction } from "express";


const userService = new UserService();


export const updateUser = catchError(async (req: Request, res: Response) => {
  

  try {
    const updatedUser = await userService.updateUser(Number(req.params.id), req.body, req.file);

    res.status(200).json({
      message: "Usuario actualizado exitosamente",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error en updateUser:", error);
    res.status(500).json({
      message: "Error al actualizar el usuario",
      error: error instanceof Error ? error.message : "Error desconocido",
    });
  }
});