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
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const GraphBars = () => {
    // Datos de los productos
    const labels = ["Producto A", "Producto B", "Producto C", "Producto D", "Producto E"];
    const dataValues = [120, 190, 300, 50, 200];

    

    const datos = {
        labels: labels,
        datasets: [
            {
                label: "Inventario",
                data: dataValues,
                backgroundColor: "#55555",
                borderColor: "#716f6f",
                borderWidth: 2,
            },
        ],
    };

    const opciones = {
        responsive: true,
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

    return <Bar data={datos} options={opciones} />;
};

export default GraphBars;