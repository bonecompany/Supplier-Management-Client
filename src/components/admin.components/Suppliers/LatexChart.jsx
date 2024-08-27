import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const LatexChart = ({ data }) => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="latex" stroke="#4f46e5" strokeWidth={2} />
          <CartesianGrid stroke="#e2e8f0" />
          <XAxis dataKey="name" tick={{ fill: "#4b5563" }} />
          <YAxis tick={{ fill: "#4b5563" }} />
          <Tooltip contentStyle={{ backgroundColor: "#f9fafb", borderColor: "#e5e7eb" }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LatexChart;
