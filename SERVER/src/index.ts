import { app, server } from './app'; // Importa correctamente
import sequelize from './config/db'; // Configuración de tu base de datos
import './models/initModels'; // Inicializa tus modelos

const PORT = process.env.PORT || 3000;

const main = async (): Promise<void> => {
    try {
        // Conexión a la base de datos
        await sequelize.sync();
        console.log('Database connected successfully.');

        // Inicia el servidor con WebSockets integrado
        server.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
    }
};

main();
