import React from "react";
import { Link } from "react-router-dom";
import image from "./Images/home.jpg";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <nav className="flex items-center justify-center px-6 py-4 bg-grey text-black">
        <Link to="/login">
          <button className="px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-600">
            Login
          </button>
        </Link>
      </nav>

      <section
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-black bg-white opacity-50 rounded-3xl px-20 py-20">
          <h1 className="text-6xl font-bold mb-4 font-sans">
            BOOM RENTAL HARMONY
          </h1>
          <p className="text-2xl max-w-xl mx-auto mb-8 font-sans">
            A seamless rental experience that connects tenants and property
            owners through an intuitive, efficient, and user-friendly platform.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
