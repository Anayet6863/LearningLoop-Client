import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthProvider/AuthProvider";
import BookedDataShow from "../SinglePage/BookedDataShow";
import ShowServiceToDo from "../SinglePage/ShowServiceToDo";

const serviceToDo = () => {
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/bookedService").then((res) => {
      setFilterData(res.data);
    });
  }, []);
  const { user } = useContext(AuthContext);
  console.log(filterData);
  const bookedData = filterData.filter((item) => item?.currentUserMail === user?.email);
  console.log(bookedData);

  return (
    <>
      <div className="mt-10">
        <h1 className="text-3xl text-red-500 text-center">
          Your Booking List:
        </h1>
      </div>
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 items-center md:p-10">
        {bookedData.map((item) => (
          <ShowServiceToDo key={item._id} item={item}></ShowServiceToDo>
        ))}
      </div>
    </>
  );
};

export default serviceToDo;
