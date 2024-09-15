import React, { useState } from 'react';
import image1 from "../images/2bhk.webp";
import image2 from "../images/flat3.webp";
import image3 from "../images/3Bhk.webp";

const UnitPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState('2BHK');

  const plans = {
    '2BHK': {
      image: image1,
      carpetArea: '1000 sq. ft.',
      price: '₹50,00,000',
    },
    '3BHK': {
      image: image2,
      carpetArea: '1500 sq. ft.',
      price: '₹75,00,000',
    },
    '4BHK': {
      image: image3,
      carpetArea: '2000 sq. ft.',
      price: '₹1,00,00,000',
    },
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">

      <h2 className="text-3xl font-bold mb-6" style={{ color: '#06a34e', textAlign: 'left' }}>
        Unit Plan
      </h2>

      <div className="flex justify-center space-x-4 mb-10">
        {Object.keys(plans).map((plan) => (
          <button
            key={plan}
            onClick={() => setSelectedPlan(plan)}
            className={`${selectedPlan === plan ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
              } px-4 py-2 rounded-md text-sm font-medium transition duration-150 hover:bg-blue-500 hover:text-white`}
          >
            {plan}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:space-x-10 items-center">

        <div className="flex-1">
          <img
            src={plans[selectedPlan].image}
            alt={`${selectedPlan} Layout`}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="flex-1 mt-6 md:mt-0">
          <div className="bg-white-100 border-2 border-green-600 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-700 mb-4">
              {selectedPlan} - Carpet Area & Price
            </h3>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Carpet Area:</span>{' '}
              {plans[selectedPlan].carpetArea}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Price:</span>{' '}
              {plans[selectedPlan].price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitPlan;
