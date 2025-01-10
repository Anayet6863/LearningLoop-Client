import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowPopuler from '../SinglePage/ShowPopuler';
const Popular = () => {
    const [allData,setAllData]= useState([])
    useEffect(()=>{
        axios.get('https://learning-loop-server.vercel.app/populer')
        .then(res=>setAllData(res.data))
    },[])
    //console.log(allData);
    return (
        <div className='p-10'>
        <h1 className='text-5xl  text-black font-bold text-center'>Populer services</h1>
        <p className='text-md  text-gray-400 font-bold text-center mt-2'>Popular Services That Are Worth Trying</p>
        <div className='grid md:grid-cols-3 gap-10 m-10  container mx-auto'>
            
           {
            allData.map(item=><ShowPopuler key={item._id} item={item}></ShowPopuler>)
           }
        </div>
        </div>
    );
};

export default Popular;