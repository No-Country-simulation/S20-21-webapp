import express from "express";
import NotificationService from "../services/notification.service";
import { getNotifications, markRead } from "../controllers/notification.controller";

export const notificationRouter = express.Router();

notificationRouter.get("/:userId", getNotifications);

notificationRouter.put("/markRead/:id", markRead);

