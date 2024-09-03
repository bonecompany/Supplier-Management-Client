import React from 'react';

const Skeleton = ({ width, height }) => {
  return (
    <div
      className={`bg-gray-300 rounded-md animate-pulse ${width} ${height}`}
    ></div>
  );
};

export default Skeleton;
