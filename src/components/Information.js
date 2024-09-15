import React from 'react';
import scannerImage from '../images/scanner.png'; // Update the path to your actual image location

const Information = () => {
  return (
    <div className="flex flex-col items-center w-full px-4">
      {/* Heading */}
      <h1 className="text-2xl font-bold my-8 w-full text-left" style={{ color: '#06a34e', textAlign: 'center' }}>
      Maharera Information - Property Name :
      </h1>

      {/* Table */}
      <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-center">QR</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Rera</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Phase Name</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Completion Date</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Total Area</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Total Acre</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Total Tower</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Total Unit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <img src={scannerImage} alt="Scanner" className="w-10 h-10 object-contain mx-auto" />
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">34567890</td>
              <td className="border border-gray-300 px-4 py-2 text-center">Building A</td>
              <td className="border border-gray-300 px-4 py-2 text-center">2024-06-12</td>
              <td className="border border-gray-300 px-4 py-2 text-center">1230</td>
              <td className="border border-gray-300 px-4 py-2 text-center">12</td>
              <td className="border border-gray-300 px-4 py-2 text-center">12</td>
              <td className="border border-gray-300 px-4 py-2 text-center">12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Information;
