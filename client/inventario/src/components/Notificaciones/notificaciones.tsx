interface NotificacionesProps {
    notificaciones: { id: number; mensaje: string }[];
}

const Notificaciones: React.FC<NotificacionesProps> = ({ notificaciones }) => {
    return (
        <div className="absolute top-20 right-5 border border-beigeclaro max-h-50 max-w-[250px] min-h-10 min-w-40 flex flex-col bg-white shadow-lg">
            <div className="w-full p-2 text-base text-customBlue font-bold border-b text-center bg-beigeclaro">
                NOTIFICACIONES
            </div>
            <div >
                {notificaciones.map((notificacion) => (
                    <div
                    key={notificacion.id}
                    className="p-2 border-b last:border-b-0 text-sm hover:bg-gray-100"
                    >
                    {notificacion.mensaje}
                    </div>
                ))}
            </div>  
        </div>
        
    );
};

export default Notificaciones;
