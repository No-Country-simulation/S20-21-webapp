import express from "express";
import { updateUser } from "../controllers/user.controller";
import upload from "../config/multer";


export const userRouter = express.Router();

userRouter.put("/:id", upload.single("img"), updateUser);