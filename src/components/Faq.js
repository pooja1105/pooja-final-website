import React, { useState, useEffect } from 'react';

const Faq = () => {
  const [faqData, setFaqData] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch('http://buyindiahomes.in/api/faq?website=buyindiahomes.in');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFaqData(data.faqs || []);  // Access the 'faqs' property
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };

    fetchData();
  }, []);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <h1
        className="text-center font-bold"
        style={{
          color: "#000",
          fontSize: "30px",
          fontFamily: "Inter, sans-serif",
          marginTop: "50px",
        }}
      >
        FAQs
      </h1>
      <div className="w-full max-w-4xl mx-auto p-6">
        {faqData.map((item, index) => (
          <div key={index} className="mb-6">
            <button
              onClick={() => toggleSection(index)}
              className="flex items-center w-full text-gray-700 font-semibold p-3 bg-[#06a34e] text-white rounded-lg hover:bg-[#048a3d] transition"
            >
              <span>{openIndex === index ? '-' : '+'}</span>
              <span className="ml-2 text-left">{item.faq_title}</span>
            </button>

            {openIndex === index && (
              <div className="mt-4 p-4 border-t border-gray-300">
                <p dangerouslySetInnerHTML={{ __html: item.faq_content }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Faq;
