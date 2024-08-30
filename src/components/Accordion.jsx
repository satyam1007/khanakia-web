import React, { useState } from "react";

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20">
      <div>
        <button
          onClick={toggle}
          className="w-full text-left text-lg sm:text-xl md:text-2xl font-medium px-6 py-3 bg-white hover:bg-gray-50 focus:outline-none flex justify-between items-center border border-gray-200"
        >
          <span className="text-gray-800 font-semibold text-lg sm:text-md md:text-xl">
            {title}
          </span>
          <span>{isOpen ? "-" : "+"}</span>
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-700 border-l border-r border-gray-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 text-gray-600 bg-white text-base sm:text-lg md:text-xl leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
