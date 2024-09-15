import React from 'react';

const Box = ({ type, content, heading, text }) => {
    let contentElement;

    if (type === 'logo') {
        contentElement = (
            <img 
                src={content} 
                alt="Logo" 
                className="w-20 h-10 sm:w-24 sm:h-12 md:w-32 md:h-16 lg:w-40 lg:h-20 object-contain transition-transform duration-300 hover:scale-110" 
            />
        );
    } else if (type === 'text') {
        contentElement = (
            <>
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 md:mb-3 lg:mb-4 transition-transform duration-300 hover:scale-105">{heading}</h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black font-semibold transition-transform duration-300 hover:scale-105">{text}</p>
            </>
        );
    } else {
        contentElement = <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black font-semibold">{content}</p>;
    }

    return (
        <div className="w-full sm:w-44 md:w-56 lg:w-64 h-auto sm:h-20 md:h-28 lg:h-36 bg-white rounded-md shadow-lg flex items-center justify-center p-2 sm:p-4 md:p-5 lg:p-6 mt-4 sm:mt-6 md:mt-8 lg:mt-10 transition-transform duration-300 transform hover:scale-105">
            {contentElement}
        </div>
    );
};

export default Box;
