import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
const ManageDataShow = ({item}) => {
    const {serviceImage,serviceName,serviceDate,serviceDescription,servicePrice} = item;
   // console.log(item);
   const navigate= useNavigate();
    const handleDeleteBtn=(id)=>{
     // console.log(id);
      
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:5000/deleteBookedService/${id}`)
          .then(res=>{
            if(res.data.deletedCount>0){
              Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
            }
          })
          
        }
      });
    }
    const handleEditBtn=(id)=>{
     navigate(`/serviceUpdate/${id}`)
    }
    return (
        <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden p-4 hover:shadow-xl transition-shadow duration-300">
        <img
          src={serviceImage}
          alt="Service Image"
          className="w-full h-48 object-cover rounded-md hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-700 mb-2">{serviceName}</h3>
          <p className="text-gray-600 text-sm mb-4">{serviceDescription}</p>
          <div className="flex space-x-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors 
            duration-300" onClick={()=>handleEditBtn(item._id)}>
              Edit
            </button>
            <button
              className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition-colors duration-300"
              onClick={() => handleDeleteBtn(item._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      
    );
};

export default ManageDataShow;