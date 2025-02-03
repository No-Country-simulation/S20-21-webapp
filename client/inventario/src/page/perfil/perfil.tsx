import { useState } from "react";
import { useAuthStore } from "../../../store/useAuth";
import axios from "axios";
import "./perfil.css";
import { CgPassword } from "react-icons/cg";
import { Toaster,toast } from "sonner";

function Perfil() {
    const { user} = useAuthStore(); 

    const [name, setName] = useState(user?.name || "");
    const [company, setCompany] = useState(user?.company || "");
    const [email, setEmail] = useState(user?.email || "");
    const [phone, setPhone] = useState(user?.phone || "");
    const [selectedFile, setSelectedFile] = useState(null);
    const [oldPassword, setOldPassword] = useState("");  // Para la antigua contraseña
    const [newPassword, setNewPassword] = useState("");  // Para la nueva contraseña

    // Manejador para la imagen
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    // Manejador para actualizar usuario
    const handleUpdate = async () => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("company", company);
        formData.append("phone", phone);
    
        if (selectedFile) {
            formData.append("img", selectedFile);
        }

        try {
            const { data } = await axios.put(`http://localhost:3000/api/v1/user/${user?.id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

          
            toast.success("Usuario actualizado con éxito!");
         
        } catch (error) {
            console.error("Error al actualizar:", error);
            toast.error(error.response?.data?.message || "Error al actualizar usuario");
        }
    };

    const handlePasswordChange = async () => {
        if (!oldPassword || !newPassword) {
            toast.info("Por favor, complete ambos campos de contraseña.");
            return;
        }

        try {
            // Aquí puedes hacer una solicitud para cambiar la contraseña si es necesario
            const response = await axios.put(`http://localhost:3000/api/v1/user/${user?.id}/password`, {
                oldPassword,
                newPassword
            });

            toast.success("Contraseña actualizada con éxito!");
        } catch (error) {
            console.error("Error al actualizar la contraseña:", error);
            toast.error(error.response?.data?.message || "Error al actualizar contraseña");
        }
    };
   console.log(user);
   
    

    return (
    
        <div className="perfil-box">
                <Toaster position="top-center" richColors/>
            <div className="perfil-title">
                <h4>Información de perfil</h4>
            </div>

            <div className="perfil-edit-image">
                <img
                    src={user?.img || "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"}
                    alt="Foto de perfil"
                />
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUpdate}>Agregar Foto</button>
            </div>

            <div className="perfil-box-info">
                <div className="perfil-edit-info">
                    <div className="perfil-edit-info-inputs-1">
                        <label htmlFor="nombre">Nombre</label>
                        <input id="nombre" value={name} onChange={(e) => setName(e.target.value)} type="text" />
                    </div>
                    <div className="perfil-edit-info-inputs-1">
                        <label htmlFor="empresa">Nombre de la empresa</label>
                        <input id="empresa" value={company} onChange={(e) => setCompany(e.target.value)} type="text" />
                    </div>
                </div>

                <div className="perfil-edit-info">
                    <div className="perfil-edit-info-inputs-1">
                        <label htmlFor="email">Email</label>
                        <input placeholder={email} id="email" value={email} type="text" />
                    </div>
                    <div className="perfil-edit-info-inputs-1">
                        <label htmlFor="telefono">Número de teléfono</label>
                        <input id="telefono" value={phone} onChange={(e) => setPhone(e.target.value)} type="number" />
                    </div>
                </div>

                <div className="perfil-edit-info-button-update">
                    <button onClick={handleUpdate}>Actualizar Información</button>
                </div>

                <div className="perfil-title">
                    <h4>Información de seguridad</h4>
                </div>

                <div className="perfil-edit-info">
                    <div className="perfil-edit-info-inputs-2">
                        <label htmlFor="old-password">Antigua contraseña</label>
                        <input
                            id="old-password"
                            type="password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                    </div>
                    <div className="perfil-edit-info-inputs-2">
                        <label htmlFor="new-password">Contraseña Nueva</label>
                        <input
                            id="new-password"
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>
                </div>

                <div className="perfil-edit-info-button-update">
                    <button onClick={handlePasswordChange}>Cambiar contraseña</button>
                </div>
            </div>
        </div>
    );
}

export default Perfil;
