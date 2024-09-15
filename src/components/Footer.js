import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; 

const API_URL = 'http://buyindiahomes.in/api/footer?website=buyindiahomes.in';

const socialMediaIcons = {
  Facebook: FaFacebookF,
  Twitter: FaTwitter,
  LinkedIn: FaLinkedinIn,
  Instagram: () => <svg>Instagram Icon Placeholder</svg>, // Add Instagram icon or any other as needed
  Youtube: () => <svg>Youtube Icon Placeholder</svg>, // Add Youtube icon or any other as needed
};

const Footer = () => {
  const [footerData, setFooterData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setFooterData(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <footer className="bg-gray-100 py-8"><div className="container mx-auto text-center">Loading...</div></footer>;
  }

  if (error) {
    return <footer className="bg-gray-100 py-8"><div className="container mx-auto text-center">Error: {error}</div></footer>;
  }

  const { social_icons, g_setting } = footerData || {};

  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        {/* Footer Logos */}
        <div className="flex justify-center mb-4">
          {g_setting?.logo && (
            <img
              src={`path/to/images/${g_setting.logo}`} // Adjust path as needed
              alt="Logo"
              className="w-60 h-auto mb-4"
            />
          )}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-4">
          {social_icons?.map((icon) => {
            const IconComponent = socialMediaIcons[icon.social_icon] || (() => <svg>Default Icon</svg>);
            return (
              <a key={icon.id} href={icon.social_url} target="_blank" rel="noopener noreferrer">
                <IconComponent className="h-6 w-6 hover:text-gray-500 transition-colors duration-300" />
              </a>
            );
          })}
        </div>

        {/* Footer Contact Info */}
        <div className="text-sm mb-4 text-black">
          {g_setting?.footer_address && (
            <p style={{ fontSize: '12px' }}>{g_setting.footer_address}</p>
          )}
          {g_setting?.footer_phone && (
            <p style={{ fontSize: '12px' }}>Phone: {g_setting.footer_phone}</p>
          )}
          {g_setting?.footer_email && (
            <p style={{ fontSize: '12px' }}>Email: {g_setting.footer_email}</p>
          )}
          {g_setting?.footer_copyright && (
            <p style={{ fontSize: '12px' }}>{g_setting.footer_copyright}</p>
          )}
          {g_setting?.footer_disclamer && (
            <p className="mb-2" style={{ fontSize: '12px' }}>
              {g_setting.footer_disclamer}
            </p>
          )}
          {g_setting?.footer_agent_rera && (
            <p style={{ fontSize: '12px' }}>
              Agent Maharera: {g_setting.footer_agent_rera}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;