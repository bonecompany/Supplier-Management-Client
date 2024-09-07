import React from "react";
import { BarChart } from "@mui/x-charts";
import PieChart from "../../components/admin.components/PieChart"
function Graph() {
  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {/* Image 1 - start */}
          <div> <PieChart/></div>

          <div className="group relative flex h-48 max-sm:h-24 items-end overflow-hidden rounded-lg md:col-span-2 md:h-80">
            <BarChart
              series={[
                { data: [35, 44, 24, 34], color: "#FF6384" }, // Series 1 - Red
                { data: [51, 6, 49, 30], color: "#36A2EB" }, // Series 2 - Blue
                { data: [15, 25, 30, 50], color: "#FFCE56" }, // Series 3 - Yellow
                { data: [60, 50, 15, 25], color: "#4BC0C0" }, // Series 4 - Green
              ]}
              height={290}
              xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Graph;
