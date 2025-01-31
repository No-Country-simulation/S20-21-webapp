import { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Registrar componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GraphBars = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            // Puedes agregar cualquier otra lógica de adaptación aquí
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Datos de los productos
    const labels = ["Producto A", "Producto B", "Producto C", "Producto D", "Producto E"];
    const dataValues = [120, 190, 300, 50, 200];

    const datos = {
        labels: labels,
        datasets: [
            {
                label: "Inventario",
                data: dataValues,
                backgroundColor: "rgb(62, 88, 121)",
                borderColor: "rgb(33, 53, 85)",
                borderWidth: 2,
            },
        ],
    };

    const opciones = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Productos más vendidos",
            },
        },
    };

    return (
        <div style={{ width: "100%", maxWidth: "900px", margin: "auto", padding: "10px" }}>
            <div style={{ width: "100%", height: "400px" }}>
                <Bar ref={chartRef} data={datos} options={opciones} />
            </div>
        </div>
    );
};

export default GraphBars;