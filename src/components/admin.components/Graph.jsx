import React from "react";
import { BarChart } from "@mui/x-charts";
function Graph() {
  return (
    <div >
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
   
         

          <div className="group relative flex h-48 max-sm:h-48 items-end overflow-hidden rounded-lg md:col-span-2 md:h-80">
            <BarChart
              series={[
                { data: [35, 44, 24, 34], color: "#FF6384" }, // - Red
                { data: [51, 6, 49, 30], color: "#36A2EB" }, // - Blue
                { data: [15, 25, 30, 50], color: "#FFCE56" }, // - Yellow
                { data: [60, 50, 15, 25], color: "#4BC0C0" }, // - Green
                
              ]}
              height={290}
              xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
          </div>

      </div>
    </div>
  );
}

export default Graph;
