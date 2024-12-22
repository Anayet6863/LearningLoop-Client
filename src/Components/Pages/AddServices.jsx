import React from "react";

const AddServices = () => {
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

          <form class="space-y-4">
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
