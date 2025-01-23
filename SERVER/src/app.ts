import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { router } from './routes/index.route';
// Importa tus rutas aquí
// import userRoutes from './routes/userRoutes';

const app: Application = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas principales
// app.use('/users', userRoutes);

// Ruta por defecto
app.get('/', (req, res) => {
    res.send('API is running...');
});
app.use("/api/v1", router);

export default app;
