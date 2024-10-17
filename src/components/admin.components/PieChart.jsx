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
          width="100%"
          className="max-w-[300px] sm:max-w-[500px]"
        />


 

      </>
 
  );
};

export default ApexChart;
