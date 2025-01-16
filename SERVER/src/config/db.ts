import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Cargar las variables de entorno
dotenv.config();

// Configuración de Sequelize con variables de entorno
const sequelize = new Sequelize(
  process.env.PGDATABASE!,
  process.env.PGUSER!,
  process.env.PGPASSWORD!,
  {
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT),
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Esto evita problemas con certificados SSL
      },
    },
  }
);

// Verificar conexión
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos con Sequelize');
  })
  .catch((err) => {
    console.error('Error al conectar con Sequelize:', err);
  });

export default sequelize;
