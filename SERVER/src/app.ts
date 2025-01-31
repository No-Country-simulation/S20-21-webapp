import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import http from 'http'; // Importamos http para crear el servidor
import { router } from './routes/index.route';
import wss from './socket/webSocket'; // Importamos WebSockets

const app: Application = express();
const server = http.createServer(app); // Creamos el servidor HTTP

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta por defecto
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use("/api/v1", router);

// Conectar WebSocket al mismo servidor HTTP
server.on("upgrade", (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit("connection", ws, request);
    });
});

export { app, server };
