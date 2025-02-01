import { useEffect, useState } from "react";
import "./inventario.css";
import { BsFillTrashFill, BsDownload, BsFillPencilFill } from "react-icons/bs";
import { BiCamera } from "react-icons/bi";
import axios from "axios";
import { useAuthStore } from "../../../store/useAuth";
import { Toaster, toast } from "sonner";


interface Producto {
   id: string;
   name: string;
   price: number;
   stock: number;
   image: string;
}


function Inventario() {

   const [addproduct, setAddproduct] = useState(false);
   const [editproduct, setEditproduct] = useState(false);
   const [agregarImagen, setAgregarImagen] = useState(false);
   const [editarimagen, setEditarimagen] = useState(false);
   const [filtrarpor, setFiltrarpor] = useState<'Nombre' | 'Status' | 'Cantidad' | 'Valor'>('');
   const [productosusuario, setProductosusuario] = useState<Producto[]>([]);
   const [productoEditar, setProductoEditar] = useState<Producto>({
      id: '',
      name: '',
      price: 0,
      stock: 0,
      image: ''
   });

   const [productoNuevo, setProductoNuevo] = useState({
      name: "",
      price: 0,
      stock: 0,
      image: null as File | null, // Cambiado a File en lugar de string
   });

   const { user } = useAuthStore<User>();



   const obtenerProductos = async () => {
      try {
         const responseProductos = await axios.get(`http://localhost:3000/api/v1/product/userProducts/${user?.id}`);
         setProductosusuario(responseProductos.data);
         console.log(responseProductos.data);
      } catch {
         console.log("No se obtuvieron productos");
      }
   };


   const agregarProducto = async () => {
      try {
         const formData = new FormData();
         formData.append("name", productoNuevo.name);
         formData.append("price", productoNuevo.price.toString());
         formData.append("stock", productoNuevo.stock.toString());
         formData.append("idUser", user?.id.toString() || "");

         // Asegúrate de que 'image' sea un archivo antes de agregarlo
         if (productoNuevo.image) {
            formData.append("img", productoNuevo.image); // Este es el nombre del campo 'img' en el backend
         }

         const response = await axios.post("http://localhost:3000/api/v1/product", formData, {
            headers: {
               "Content-Type": "multipart/form-data",
            },
         });

         toast.success("Producto agregado con éxito");
         setAddproduct(false);
         setProductoNuevo({ name: "", price: 0, stock: 0, image: null });
         obtenerProductos();
      } catch (error) {
         toast.error("Error al agregar el producto");
         console.error("Error al agregar el producto", error);
      }
   };



   const eliminarProducto = async (id: string): Promise<void> => {
      try {
         await axios.delete(`http://localhost:3000/api/v1/product/${id}`);
         obtenerProductos();
         toast.success("Producto Eliminado con exito");
      } catch (error) {
         console.error("Error al eliminar el producto", error);
      }
   };

   const editarProducto = async (): Promise<void> => {
      try {
         await axios.put(`http://localhost:3000/api/v1/product/${productoEditar.id}`, productoEditar);
         toast.success("Producto editado con exito");
         setEditproduct(false);
         obtenerProductos();
      } catch (error) {
         console.error("Error al actualizar el producto", error);
      }
   };

   useEffect(() => {
      obtenerProductos();
   }, []);



   return (
      <>
         <Toaster richColors position="top-center" />
         <div className="inventario-title">
            <h4>
               Inventario General
            </h4>
         </div>


         <div className="inventario-filter">

            <input placeholder="Buscar producto " type="text" />

            <select>
               <option value="">Buscar por</option>
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
            {productosusuario.map((i) => (

               <tbody key={i.id}>

                  <tr>
                     <td><i><img src={i.image} alt="" /></i></td>
                     <td>{i.name}</td>
                     <td>${i.price}</td>
                     <td>{i.stock}</td>
                     <td><span>Disponible</span></td>
                     <td>
                        <button onClick={() => eliminarProducto(i.id)}> <BsFillTrashFill /> </button>

                        <button
                           onClick={() => {
                              setEditproduct(true);
                              setProductoEditar(i);
                           }}
                        >
                           <BsFillPencilFill />
                        </button>
                     </td>

                  </tr>



               </tbody>


            ))}

         </table>

         <div className="inventario-button-add-box">
            <button onClick={() => setAddproduct(!addproduct)}>+</button>
         </div>


         <>
            <div className={addproduct ? "inventario-agregar-producto" : "inventario-agregar-producto-false"}>
               <div className="inventario-agregar-producto-box-inputs">
                  {/* Nombre del producto */}
                  <div className="inventario-agregar-producto-input">
                     <div className="inventario-agregar-producto-cerrar">
                        <label htmlFor="nombreProducto">Nombre del producto</label>
                        <button onClick={() => setAddproduct(!addproduct)} className="inventario-agregar-producto-boton-cerrar">+</button>
                     </div>
                     <input
                        type="text"
                        placeholder="Nombre del producto"
                        value={productoNuevo.name}
                        onChange={(e) => setProductoNuevo({ ...productoNuevo, name: e.target.value })}
                     />
                  </div>

                  {/* Imagen del producto */}
                  <div className="inventario-agregar-producto-input">
                     {agregarImagen && (
                        <>
                           <label htmlFor="imagenProducto">Imagen del producto</label>
                           <input
                              name="img"
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                 if (e.target.files) {
                                    setProductoNuevo({ ...productoNuevo, image: e.target.files[0] });
                                 }
                              }}
                           />
                        </>
                     )}
                     <button onClick={() => setAgregarImagen(!agregarImagen)} className="inventario-agregar-producto-input-imagen">
                        <BiCamera />
                     </button>
                  </div>

                  {/* Valor del producto */}
                  <div className="inventario-agregar-producto-input">
                     <label htmlFor="precioProducto">Valor del producto</label>
                     <input
                        type="number"
                        placeholder="Precio"
                        value={productoNuevo.price}
                        onChange={(e) => setProductoNuevo({ ...productoNuevo, price: parseFloat(e.target.value) })}
                     />
                  </div>

                  {/* Stock del producto */}
                  <div className="inventario-agregar-producto-input">
                     <label htmlFor="stockProducto">Stock del producto</label>
                     <input
                        type="number"
                        placeholder="Cantidad"
                        value={productoNuevo.stock}
                        onChange={(e) => setProductoNuevo({ ...productoNuevo, stock: parseInt(e.target.value) })}
                     />
                  </div>

                  {/* Botón para agregar producto */}
                  <div className="inventario-agregar-producto-button-add">
                     <button onClick={agregarProducto}>Agregar producto</button>
                  </div>
               </div>
            </div>
         </>

         <>
            <div className={editproduct && productoEditar ? "inventario-editar-producto" : "inventario-editar-producto-false"}>
               <div className="inventario-editar-producto-box-inputs">
                  <div className="inventario-editar-producto-input">
                     <div className="inventario-editar-producto-cerrar">
                        <label>Nombre del producto</label>
                        <button onClick={() => setEditproduct(false)} className="inventario-editar-producto-boton-cerrar">+</button>
                     </div>
                     <input
                        type="text"
                        value={productoEditar.name || ""}
                        onChange={(e) => setProductoEditar({ ...productoEditar, name: e.target.value })}
                     />
                  </div>
                  <div className="inventario-editar-producto-input">
                     {editarimagen && (
                        <>
                           <label>Imagen del producto</label>
                           <input
                              type="url"
                              value={productoEditar.image || ""}
                              onChange={(e) => setProductoEditar({ ...productoEditar, image: e.target.value })}
                           />
                        </>
                     )}
                     <button onClick={() => setEditarimagen(!editarimagen)} className="inventario-editar-producto-input-imagen">
                        <BiCamera />
                     </button>
                  </div>
                  <div className="inventario-editar-producto-input">
                     <label>Valor del producto</label>
                     <input
                        type="number"
                        value={productoEditar.price || ""}
                        onChange={(e) => setProductoEditar({ ...productoEditar, price: e.target.value })}
                     />
                  </div>
                  <div className="inventario-editar-producto-input">
                     <label>Stock del producto</label>
                     <input
                        type="number"
                        value={productoEditar.stock || ""}
                        onChange={(e) => setProductoEditar({ ...productoEditar, stock: e.target.value })}
                     />
                  </div>
                  <div className="inventario-editar-producto-button-edit">
                     <button onClick={editarProducto}>Guardar</button>
                     <button onClick={() => setEditproduct(false)}>Cancelar</button>
                  </div>
               </div>
            </div>

         </>

      </>
   )

}

export default Inventario