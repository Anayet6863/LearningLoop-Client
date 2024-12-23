import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowPopuler from '../SinglePage/ShowPopuler';
const Popular = () => {
    const [allData,setAllData]= useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/populer')
        .then(res=>setAllData(res.data))
    },[])
    //console.log(allData);
    return (
        <div >
        <h1 className='text-3xl text-red-500 font-bold text-center'>Populer</h1>
        <div className='grid md:grid-cols-2 gap-5 m-10'>
            
           {
            allData.map(item=><ShowPopuler key={item._id} item={item}></ShowPopuler>)
           }
        </div>
        </div>
    );
};

export default Popular;