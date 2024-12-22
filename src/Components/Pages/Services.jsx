import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Services = () => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:5000/allServices")
        .then((response) => {
          console.log(response.data); 
          setAllData(response.data); 
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []); 

    return (
        <div>
            From services
        </div>
    );
};

export default Services;