import "./perfil.css"

function Perfil() {
    return (
        <>
       

       
            <div className="perfil-title">
                <h4>Informacion de perfil</h4>
            </div>
           
            <div className="perfil-edit-image">
                <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="" />
                <button>Agregar Foto</button>
            </div>

            <div className="perfil-box-info">
                
            
            <div className="perfil-edit-info">
                <div className="perfil-edit-info-inputs-1">
                    <label htmlFor="">Nombre</label>
                    <input placeholder="Ignacio" type="text" />
                </div>
                <div className="perfil-edit-info-inputs-1">
                    <label htmlFor="">Nombre de la empresa</label>
                    <input placeholder="Pollito new" type="text" />
                </div> 
                </div>
               
                <div className="perfil-edit-info">
                
                <div className="perfil-edit-info-inputs-1">
                    <label htmlFor="">Email</label>
                    <input placeholder="ejemplo@gmail.com" type="email" />
                </div>
                <div className="perfil-edit-info-inputs-1">
                    <label htmlFor="">Numero de telefono</label>
                    <input placeholder="123456789" type="number" />
                </div>
            
                </div>
              
               <div className="perfil-edit-info-button-update" >
                    <button>Actualizar Información</button>
                </div>

                <div className="perfil-title">
                <h4>Informacion de seguridad</h4>
            </div>
           
            <div className="perfil-edit-info">
                <div className="perfil-edit-info-inputs-2">
                    <label htmlFor="">Antigua contraseña</label>
                    <input type="password" />
                </div>
                <div className="perfil-edit-info-inputs-2">
                    <label htmlFor="">Contraseña Nueva</label>
                    <input type="password" />
                </div> 
                <div className="perfil-edit-info-inputs-2">
                    <label htmlFor="">Confirmar nueva contraseña</label>
                    <input type="password" />
                </div> 
                </div>
                <div  className="perfil-edit-info-button-update" >
                    <button>Cambiar contraseña</button>
                </div>
</div>
        </>
    )
}
export default Perfil