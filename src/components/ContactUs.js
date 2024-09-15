import React from 'react';
import location from "../images/location-dot-solid.webp";
import phone from "../images/phone-solid.webp";
import building from "../images/building-solid.webp";
import background from "../images/background.webp";

const countryOptions = [
    { code: '+93', name: 'Afghanistan' },
    { code: '+1', name: 'Canada' },
    { code: '+91', name: 'India' },
    { code: '+44', name: 'UK' },
    { code: '+61', name: 'Australia' },
    { code: '+81', name: 'Japan' },
    { code: '+33', name: 'France' },
    { code: '+49', name: 'Germany' },
    { code: '+39', name: 'Italy' },
    { code: '+55', name: 'Brazil' },
    { code: '+86', name: 'China' },
    { code: '+90', name: 'Turkey' },
    { code: '+27', name: 'South Africa' },
    { code: '+40', name: 'Romania' },
    { code: '+7', name: 'Russia' },
    { code: '+92', name: 'Pakistan' },
    { code: '+977', name: 'Nepal' },
    { code: '+60', name: 'Malaysia' },
    { code: '+82', name: 'South Korea' },
    { code: '+354', name: 'Iceland' },
];

const ContactUs = () => {
    return (
        <section
            className="py-20 px-4 font-sans mt-12"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="bg-gray-800 bg-opacity-70 py-16 px-4 rounded-lg">
                <div className="max-w-7xl mx-auto">
                    {/* Contact Us Title */}
                    <h1 className="text-4xl font-bold text-center mb-12" style={{ color: '#06a34e' }}>
                        Contact Us
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="bg-gray-900 text-white p-6 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
                            <h2 className="text-center text-xl font-bold mb-6">LOCATION</h2>
                            <div className="mb-4">
                                <div className="flex items-center mb-2">
                                    <img src={location} alt="Location Icon" className="w-6 h-6 mr-2" />
                                    <p className="m-0" style={{ fontFamily: 'sans-serif' }}>Plot D & B2, S.No. 18/6, Aundh-Ravet Road, Dange Chowk, Wakad, Pune</p>
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="flex items-center mb-2">
                                    <img src={phone} alt="Phone Icon" className="w-6 h-6 mr-2" />
                                    <p className="m-0">08040830607</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center mb-2">
                                    <img src={building} alt="Building Icon" className="w-6 h-6 mr-2" />
                                    <p className="m-0">RERA Number: P52100024885</p>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-2 bg-white p-6 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
                            <form>
                                <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">ENQUIRE NOW</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                    <input
                                        type="text"
                                        placeholder="First Name*"
                                        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow duration-300 hover:shadow-md"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Last Name*"
                                        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow duration-300 hover:shadow-md"
                                    />

                                    <select
                                        name="country_code"
                                        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow duration-300 hover:shadow-md"
                                    >
                                        <option value="">Select Country</option>
                                        {countryOptions.map((option) => (
                                            <option key={option.code} value={option.code}>
                                                {option.name} ({option.code})
                                            </option>
                                        ))}
                                    </select>

                                    <input
                                        type="text"
                                        placeholder="Phone*"
                                        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow duration-300 hover:shadow-md"
                                    />

                                    <input
                                        type="email"
                                        placeholder="Email*"
                                        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow duration-300 hover:shadow-md"
                                    />

                                    {/* New Message Field */}
                                    <textarea
                                        placeholder="Message*"
                                        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow duration-300 hover:shadow-md md:col-span-2"
                                        rows="4"
                                    ></textarea>

                                </div>
                                <button
                                    type="submit"
                                    className="mt-6 w-full text-white p-3 rounded-lg font-bold hover:bg-[#016bb3] transition duration-300"
                                    style={{ backgroundColor: '#0383c5' }}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
