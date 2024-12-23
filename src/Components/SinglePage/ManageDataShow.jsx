import React from 'react';

const ManageDataShow = ({item}) => {
    const {serviceImage,serviceName,serviceDate,serviceDescription,servicePrice} = item;
    console.log(item);
    return (
        <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden p-4 hover:shadow-xl transition-shadow duration-300">
        <img
          src={serviceImage}
          alt="Service Image"
          className="w-full h-48 object-cover rounded-md hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-700 mb-2">{serviceName}</h3>
          <p className="text-gray-600 text-sm mb-4">{serviceDescription}</p>
          <div className="flex space-x-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300">
              Edit
            </button>
            <button
              className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition-colors duration-300"
              //onClick={() => handleDeleteBtn(item._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      
    );
};

export default ManageDataShow;