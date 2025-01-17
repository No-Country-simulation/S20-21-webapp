import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Contenedor para el navbar */}
      <header className="sticky top-0 z-30 bg-[ rgb(216, 196, 182) ] h-24 w-full">
        {/** Aquí va el Navbar */}
      </header>

      {/* Layout del contenido lateral (SideBar) */}
      <div className="flex">
        <aside className="bg-[rgb(33, 53, 85)] w-[250px] h-screen sticky top-[5rem] overflow-y-auto">
          {/* Aquí va el SideBar */}
        </aside>
        
        {/* Contenedor del contenido principal */}
        <main className="flex-grow p-20 bg-[rgb(245, 239, 231)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
