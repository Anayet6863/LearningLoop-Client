import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ShowServiceToDo = ({ item }) => {
  const [newServiceStatus, setNewServiceStatus] = useState("");
  const currentUserMail= item?.currentUserMail;
  const handleStatusChange = (e, id) => {
    const updatedStatus = e.target.value;
    setNewServiceStatus(updatedStatus);
    //console.log(updatedStatus);

    const info = { newServiceStatus: updatedStatus, currentUserMail};

    axios
      .patch(`http://localhost:5000/updatedStatus/${id}`, info,{withCredentials:true})
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          title: "Your status is updated.",
          showClass: {
            popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
          },
          hideClass: {
            popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
          },
        });
      })
      .catch((err) => {
        console.error("Error updating status:", err);
      });
  };

  const {
    serviceImage,
    serviceName,
    serviceDate,
    serviceDescription,
    servicePrice,
    serviceStatus,
  } = item;

  return (
    <tr>
      <td className="border border-gray-300 px-4 py-2 text-center">
        <img
          src={item.serviceImage}
          alt="Service"
          className="w-20 h-20 mx-auto rounded-md hover:scale-105"
        />
      </td>
      <td className="border border-gray-300 px-4 py-2 text-center font-semibold">
        {item.userName}
      </td>
      <td className="border border-gray-300 px-4 py-2 text-center font-semibold">
        {item.serviceName}
      </td>

      <td className="border border-gray-300 px-4 py-2 text-gray-600 text-sm">
        {item.serviceDescription}
      </td>

      <td className="border border-gray-300 px-4 py-2 text-center">
        <div className="bg-blue-100 text-blue-600 font-semibold text-sm px-4 py-2 rounded-full inline-block">
          {item.serviceDate}
        </div>
      </td>

      <td className="border border-gray-300 px-4 py-2 text-center">
        {item.serviceStatus === "pending" ? (
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Pending
          </button>
        ) : item.serviceStatus === "working" ? (
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            Working
          </button>
        ) : (
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Completed
          </button>
        )}
      </td>

      <td className="border border-gray-300 px-4 py-2 text-center">
        <select
          value={item.newServiceStatus}
          onChange={(e) => handleStatusChange(e, item._id)}
          className="p-2 rounded-md border bg-purple-700 text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          <option value="pending">Pending</option>
          <option value="working">Working</option>
          <option value="completed">Completed</option>
        </select>
      </td>
    </tr>
  );
};

export default ShowServiceToDo;
