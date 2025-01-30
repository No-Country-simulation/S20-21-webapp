/**
 * @fileoverview Configuración de rutas principales de la aplicación médica
 * @module Routes
 * @version 1.0.0
 */

import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../page/landing/landing";
import Layaud from "../page/Layaud/Layaud";
import Perfil from "../page/perfil/perfil";
import Inventario from "../page/inventario/inventario";
import Login from "../page/Ingreso/Login";
import Register from "../page/Ingreso/Register";
import Home from "../page/home/home";


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
        element: <Layaud />,
        children: [
            {
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
        ],
        errorElement: <div>Ups! Algo salió mal</div>,
    },
]);

export default router;
