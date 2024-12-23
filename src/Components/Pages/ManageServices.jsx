import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import ManageDataShow from '../SinglePage/ManageDataShow';

const ManageServices = () => {
    const {user} = useContext(AuthContext);
    const allServiceData = useLoaderData([]);
    const filterData = allServiceData.filter(item=> item?.userMail === user?.email)
    console.log(filterData);
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 m-10'>
            {
                filterData.map(item=> <ManageDataShow key={item._id} item={item}></ManageDataShow>)
            }
        </div>
    );
};

export default ManageServices;