import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[black] p-3 flex items-center">
      <div className="flex items-center ml-20 space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M760-400v-260L560-800 360-660v60h-80v-100l280-200 280 200v300h-80ZM560-800Zm20 160h40v-40h-40v40Zm-80 0h40v-40h-40v40Zm80 80h40v-40h-40v40Zm-80 0h40v-40h-40v40ZM280-220l278 76 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Z" />
        </svg>
        <h1 className="text-white text-xl font-sans font-bold ">
          Boom Rental Harmony
        </h1>
      </div>
      <div className="ml-auto flex justify-center space-x-4">
        <ul className="flex space-x-12">
          <li>
            <a
              href="#home"
              className="text-white  text-l font-sans font-semibold"
            >
              Email Us:info@boomrental.com
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
