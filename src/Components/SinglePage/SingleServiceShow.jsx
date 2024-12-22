import React from 'react';

const SingleServiceShow = ({item}) => {
    console.log(item);
    const {serviceImage,serviceName,serviceDescription,servicePrice} = item;
    return (
        <div>
            <div class="flex justify-center gap-6 p-6">  
        <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
          <div class="flex justify-center items-center">
            <img
              src={serviceImage}
              alt="IT Software Icon"
              class="mb-4 w-[600px] h-[500px]"
            />
          </div>
          <h1 class="text-lg font-semibold text-gray-800">
            {serviceName}
          </h1>
          <h2 class="text-sm text-gray-600 mt-2">
            {serviceDescription}
          </h2>
          <h1>
            {servicePrice}
          </h1>
          <button className='btn btn-secondary'>View Details</button>
        </div>
      </div>
        </div>
    );
};

export default SingleServiceShow;