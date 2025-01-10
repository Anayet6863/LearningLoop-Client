import React from "react";
import { useNavigate } from "react-router-dom";

const SingleServiceShow = ({ item }) => {
  //console.log(item);
  const navigate = useNavigate();
  const {
    serviceImage,
    serviceName,
    serviceDescription,
    servicePrice,
    userName,
    userImage,
    serviceArea,
  } = item;
  const handleViewDetailsBtn=(id)=>{
   // console.log(id);
    navigate(`/singleServiceDetails/${id}`)

  }
  return (
    <div>
      <div class="flex justify-center">
        
        <div class="grid md:grid-cols-2 gap-12  bg-white rounded-lg shadow-md p-6 w-[80%] hover:shadow-lg transition-shadow duration-300">
          {/* Left Section: Service Info */}
          <div class="flex-1">
            <div class="flex justify-center items-center">
              <img
                src={serviceImage}
                alt="Service Icon"
                class="mb-4 w-full h-[400px] object-cover"
              />
            </div>
            <h1 class="text-lg font-semibold text-gray-800">{serviceName}</h1>
            <h2 class="text-sm text-gray-600 mt-2">{serviceDescription}</h2>
            <h1 class="text-xl font-bold text-gray-800 mt-4">
              Price: {servicePrice}
            </h1>
            <button class="btn bg-purple-600 mt-4 text-white" onClick={()=>handleViewDetailsBtn(item._id)}>View Details</button>
          </div>

          {/* Right Section: Provider/User Info */}
          <div class="flex-1 text-center border-l border-gray-300 pl-6 border border-r-black flex flex-col 
          justify-center items-center">
            <h1 class="text-lg font-semibold text-gray-800">Provider Information</h1>
            <div class="mt-4">
              <img
                src={userImage}
                alt="Provider Image"
                class="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h1 class="text-lg font-semibold text-gray-800">
                Provider Name: {userName}
              </h1>
              <h4 class="text-sm text-gray-600 mt-2">
                Service Area: {serviceArea}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceShow;
