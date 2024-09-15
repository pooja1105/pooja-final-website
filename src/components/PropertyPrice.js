import React, { useState, useEffect } from 'react';

const PropertyPrice = () => {
    const [properties, setProperties] = useState([]); // State to store property prices
    const [loading, setLoading] = useState(true); // State to manage loading
    const [error, setError] = useState(null); // State to manage error handling
    const [heading, setHeading] = useState(''); // State to store the heading

    useEffect(() => {
        // Function to fetch data from the API
        const fetchPropertyPrices = async () => {
            try {
                const response = await fetch('http://buyindiahomes.in/api/property-prices?website=buyindiahomes.in');
                if (response.ok) {
                    const data = await response.json();
                    setHeading(data.page[0].heading); // Set the heading from the API response
                    setProperties(data.property_prices); // Set the property prices from the API response
                    setLoading(false); // Set loading to false once data is fetched
                } else {
                    throw new Error('Failed to fetch property prices');
                }
            } catch (error) {
                setError(error.message); // Store error message in state
                setLoading(false); // Set loading to false in case of an error
            }
        };

        fetchPropertyPrices(); // Trigger the API call when component mounts
    }, []);

    // Display loading message while the data is being fetched
    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    // Display error message in case of an error during the API call
    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    // Display table with property price data
    return (
        <div className="flex flex-col items-center w-full px-4">
            {/* Display the heading dynamically from the API */}
            <h1 className="text-2xl font-bold my-8 w-full text-left" style={{ color: '#06a34e', textAlign: 'center' }}>
                {heading}
            </h1>

            <div className="overflow-x-auto w-full">
                <table className="min-w-full table-auto border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-center">Type</th>
                            <th className="border border-gray-300 px-4 py-2 text-center">Total Towers</th>
                            <th className="border border-gray-300 px-4 py-2 text-center">Carpet Area (SQ.FT)</th>
                            <th className="border border-gray-300 px-4 py-2 text-center">Carpet Area (SQ.M)</th>
                            <th className="border border-gray-300 px-4 py-2 text-center">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {properties.length > 0 ? (
                            properties.map((property) => (
                                <tr key={property.id}>
                                    <td className="border border-gray-300 px-4 py-2 text-center">{property.property_type}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">{property.property_tower}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">{property.property_carpet_sqft}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">{property.property_carpet_sqm}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        {property.property_price} {property.price_unit} - {property.price_tag}
                                    </td>
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

export default PropertyPrice;
