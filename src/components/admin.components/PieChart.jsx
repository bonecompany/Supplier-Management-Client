import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [chartState] = useState({
    series: [70, 65,90,20],
    options: {
      labels: ['Supplier', 'Tapper','latex','driver'],
    },
  });

  return (
    <>
   
        <ReactApexChart
          options={chartState.options}
          series={chartState.series}
          type="pie"
          width={340}
        />

      </>
 
  );
};

export default ApexChart;