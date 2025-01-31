
import { Request, Response, NextFunction } from "express";
import notificationService from "../services/notification.service";

export const getNotifications= async(req: Request, res: Response) => {
    const { userId } = req.params;
    try {
        const notifications = await notificationService.getNotifications(Number(userId));
        res.json(notifications);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export const markRead = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await notificationService.markAsRead(Number(id));
        res.json({ message: "Notificación marcada como leída" });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
}