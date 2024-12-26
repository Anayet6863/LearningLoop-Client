import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthProvider/AuthProvider";
import BookedDataShow from "../SinglePage/BookedDataShow";
import ShowServiceToDo from "../SinglePage/ShowServiceToDo";
import Swal from "sweetalert2";
import { Link, NavLink, useNavigate } from "react-router-dom";

const serviceToDo = () => {
  const [filterData, setFilterData] = useState([]);
  const { loading } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get("http://localhost:5000/bookedService", { withCredentials: true })
      .then((res) => {
        setFilterData(res.data);
      });
  }, []);
  const { user } = useContext(AuthContext);
  // console.log(filterData);
  const bookedData = filterData.filter(
    (item) => item?.userMail === user?.email
  );
  // console.log(bookedData);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/addService");
  };
 
  
  return (
    <>
      <div className="mt-10 p-10">
        <h1 className="text-3xl font-bold text-red-500 text-center">
          Your Booking List : Has {bookedData.length} items.
        </h1>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 rounded-lg">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Image</th>
              <th className="border border-gray-300 px-4 py-2">
                Provider Name
              </th>
              <th className="border border-gray-300 px-4 py-2">Service Name</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
              <th className="border border-gray-300 px-4 py-2">Booked Date</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">
                Change Status
              </th>
            </tr>
          </thead>

          <tbody>
            {bookedData.map((item) => (
              <ShowServiceToDo key={item._id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default serviceToDo;
