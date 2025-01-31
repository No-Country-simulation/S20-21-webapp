import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ noServer: true }); // No usamos un puerto separado, lo conectamos a HTTP

wss.on("connection", (ws) => {
  console.log("Cliente conectado a WebSocket");

  ws.on("message", (message) => {
    console.log("Mensaje recibido:", message.toString());
  });

  ws.on("close", () => {
    console.log("Cliente desconectado");
  });
});

// Función para enviar notificaciones a todos los clientes conectados
export const sendNotification = (message: string) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
};

export default wss;
