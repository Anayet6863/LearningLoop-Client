import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
const AddServices = () => {
    const {user} = useContext(AuthContext);
    //console.log(user);
   // console.log(user.photoURL);
   // console.log(user.displayName);
    const handleForm=e=>{
        e.preventDefault();
        const form = e.target;
        const serviceName = form.serviceName.value;
        const serviceImage = form.serviceImageUrl.value;
        const serviceDescription = form.serviceDescription.value;
        const serviceArea = form.serviceArea.value;
        const servicePrice = form.servicePrice.value;
        const userMail  = user?.email;
        const userImage = user?.photoURL;
        const userName = user?.displayName;

        const userInfo = {
          serviceName,serviceImage,serviceDescription,serviceArea,userMail,userImage,userName,servicePrice,
        }
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to cancel this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, add it!"
        }).then((result) => {
          if (result.isConfirmed) {
            axios.post('http://localhost:5000/addService',userInfo)
            //console.log(userInfo);
            .then(res=>{
              //console.log(res.data);
              if(res.data.acknowledged)
                Swal.fire({
                  title: "Hurrah!",
                  text: "Your service is added..",
                  icon: "success"
                });
                form.reset()
            })
          }
        });



       

       


    }
  return (
    <div className="bg-gray-400 flex justify-center items-center min-h-[calc(100vh-95px)]">
      <div class="flex bg-white rounded-lg shadow-lg w-4/5 max-w-5xl overflow-hidden">
        <div class="w-1/2 hidden md:block">
          <img
            src="https://i.ibb.co.com/mN4JGBf/GTY-Special-Offer-Page-Hero-5x2.webp"
            alt="Hallway"
            class="h-full w-full"
          />
        </div>

        <div class="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
            Add a service
          </h2>

          <form class="space-y-4" onSubmit={handleForm}>
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
              />
            </div>
            <div>
              <label
                
                class="block text-sm font-medium text-gray-600"
              >
                Service Area
              </label>
              <input
                type="text"
                required
                name="serviceArea"
                placeholder="Enter here..."
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
              
                class="block text-sm font-medium text-gray-600"
              >
                Service Price
              </label>
              <input
                type="text"
                name="servicePrice"
                required
                placeholder="Enter here..."
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

export default AddServices;
