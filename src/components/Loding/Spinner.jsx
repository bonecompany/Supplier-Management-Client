import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin rounded-full h-40 w-40 border-t-4 border-blue-500"></div>
    </div>
  );
};

export default Spinner;