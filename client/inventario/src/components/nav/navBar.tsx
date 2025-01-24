import { useState } from "react";
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

// Define la interfaz para las props
interface NavBarProps {
  toggleSidebar: () => void; // Define el tipo de toggleSidebar
}

const NavBar: React.FC<NavBarProps> = ({ toggleSidebar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado local para el botón

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Cambia el estado del botón
    toggleSidebar(); // Llama a la función recibida como prop
  };

  return (
    <nav className="flex items-center justify-between h-full px-6 bg-beige text-customBlue">
      {/* Logo o título */}
      <div className="text-2xl font-bold">
        <div className='md:hidden'>
          INVENTIA
        </div>
      </div>

      {/* Botón para abrir/cerrar el sidebar en móviles */}
      <button
        className={`md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full hover:bg-beigeclaro`}
        onClick={handleToggle}
        aria-label="Abrir/Cerrar Sidebar"
      >
        {/* Líneas del menú */}
        <div
          className={`w-6 h-0.5 bg-customBlue transition-transform duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-customBlue my-1 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-customBlue transition-transform duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></div>
      </button>

      {/* Contenedor de los iconos */}
      <div className="flex items-center space-x-6">
        {/* Icono de notificaciones */}
        <button 
          className="relative p-2 rounded-full hover:bg-[rgb(245, 239, 231)]"
          aria-label="Notificaciones"
        >
          <BellIcon className="w-7 h-7" />
          {/* Indicador de notificaciones */}
          <span className="absolute top-1 right-1 bg-red-500 text-beigeclaro text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
            3
          </span>
        </button>

        {/* Icono de perfil */}
        <Link 
          to="./perfil" 
          className="p-2 rounded-full hover:bg-beigeclaro"
        >
          <UserCircleIcon className="w-8 h-8" />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
