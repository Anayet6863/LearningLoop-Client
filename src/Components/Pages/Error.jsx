import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); 
  };

  return (
    <div className="min-h-[calc(100vh-431px)] w-full flex flex-col justify-center items-center bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400 text-white">
      <h1 className="text-9xl font-bold mb-4">404</h1>
      <h2 className="text-4xl font-semibold mb-2">Oops! Page Not Found</h2>
      <p className="text-lg mb-6 text-center px-6 max-w-lg">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <button
        onClick={handleGoHome}
        className="px-6 py-3 text-lg font-bold bg-blue-600 hover:bg-blue-700 rounded-md shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
