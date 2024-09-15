import React from 'react';
import masterImage from "../images/master.jpg";

const MasterPlan = () => {
  return (
    <div className="flex flex-col items-center mt-11">

      <h2 className="text-3xl font-bold mb-11" style={{ color: '#06a34e', textAlign: 'left' }}>
        Master Plan
      </h2>


      <div className="w-full max-w-6xl">
        <img
          src={masterImage}
          alt="Master Plan"
          className="w-full h-auto max-h-[500px] object-cover"
        />
      </div>
    </div>
  );
};

export default MasterPlan;
