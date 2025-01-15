import "./inventario.css"
import { BsFillTrashFill,BsDownload,BsFillPencilFill  } from "react-icons/bs";
function Inventario() {
   return(
   <>

   <div className="inventario-title">
      <h4>
         Inventario General
      </h4>
   </div>


<div className="inventario-filter">
   <input placeholder="Buscar producto " type="text" />
   <select name="" id="">
   <option>Buscar por</option>
      <option value="">Nombre</option>
      <option value="">Status</option>
      <option value="">Cantidad</option>
      <option value="">Valor</option>
   </select>

  
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
      <td><i><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRatAKQaBQrq4d0imSB5oxC_X7IDhE9Jjh2Dw&s" alt="" /></i></td>
      <td>Papas</td>
      <td>$25.00</td>
      <td>25</td>
      <td><span>Disponible</span></td>
      <td>
         <button>< BsFillTrashFill/></button>
         <button><BsDownload/></button>
         <button> <BsFillPencilFill /></button>
      </td>

    </tr>
    
    <tr>
      <td><i><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRatAKQaBQrq4d0imSB5oxC_X7IDhE9Jjh2Dw&s" alt="" /></i></td>
      <td>Papas</td>
      <td>$25.00</td>
      <td>25</td>
      <td><span>Disponible</span></td>
      <td>
         <button>< BsFillTrashFill/></button>
         <button><BsDownload/></button>
         <button> <BsFillPencilFill /></button>
      </td>

    </tr>

    <tr>
      <td><i><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRatAKQaBQrq4d0imSB5oxC_X7IDhE9Jjh2Dw&s" alt="" /></i></td>
      <td>Papas</td>
      <td>$25.00</td>
      <td>25</td>
      <td><span>Disponible</span></td>
      <td>
         <button>< BsFillTrashFill/></button>
         <button><BsDownload/></button>
         <button> <BsFillPencilFill /></button>
      </td>

    </tr>

    <tr>
      <td><i><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRatAKQaBQrq4d0imSB5oxC_X7IDhE9Jjh2Dw&s" alt="" /></i></td>
      <td>Papas</td>
      <td>$25.00</td>
      <td>25</td>
      <td><span>Disponible</span></td>
      <td>
         <button>< BsFillTrashFill/></button>
         <button><BsDownload/></button>
         <button> <BsFillPencilFill /></button>
      </td>

    </tr>

    </tbody>
</table>
<div className="inventario-download">

<button>Descargar PDF <i><BsDownload/> </i></button>
</div>

    </> 
   )
   
}

export default Inventario