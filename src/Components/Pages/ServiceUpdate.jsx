import { useLoaderData, useParams } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import lottieData from '../../../src/assets/Animation - 1735147746382.json'
import { AuthContext } from "../AuthProvider/AuthProvider";
const ServiceUpdate = () => {
  //const [servieData,setServiceData] = useState([])
  const {user}=useContext(AuthContext)
  const userMail = user?.email;
  console.log(userMail);
  const { id } = useParams();

  const servieData = useLoaderData();
  const {
    serviceName,
    serviceImage,
    servicePrice,
    service,
    serviceDescription,
    serviceArea,
  } = servieData;
 // console.log(servieData);
  const handleForm = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value;
    const serviceImage = form.serviceImageUrl.value;
    const serviceDescription = form.serviceDescription.value;
    const serviceArea = form.serviceArea.value;
    const servicePrice = form.servicePrice.value;
    const updateInfo = {
      serviceName,
      serviceImage,
      serviceDescription,
      serviceArea,
      servicePrice,
      userMail,
    };
    //console.log(updateInfo);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(`https://learning-loop-server.vercel.app/updatedService/${id}`, updateInfo,{withCredentials:true})
          .then((res) => {
            console.log(res.data);
            if(res.data.modifiedCount>0){
                Swal.fire({
                    title: "Updated!",
                    text: "Your file has been update.",
                    icon: "success",
                  });
            }
          })
          .catch(err=>{
            Swal.fire({
              title: "Unauthorized user!",
              text: "Try again",
              icon: "warning",
            });
          })
       
      }
    });
  };

  return (
    <div className="bg-gray-400 flex justify-center items-center min-h-[calc(100vh-95px)]">
      <div class="flex bg-white rounded-lg shadow-lg w-4/5 max-w-5xl overflow-hidden">
        <div class="w-1/2 hidden md:block bg-gray-500">
          <Lottie animationData={lottieData}></Lottie>
        </div>

        <div class="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
            Update the service
          </h2>

          <form class="space-y-4" onSubmit={(e) => handleForm(e, id)}>
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-600"
              >
                Service Name
              </label>
              <input
                type="text"
                name="serviceName"
                placeholder="Enter hrer..."
                required
                defaultValue={serviceName}
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-600"
              >
                Service Image Url
              </label>
              <input
                type="url"
                required
                name="serviceImageUrl"
                placeholder="Enter here..."
                defaultValue={serviceImage}
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-600"
              >
                Service Description
              </label>
              <input
                type="text-area"
                required
                name="serviceDescription"
                placeholder="Enter here..."
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                maxLength={100}
                defaultValue={serviceDescription}
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-600">
                Service Area
              </label>
              <input
                type="text"
                required
                name="serviceArea"
                placeholder="Enter here..."
                defaultValue={serviceArea}
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-600">
                Service Price
              </label>
              <input
                type="text"
                name="servicePrice"
                required
                placeholder="Enter here..."
                defaultValue={servicePrice}
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceUpdate;
