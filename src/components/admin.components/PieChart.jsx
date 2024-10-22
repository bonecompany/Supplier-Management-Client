import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [chartState] = useState({
    series: [70, 65, 90, 20],
    options: {
      labels: ['Supplier', 'Tapper', 'Latex', 'Driver'],
      chart: {
        width: '100%',
      },
      responsive: [
        {
          breakpoint: 640,
          options: {
            chart: {
              width: "100%",
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 1024,
          options: {
            chart: {
              width: "100%",
            },
            legend: {
              position: 'right',
            },
          },
        },
      ],
    },
  });

  return (
    <div className="w-full sm:w-[500px] xl:w-[700px] max-w-full">
      <ReactApexChart
        options={chartState.options}
        series={chartState.series}
        type="pie"
        width="100%"
      />
    </div>
  );
};

export default ApexChart;
