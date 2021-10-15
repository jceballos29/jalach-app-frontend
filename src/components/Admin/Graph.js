import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

function Graph() {
    const { totalCost, sales } = useSelector((state) => state.budgets);
    const { totalPayroll } = useSelector((state) => state.payroll);
    const earnings = sales - (totalCost + totalPayroll);

    const data = {
        labels: ["Ventas", "Gastos", "Nómina", "Ganancia"],
        datasets: [
            {
                data: [sales, totalCost, totalPayroll, earnings],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                ],
                borderWidth: 2,
            },
        ],
    };

    const options = {
        indexAxis: "y",
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: false,
        plugins: {
            legend: {
                position: "down",
                display: false,
            },
            title: {
                display: false,
                text: "Chart.js Horizontal Bar Chart",
            },
        },
        scales: {
            x: {
                display: false,
            },
        },
    };

    return (
        <>
            <Bar data={data} options={options} width={330} height={170} />
        </>
    );
}

export default Graph;
