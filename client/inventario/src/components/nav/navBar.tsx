import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';  // Importa Link de React Router

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between h-full px-6 bg-beige text-customBlue">
      {/* Logo o título */}
      <div className="text-2xl font-bold"></div>
      
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
          to="./perfil"  // Usa 'to' en lugar de 'href' cuando usas Link de React Router
          className="p-2 rounded-full hover:bg-beigeclaro"
        >
          <UserCircleIcon className="w-6 h-6" />
        </Link>
      </div>
    </nav>
  )
}

export default NavBar;
