import React, { useEffect, useState } from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
export default function LineChart() {
  const [inflowData, setInflowData] = useState<number[]>([12, 19, 3, 5]);
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
          display: true,
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
        beginAtZero: false,
        display: false,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  const values = {
    labels: ["1w", "2w", "3w", "4w"],
    datasets: [
      {
        label: "First dataset",
        data: inflowData,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#29CC39",
        pointBackgroundColor: "#29CC39",
        pointBorderColor: "#29CC39",
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };
  return (
    <div className="px-[45px] line-chart-container">
      <Line data={values} options={options} />
    </div>
  );
}
