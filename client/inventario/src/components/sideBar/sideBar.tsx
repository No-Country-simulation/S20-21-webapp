import { HomeIcon, CubeIcon, TruckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';  // Importa Link de React Router

interface SideBarProps {
  closeSidebar: () => void; // Define el tipo de la función de cierre
}

const SideBar: React.FC<SideBarProps> = ({ closeSidebar }) => {
  return (
    <div className="w-full h-full bg-customBlue text-beigeclaro p-5 space-y-4 flex flex-col">
      <h2 className="text-xl font-bold mb-5 mt-3"> INVENTIA </h2>
      <ul className="space-y-2 flex-1">
        <li>
          <Link to="./home" className="flex items-center py-2 px-4 hover:bg-bluelith rounded" onClick={closeSidebar}>
            <HomeIcon className="w-6 h-6 mr-3" />
            HOME
          </Link>
        </li>
        <li>
          <Link to="./inventario" className="flex items-center py-2 px-4 hover:bg-bluelith rounded" onClick={closeSidebar}>
            <CubeIcon className="w-6 h-6 mr-3" />
            INVENTARIO
          </Link>
        </li>
        <li>
          <Link to="#" className="flex items-center py-2 px-4 hover:bg-bluelith rounded" onClick={closeSidebar}>
            <TruckIcon className="w-6 h-6 mr-3" />
            PROVEDORES
          </Link>
        </li>
        <li>
          <Link to="#" className="flex items-center py-2 px-4 hover:bg-bluelith rounded" onClick={closeSidebar}>
            <ExclamationTriangleIcon className="w-6 h-6 mr-3" />
            REPORTES
          </Link>
        </li>
      </ul>

      <footer className="mt-auto text-sm text-center bg-gradient-to-b from-transparent py-4 border-t border-beigeclaro">
        <p className=''>&copy;equipo s20-21 2025</p>
      </footer>
    </div>
  )
}

export default SideBar