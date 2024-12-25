import React from "react";
import { useNavigate } from 'react-router-dom';
const ShowPopuler = ({ item }) => {
    const navigate =  useNavigate()
    const handleViewBtn =()=>{
        navigate('/services');
    }
  const {
    serviceImage,
    serviceName,
    serviceDescription,
    servicePrice,
    userImage,
    userName,
  } = item;
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
        {/* Left Section: Service Image and Details */}
        <div className="w-2/3 p-4">
          <img
            src={serviceImage}
            alt={serviceName}
            className="w-full h-48 object-cover rounded-md"
          />
          <h2 className="text-lg font-semibold text-gray-800 mt-4">
            {serviceName}
          </h2>
          <p className="text-gray-600 text-sm mt-2">{serviceDescription}</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-blue-600 font-semibold text-lg">
              ${servicePrice}
            </span>
            <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600" onClick={handleViewBtn}>
              View Details
            </button>
          </div>
        </div>

        <div className="border-l border-gray-500"></div>

        <div className="w-1/3 p-4 flex flex-col items-center">
          <h1 className="text-xl text-gray-950 mb-4">Provider</h1>

          <img
            src={userImage}
            alt={userName}
            className="w-[75%] h-[50%] rounded-full  mb-2"
          />
          <span className="text-gray-700 text-xl text-center">{userName}</span>
        </div>
      </div>
    </div>
  );
};

export default ShowPopuler;
