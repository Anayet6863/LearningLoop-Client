import React, { useEffect, useState } from "react";
import axios, { all } from "axios";
import SingleServiceShow from "../SinglePage/SingleServiceShow";
const Services = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allServices")
      .then((response) => {
       // console.log(response.data);
        setAllData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="bg-gray-500">
        {
            allData.map((item)=><SingleServiceShow key={item._id} item={item}></SingleServiceShow>)
        }
    </div>
  );
};

export default Services;
