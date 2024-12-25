import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const ServiceBooked = () => {
  const item = useLoaderData();
  const [serviceDate, setServiceDate] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");
 // console.log(serviceDate, specialInstructions);
  //   console.log(item);
  const { user } = useContext(AuthContext);
  //console.log(user?.email);
  const currentUserMail = user?.email;
  const {
    _id,
    serviceImage,
    serviceName,
    serviceDescription,
    servicePrice,
    userName,
    userImage,
    serviceArea,
    userMail,
  } = item;
  const handlePurchaseBtn = (e) => {
    e.preventDefault();
    // const specialInstruction = e.target.specialInstruction.value;
    // const serviceDate = e.target.serviceDate.value;
    const serviceStatus = "pending";
    const bookedInfo = {
      _id,
      serviceImage,
      serviceName,
      serviceDescription,
      servicePrice,
      userName,
      userImage,
      serviceArea,
      userMail,
      serviceStatus,
      serviceDate,
      specialInstructions,
      currentUserMail,
    };
    console.log(bookedInfo);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to cancel this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, booked it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post("http://localhost:5000/bookedService", bookedInfo)
          .then((res) => {
            if (res.data.acknowledged) {
              Swal.fire({
                title: "Wow! Booked.",
                text: "Your Service been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="max-w-4xl mx-auto mt-8 p-6 bg-gradient-to-r from-indigo-100 to-blue-50 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          Book Your Service
        </h1>

        {/* Part 1: Non-editable Fields */}
        <div
          className={`bg-[url('${serviceImage}')] bg-cover bg-center bg-no-repeat bg-indigo-50 rounded-lg p-6 mb-6`}
        >
          <h2 className="text-xl font-semibold text-indigo-600 mb-4">
            Service Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold text-indigo-700">
                Service ID
              </label>
              <p className="bg-gray-100 p-2 rounded-md">{item?._id}</p>
            </div>
            <div>
              <label className="font-semibold text-indigo-700">
                Service Name
              </label>
              <p className="bg-gray-100 p-2 rounded-md">{serviceName}</p>
            </div>
            <div>
              <label className="font-semibold text-indigo-700">
                Provider Name
              </label>
              <p className="bg-gray-100 p-2 rounded-md">{userName}</p>
            </div>
            <div>
              <label className="font-semibold text-indigo-700">
                Provider Email
              </label>
              <p className="bg-gray-100 p-2 rounded-md">{userMail}</p>
            </div>
            <div>
              <label className="font-semibold text-indigo-700">Your Name</label>
              <p className="bg-gray-100 p-2 rounded-md">{user?.displayName}</p>
            </div>
            <div>
              <label className="font-semibold text-indigo-700">
                Your Email
              </label>
              <p className="bg-gray-100 p-2 rounded-md">{user?.email}</p>
            </div>
            <div>
              <label className="font-semibold text-indigo-700">Price</label>
              <p className="bg-gray-100 p-2 rounded-md">${servicePrice}</p>
            </div>
            <div>
              <label className="font-semibold text-indigo-700">
                Service Image
              </label>
              <img
                src={serviceImage}
                alt="Service"
                className="w-full h-48 object-cover rounded-md border"
              />
            </div>
          </div>
        </div>

        {/* Part 2: Editable Fields */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Booking Details
          </h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="font-semibold text-blue-700">
                Service Date
              </label>
              <input
                type="date"
                name="ServiceDate"
                className="w-full border border-blue-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={serviceDate}
                onChange={(e) => setServiceDate(e.target.value)}
              />
            </div>
            <div>
              <label className="font-semibold text-blue-700">
                Special Instructions
              </label>
              <textarea
                className="w-full border border-blue-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="4"
                name="specialInstruction"
                placeholder="Enter address, area, or any special instructions..."
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
              ></textarea>
            </div>
          </div>

          {/* Purchase Button */}
          <div className="mt-6">
            <button
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-2 rounded-lg hover:shadow-lg hover:from-blue-600 hover:to-indigo-600 transition"
              onClick={handlePurchaseBtn}
            >
              Purchase Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBooked;
