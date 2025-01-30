
import express from "express";
import { authRouter } from "./auth.route";
import { productRouter } from "./product.route";
import { userRouter } from "./user.route";

export const router = express.Router();


router.use("/auth", authRouter);
router.use("/product", productRouter)
router.use("/user", userRouter)