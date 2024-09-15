import React, { useState, useEffect } from 'react';

const API_URL = 'http://buyindiahomes.in/api/location-map?website=buyindiahomes.in';

const Map = () => {
  const [iframeSrc, setIframeSrc] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        // Extract iframe src from the API response
        if (data && data.map) {
          const parser = new DOMParser();
          const doc = parser.parseFromString(data.map, 'text/html');
          const iframe = doc.querySelector('iframe');
          setIframeSrc(iframe ? iframe.src : '');
        } else {
          setError('Invalid data from API');
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center py-8 bg-gray-100">
      <h1
        className="text-center font-bold mb-8"
        style={{
          color: "#06a34e",
          fontSize: "30px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        Location Advantage
      </h1>

      <div className="relative w-full max-w-4xl h-[300px] sm:h-[400px] lg:h-[500px]">
        <iframe
          src={iframeSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
