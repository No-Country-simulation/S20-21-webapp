/**
 * @fileoverview Configuración de rutas principales de la aplicación médica
 * @module Routes
 * @author [Tu nombre o el del equipo]
 * @version 1.0.0
 */

import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../page/landing/landingPage";
import Bacio from "../page/bacio";
import Layaud from "../page/Layaud/Layaud";
import Perfil from "../page/perfil/perfil";
import Inventario from "../page/inventario/inventario";
/**
 * @typedef {Object} RouteConfig
 * @property {string} path - Ruta URL
 * @property {JSX.Element} element - Componente React a renderizar
 * @property {JSX.Element} [errorElement] - Componente para manejar errores
 * @property {RouteConfig[]} [children] - Sub-rutas anidadas
 */

/**
 * @constant
 * @type {import('react-router-dom').RouteObject[]}
 * @description Router principal que contiene todas las rutas de la aplicación
 *
 * @example
 * import router from './routes';
import { calendario } from '../pages/calendario/calendario';
 *
 * // En tu archivo principal
 * <RouterProvider router={router} />
 *
 * @returns {RouteObject[]} Configuración de rutas de la aplicación
 */

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        errorElement: <div>Ups! Algo salio mal</div>,
    },
    {
        path: "/inventario",
        element: <Layaud/>,
        children:[
            {
                path:"bacio",
                element: <Bacio/>
            },
            {
                path:"perfil",
                element: <Perfil/>
            },
            {
                path:"inventario",
                element: <Inventario/>
            },
        ],
        errorElement: <div>Ups! Algo salio mal</div>
    },

]);

export default router;