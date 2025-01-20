import { useState } from "react";
import "./inventario.css"
import { BsFillTrashFill, BsDownload, BsFillPencilFill } from "react-icons/bs";
import { BiCamera } from "react-icons/bi";
function Inventario() {

   const [addproduct, setAddproduct] = useState(false)
   const [editproduct, setEditproduct] = useState(false)
   const [agregarImagen, setAgregarImagen] = useState(false)
   const [editarimagen, setEditarimagen] = useState(false)
   const [filtrarpor, setFiltrarpor] = useState("")
   //const numero = 50
   return (
      <>

         <div className="inventario-title">
            <h4>
               Inventario General
            </h4>
         </div>


         <div className="inventario-filter">

            <input placeholder="Buscar producto " type="text" />

            <select onChange={(e) => setFiltrarpor(e.target.value)} name="" id="">
               <option>Buscar por</option>
               <option value="Nombre">Nombre</option>
               <option value="Status">Status</option>
               <option value="Cantidad">Cantidad</option>
               <option value="Valor">Valor</option>
            </select>



            <div className="inventario-filter-status">
               {filtrarpor === "Status" ? (<>

                  <button>Disponible</button>
                  <button>Por agotarse</button>
                  <button>Agotado</button>
               </>) : <></>}


            </div>
         </div>
         <div className="inventario-download">

            <button>Descargar PDF <i><BsDownload /> </i></button>

         </div>

         <table className="inventario-table">
            <thead>
               <tr>
                  <th>Imagen</th>
                  <th>Producto</th>
                  <th>Valor</th>
                  <th>Cantidad</th>
                  <th>Status</th>
                  <th>Accion</th>
               </tr>
            </thead>

            <tbody>

               <tr>
                  <td><i><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRatAKQaBQrq4d0imSB5oxC_X7IDhE9Jjh2Dw&s" alt="" /></i></td>
                  <td>Papas</td>
                  <td>$25.00</td>
                  <td>25</td>
                  <td><span>Disponible</span></td>
                  <td>
                     <button>< BsFillTrashFill /></button>

                     <button onClick={() => setEditproduct(!editproduct)}> <BsFillPencilFill /></button>
                  </td>

               </tr>

               <tr>
                  <td><i><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRatAKQaBQrq4d0imSB5oxC_X7IDhE9Jjh2Dw&s" alt="" /></i></td>
                  <td>Papas</td>
                  <td>$25.00</td>
                  <td>25</td>
                  <td><span>Disponible</span></td>
                  <td>
                     <button>< BsFillTrashFill /></button>

                     <button onClick={() => setEditproduct(!editproduct)}> <BsFillPencilFill /></button>
                  </td>

               </tr>

               <tr>
                  <td><i><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRatAKQaBQrq4d0imSB5oxC_X7IDhE9Jjh2Dw&s" alt="" /></i></td>
                  <td>Papas</td>
                  <td>$25.00</td>
                  <td>25</td>
                  <td><span>Disponible</span></td>
                  <td>
                     <button>< BsFillTrashFill /></button>

                     <button onClick={() => setEditproduct(!editproduct)}> <BsFillPencilFill /></button>
                  </td>

               </tr>

               <tr>
                  <td><i><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRatAKQaBQrq4d0imSB5oxC_X7IDhE9Jjh2Dw&s" alt="" /></i></td>
                  <td>Papas</td>
                  <td>$25.00</td>
                  <td>25</td>
                  <td><span>Disponible</span></td>
                  <td>
                     <button>< BsFillTrashFill /></button>
                     <button onClick={() => setEditproduct(!editproduct)}> <BsFillPencilFill /></button>
                  </td>

               </tr>

            </tbody>
         </table>

         <div className="inventario-button-add-box">
            <button onClick={() => setAddproduct(!addproduct)}>+</button>
         </div>


         <>
            <div className={addproduct ? "inventario-agregar-producto" : "inventario-agregar-producto-false"}>
  
               <div className="inventario-agregar-producto-box-inputs">
                  <div className="inventario-agregar-producto-input">
                     <div className="inventario-agregar-producto-cerrar">
                        <label htmlFor="">Nombre del producto</label>

                        <button onClick={() => setAddproduct(!addproduct)} className="inventario-agregar-producto-boton-cerrar">+</button>


                     </div>
                     <input type="text" />
                  </div>
                  <div className="inventario-agregar-producto-input">
                     {agregarImagen && (
                        <>
                           <label htmlFor="">Imagen del producto</label>
                           <input type="url" />
                        </>
                     )}


                     <button onClick={() => setAgregarImagen(!agregarImagen)} className="inventario-agregar-producto-input-imagen "><BiCamera /></button>
                  </div>

                  <div className="inventario-agregar-producto-input">
                     <label htmlFor="">Valor del producto</label>
                     <input type="number" />
                  </div>
                  <div className="inventario-agregar-producto-input">
                     <label htmlFor="">Stock del producto</label>
                     <input type="number" />
                  </div>

                  <div className="inventario-agregar-producto-button-add">
                     <button>
                        Agregar producto
                     </button>
                  </div>









               </div>





            </div>


         </>
         <div className={editproduct ? "inventario-editar-producto" : "inventario-editar-producto-false"}>
  <div className="inventario-editar-producto-box-inputs">
    <div className="inventario-editar-producto-input">
      <div className="inventario-editar-producto-cerrar">
        <label htmlFor="">Nombre del producto</label>
        
        <button
          onClick={() => setEditproduct(!editproduct)}
          className="inventario-editar-producto-boton-cerrar"
        >
          +
        </button>
      </div>
      <input type="text" />
    </div>
    <div className="inventario-editar-producto-input">
      {editarimagen && (
        <>
          <label htmlFor="">Imagen del producto</label>
          <input type="url" />
        </>
      )}
      <button
        onClick={() => setEditarimagen(!editarimagen)}
        className="inventario-editar-producto-input-imagen"
      >
        <BiCamera />
      </button>
    </div>
    <div className="inventario-editar-producto-input">
      <label htmlFor="">Valor del producto</label>
      <input type="number" />
    </div>
    <div className="inventario-editar-producto-input">
      <label htmlFor="">Stock del producto</label>
      <input type="number" />
    </div>
    <div className="inventario-editar-producto-button-edit">
      <button>Guardar</button>
      <button  onClick={() => setEditproduct(!editproduct)}>Cancelar</button>
    </div>
  </div>
</div>


      </>
   )

}

export default Inventario