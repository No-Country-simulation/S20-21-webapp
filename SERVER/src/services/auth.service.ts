import { OTP } from "../models/OTP.model";
import { User, UserInput } from "../models/user.model";
import { hashPassword } from "../utils/hashPassword";
import { generateCode } from "../utils/securityCode";
import { validateOTP } from "../utils/validateOTP";
import { AppError } from "./extern/appError";
import { sendOTPtoEmail } from "./extern/mailSending.service";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
interface RegisterUserParams {
    name: string;
    email: string;
  }
  interface VerifyRegisterParams {
    token: string;
    user: UserInput;
  }
  export interface LoginResponse {
    token: string;
    user: {
      id: number;
      name: string;
      email: string;
      img: string;
      company: string;
      typeBusiness: string;
    };
  }
export const registerUser = async ({ name, email }: RegisterUserParams) => {
    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      throw new AppError("El usuario ya existe", 400);
    }
  
    // Generar y guardar OTP en base de datos (token de verificación)
    const token = generateCode();
  
    await OTP.create({
      token,
      userEmail: email,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000), // Agregar 10 minutos
    });
    // Enviar OTP al usuario por correo
    await sendOTPtoEmail({ email, name, token });
  
    // Retornar token generado (si es necesario)
    return token;
  };

  export const verifyRegister = async ({ token, user }: VerifyRegisterParams) => {
    // Validar token
    const isValidToken = await validateOTP(token, user.email);
    if (isValidToken === "notFound") {
      throw new AppError("Token inválido", 400);
    }else{
      if (isValidToken === "expired") {
        throw new AppError("Token expirado", 400);
      }
    }
    // Subir imagen si existe
    /*if (user.img) {
      user.img = await uploadImage(user.img);
    }
  */
    // Crear usuario en la base de datos
    const newUser = await User.create({
      name: user.name,
      email: user.email,
      password: hashPassword(user.password),
      phone: user.phone,
      company:user.company,
      typeBusiness:user.typeBusiness
      
    });

    if (isValidToken || isValidToken === "expired") {
      // Eliminar token de la base de datos
      OTP.destroy({
        where: {
          token,
          userEmail: user.email,
        },
      });
    
    }
  
    // Retornar datos del usuario creado
    return {
      message: "Usuario creado exitosamente",
      user: {
      newUser
      },
    };
  };
  
  export const loginService = async (email: string, password: string): Promise<LoginResponse> => {
    // Buscar al usuario por email
    const user = await User.findOne({
      where: { email },
      attributes: ["id", "password", "name", "email", "img", "company", "typeBusiness"],
    });
  
    if (!user) {
      throw new Error("User not found");
    }
  
    const userData = user.get();
  
    // Comparar contraseñas (esto debe usar bcrypt en producción)
    const isMatch = bcrypt.compareSync(password, userData.password); // Usa bcrypt.compare(password, userData.password) en producción
    if (!isMatch) {
      throw new Error("Incorrect credentials");
    }
  
    // Generar un token JWT
    const token = jwt.sign({ id: userData.id, email: userData.email }, "palabra_secreta", { expiresIn: "1h" });
  
    return {
      token,
      user: {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        img: userData.img,
        company:userData.company,
        typeBusiness:userData.typeBusiness
      },
    };
  };