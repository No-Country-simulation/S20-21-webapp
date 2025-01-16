

import express from "express";
import { registerController, verifyRegisterController } from "../controllers/auth.controller";
export const authRouter = express.Router();


authRouter.post("/register", registerController);
authRouter.post("/verify", verifyRegisterController)