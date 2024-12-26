import React, { useContext, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SingleServiceDetails = () => {
  const user = useContext(AuthContext);
  useEffect(() => {
      document.title = "LearningLoop | Single Service";
    }, []);
  // console.log(user);
  const item = useLoaderData();
  //const {userImage,userName} = user;
  //console.log(userImage,userName);
  const {
    serviceName,
    serviceImage,
    serviceDescription,
    servicePrice,
    userImage,
    userName,
  } = item;
  //console.log(item);
  const navigate = useNavigate();
  const handleBookNOwBtn = (id) => {
    //console.log(id);
    navigate(`/bookedService/${id}`);
  };
  return (
    <div className="flex flex-col justify-center items-center mt-24 mb-10 bg-gray-500">
      <h1 className="text-white text-3xl font-bold items-center p-10">
        Service Details
      </h1>

      <div class="flex flex-col md:flex-row justify-center items-center p-6 bg-gray-50 rounded-lg gap-6 mb-20">
        <div class="w-full md:w-[50%]">
          <img
            src={serviceImage}
            alt="Service Image"
            class="rounded-lg shadow-md w-full h-[500px] object-cover"
          />
        </div>

        <div class="w-full md:w-[50%] bg-white p-6 rounded-lg shadow-md h-[500px] justify-center items-center flex flex-col">
          <h1 class="text-2xl font-bold text-gray-800 mb-2">{serviceName}</h1>

          <p class="text-gray-600 mb-4">{serviceDescription}</p>

          <div class="flex items-center gap-4 mb-4">
            <img
              src={userImage}
              alt="Provider Image"
              class="w-12 h-12 rounded-full object-cover shadow-md"
            />
            <h2 class="text-lg font-semibold text-gray-800">{userName}</h2>
          </div>

          <h3 class="text-xl font-bold text-green-600 mb-4">
            Price: ${servicePrice}
          </h3>

          <button
            class="bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition-colors"
            onClick={() => handleBookNOwBtn(item._id)}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceDetails;
