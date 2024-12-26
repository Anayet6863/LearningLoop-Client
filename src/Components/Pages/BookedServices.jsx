import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthProvider/AuthProvider";
import BookedDataShow from "../SinglePage/BookedDataShow";
import Swal from "sweetalert2";

const BookedServices = () => {
  const {loading}=useContext(AuthContext)
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/bookedService",{withCredentials:true}).then((res) => {
      setFilterData(res.data);
    });
  }, []);
  const { user } = useContext(AuthContext);
  console.log(filterData);
  const bookedData = filterData.filter((item) => item?.currentUserMail === user?.email);
  console.log(bookedData);
  useEffect(() => {
    if (bookedData.length === 0 && loading) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You don't have any service which you added!",
        // footer: `<button onClick={handleClick}  className='btn'>Why do I have this issue?</button>`,
      });
    }
  }, []);
  

  return (
    <>
      <div className="mt-10"> 
        <h1 className="text-3xl text-red-500 font-bold text-center p-10">
          Your Booking List: Has {bookedData.length} services.
        </h1>
      </div>
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 items-center md:p-10  container mx-auto">
        {bookedData.map((item) => (
          <BookedDataShow key={item._id} item={item}></BookedDataShow>
        ))}
      </div>
    </>
  );
};

export default BookedServices;
