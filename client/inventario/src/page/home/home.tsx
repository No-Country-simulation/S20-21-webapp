<<<<<<< HEAD
import TablaAlmacenes from "../../components/Almacen/Almacen";
import GraphBars from "../../components/Graficos/GraphBars";

const Home = () => {
  return (
    <div className="h-full w-full p-4">
      {/* Carrusel - Solo en mobile */}
      <div className="md:hidden w-full h-[140px] flex overflow-x-auto snap-x snap-mandatory space-x-4 mb-4">
        <div className="border-[3px] border-stone-400 h-full w-[90%] flex-shrink-0 rounded-md snap-center bg-white"></div>
        <div className="border-[3px] border-stone-400 h-full w-[90%] flex-shrink-0 rounded-md snap-center bg-white"></div>
        <div className="border-[3px] border-stone-400 h-full w-[90%] flex-shrink-0 rounded-md snap-center bg-white"></div>
      </div>
=======
import React from "react"
import Tablas from "../../components/tablas/tablas"

const Home: React.FC = () => {
  const columns = [
    {key: "imagen", label: "Imagen"},
    {key: "producto", label: "Producto"},
    {key: "valor", label: "Valor"},
    {key: "cantidad", label: "Cantidad"},
    {key: "status", label: "Status"},
  ];
  const data = [
    {imagen:"", producto:"",valor:25, cantidad:5, status:""},
    {imagen:"", producto:"",valor:25, cantidad:5, status:""},
    {imagen:"", producto:"",valor:25, cantidad:5, status:""},
    {imagen:"", producto:"",valor:25, cantidad:5, status:""},
    {imagen:"", producto:"",valor:25, cantidad:5, status:""},
    {imagen:"", producto:"",valor:25, cantidad:5, status:""},
    {imagen:"", producto:"",valor:25, cantidad:5, status:""},
  ];
  return (
    <div className="h-full w-full">
      {/* Carrusel - Solo en mobile */}
      <div className="md:hidden w-full h-[140px] flex overflow-x-auto snap-x snap-mandatory space-x-4 mb-4">
        <div className="border-[3px] border-stone-400 h-full w-full flex-shrink-0 rounded-md snap-center bg-white"></div>
        <div className="border-[3px] border-stone-400 h-full w-full flex-shrink-0 rounded-md snap-center bg-white"></div>
        <div className="border-[3px] border-stone-400 h-full w-full flex-shrink-0 rounded-md snap-center bg-white"></div>
      </div>

      {/* Diseño normal - Solo en desktop */}
      <div className="hidden md:flex w-full h-[140px] justify-between mb-6">
        <div className="md:shadow-[0px_1px_6px_6px_#E5E1DA] h-full w-[32.5%] rounded-md bg-white"></div>
        <div className="md:shadow-[0px_1px_6px_6px_#E5E1DA] h-full w-[32.5%] rounded-md bg-white"></div>
        <div className="md:shadow-[0px_1px_6px_6px_#E5E1DA] h-full w-[32.5%] rounded-md bg-white"></div>
      </div>

      <div className="mb-4">
        Aca va el componente del grafico
      </div>
      <div className="shadow-[0px_1px_6px_6px_#E5E1DA] w-full h-90 bg-white rounded-md ">
        <Tablas columns={columns} data={data} /> 
      </div>
      <div className="h-4 w-full"></div>
    </div>
  )
}
>>>>>>> fe5d922e7aa24a2c7552a6a3e8d5d32c6e63a16f

      {/* Diseño normal - Solo en desktop */}
      <div className="hidden md:flex w-full h-[140px] justify-between mb-6">
        <div className="shadow-[0px_1px_6px_6px_#E5E1DA] h-full w-[32.5%] rounded-md bg-white"></div>
        <div className="shadow-[0px_1px_6px_6px_#E5E1DA] h-full w-[32.5%] rounded-md bg-white"></div>
        <div className="shadow-[0px_1px_6px_6px_#E5E1DA] h-full w-[32.5%] rounded-md bg-white"></div>
      </div>

      {/* Gráfico */}
      <div className="w-full mb-6">
        <div className="w-full h-[300px] md:h-[400px] bg-gray-100 rounded-md p-4">
          <GraphBars/>
        </div>
      </div>

      {/* Tabla */}
      <div className="w-full">
        <div className="w-full h-[300px] md:h-[400px] bg-gray-100 rounded-md p-4">
          <TablaAlmacenes/>
        </div>
      </div>
    </div>
  );
};

export default Home;