import { Outlet } from "react-router-dom";
import NavBar from "../../components/nav/navBar";
import SideBar from "../../components/sideBar/sideBar";
import "./layaut.css";
import { useState } from "react"; // Importa useState

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para controlar el sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Cambia el estado al hacer clic
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex">
      {/* Sidebar fijo */}
      <aside className={`fixed top-0 left-0 w-[250px] h-full bg-[rgb(33, 53, 85)] sidebar ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
        <SideBar />
      </aside>

      {/* Contenedor principal (Navbar + contenido) */}
      <div className="ml-[250px] flex flex-col w-[calc(100%-250px)] h-full main-container">
        {/* Navbar fijo */}
        <header className="fixed top-0 left-[250px] w-[calc(100%-250px)] h-20 bg-[rgb(216, 196, 182)] z-30 shadow-md navbar">
          <NavBar toggleSidebar={toggleSidebar} /> {/* Pasa la función como prop */}
        </header>

        {/* Contenedor principal (Outlet) */}
        <main className="mt-24 h-[calc(100vh-6rem)] overflow-y-auto bg-[rgb(245, 239, 231)] p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
