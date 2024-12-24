import React from "react";

const BookedDataShow = ({ item }) => {
    const {serviceImage,serviceName,serviceDate,serviceDescription,servicePrice,serviceStatus} = item;
  
  return (
   
      <div class="bg-white shadow-lg rounded-lg overflow-hidden p-2">
        <img
          src={serviceImage}
          alt="Service Image"
          class="w-full h-48 hover:scale-105"
        />
        <div class="p-6">
          <div class="flex items-center mb-4">
            
            <div class="bg-blue-100 text-blue-600 font-semibold text-sm px-4 py-2 rounded-full">
              Booked: {serviceDate}
            </div>
          </div>
          <h3 class="text-lg font-bold text-gray-800 mb-2">
            {serviceName}
          </h3>
          <p class="text-gray-600 text-sm mb-4">
           {serviceDescription}
          </p>
          <div class="flex space-x-4">
            {
              serviceStatus === "pending" ? (
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                  Pending
                </button>
              ) : serviceStatus === "working" ? (
                <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                  Working
                </button>
              ) : (
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  Accepted
                </button>
              )


            }
            
          </div>
        </div>
      </div>
   
  );
};

export default BookedDataShow;
