import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";

interface BarChartProps {
  data: number[];
  labels?: string[];
  backgroundColor: string;
  borderColor: string;
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  labels,
  backgroundColor,
  borderColor,
}) => {
  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        display: false,
        labels: {
          color: "#201666",
          usePointStyle: true,
          pointStyle: "rectRounded",
          font: {
            size: 14,
            family: "GilroyMedium",
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: false,
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          color: "#585858",
          font: {
            family: "DMSansMedium",
            size: 14,
          },
          major: {
            enable: true,
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Inflow",
        data: data,
        fill: false,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
      },
    ],
  };

  return (
    <div className="line-chart-container-bar">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
