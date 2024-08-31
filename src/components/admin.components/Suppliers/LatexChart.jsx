import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LatexChart = () => {
  const data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "Latex Purchase (Kg)",
        data: [60, 59, 80, 81, 56, 55, 70],
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  return (
    <div className="p-4 ">
      <h2 className="text-2xl font-semibold mb-2">Latex Purchase Chart</h2>
      <Line data={data} />
    </div>
  );
};

export default LatexChart;
