/**
 * @fileoverview Configuración de rutas principales de la aplicación 
 * @module Routes
 * @version 1.0.0
 */

import { createBrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import LandingPage from "../page/landing/landingPage";
=======
import LandingPage from "../page/landing/landing";
>>>>>>> fe5d922e7aa24a2c7552a6a3e8d5d32c6e63a16f
import Layaud from "../page/Layaud/Layaud";
import Perfil from "../page/perfil/perfil";
import Inventario from "../page/inventario/inventario";
import Login from "../page/Ingreso/Login";
import Register from "../page/Ingreso/Register";
import Home from "../page/home/home";
import Proveedores from "../page/Proveedores/Proveedores";
import Reportes from "../page/Reportes/Reportes";
import ProtectedRoute from "./protectedRoute";
import RouteRedirect from "./routeRedirect";


/**
 * @constant
 * @type {import('react-router-dom').RouteObject[]}
 * @description Router principal que contiene todas las rutas de la aplicación
 */
const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        errorElement: <div>Ups! Algo salió mal</div>,
    },
    {
        path: "/ingreso",
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ],
        errorElement: <div>Ups! Algo salió mal</div>,
    },
    {
        path: "/inventario",
        element:(
            <ProtectedRoute>
                <Layaud />
            </ProtectedRoute>
        ),  
        children: [
            {
<<<<<<< HEAD
=======
                index: true,
                element: <RouteRedirect to="home" />
            },
            {
>>>>>>> fe5d922e7aa24a2c7552a6a3e8d5d32c6e63a16f
                path: "perfil",
                element: <Perfil />,
            },
            {
                path: "inventario",
                element: <Inventario />,
            },
            {
                path: "home",
                element: <Home/>
            },
            {
                path: "proveedores",
                element: <Proveedores/>
            },
            {
                path: "reportes",
                element: <Reportes/>
            },
        ],
        errorElement: <div>Ups! Algo salió mal</div>,
    },
]);

export default router;
