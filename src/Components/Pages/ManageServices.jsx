import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import ManageDataShow from '../SinglePage/ManageDataShow';
import Swal from 'sweetalert2';

const ManageServices = () => {
    const {user} = useContext(AuthContext);
    const allServiceData = useLoaderData([]);
    const filterData = allServiceData.filter(item=> item?.userMail === user?.email)
    const {loading} = useContext(AuthContext)
    useEffect(() => {
        document.title = "LearningLoop | Manage Service";
      }, []);
    //console.log(filterData);
    //console.log(filterData.length);
    {filterData.length <= 0 && loading &&
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You don't have any service which you added!",
          // footer: `<button onClick={handleClick}  className='btn'>Why do I have this issue?</button>`,
        })}
    return (
        <div className='p-5'>
            <h1 className='text-3xl text-red-500 text-center mt-10'>Service added by You.Has {filterData.length} items</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 m-10'>
            {
                filterData.map(item=> <ManageDataShow key={item._id} item={item}></ManageDataShow>)
            }
        </div>
        </div>
        
    );
};

export default ManageServices;