import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

// Define la interfaz para las props
interface NavBarProps {
  toggleSidebar: () => void; // Define el tipo de toggleSidebar
}

const NavBar: React.FC<NavBarProps> = ({ toggleSidebar }) => {
  return (
    <nav className="flex items-center justify-between h-full px-6 bg-beige text-customBlue">
      {/* Logo o título */}
      <div className="text-2xl font-bold"></div>

      {/* Botón para abrir/cerrar el sidebar en móviles */}
      <button 
        className="md:hidden p-2 rounded-full hover:bg-beigeclaro" 
        onClick={toggleSidebar} 
        aria-label="Abrir/Cerrar Sidebar"
      >
        ☰ {/* Icono de menú (puedes usar un icono de tu elección) */}
      </button>

      {/* Contenedor de los iconos */}
      <div className="flex items-center space-x-6">
        {/* Icono de notificaciones */}
        <button 
          className="relative p-2 rounded-full hover:bg-[rgb(245, 239, 231)]"
          aria-label="Notificaciones"
        >
          <BellIcon className="w-6 h-6" />
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
          <UserCircleIcon className="w-6 h-6" />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
