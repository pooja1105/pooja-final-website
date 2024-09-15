import React, { useEffect, useState } from 'react';


const Property = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://buyindiahomes.in/api/rera?website=buyindiahomes.in');
        const data = await response.json();
        console.log(data);  // Check the structure of the API response

        // Assuming properties are inside 'rera' array within the data object
        if (data && data.rera) {
          setProperties(data.rera);  // Set the 'rera' array to properties
        } else {
          setProperties([]);  // Safely handle if data is not as expected
        }

        setLoading(false);
      } catch (error) {
        setError('Error fetching data from API');
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
 
        <div className="flex flex-col items-center w-full px-4">
      {/* Heading */}
      <h1 className="text-2xl font-bold my-8 w-full text-left" style={{ color: '#06a34e', textAlign: 'center' }}>
        Property Name :
      </h1>

      {/* Table */}
      <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-center">Phase Name</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Total Towers</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Total Units</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Total Area (SQ.FT)</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Completion Date</th>
            </tr>
          </thead>
          <tbody>
            {properties.length > 0 ? (
              properties.map((property, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2 text-center">{property.phase_name}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{property.total_tower}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{property.total_units}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{property.total_area}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{property.completion_date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-center" colSpan="5">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>


  );
};

export default Property;



