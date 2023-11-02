import React from 'react'
import market from '../assets/img/marketshop.png';
import portfolio from '../assets/img/portfolio.png';
import jsshop from '../assets/img/jsshop.png';
import marketingdigital from '../assets/img/marketindigital.jpg';
import cm from '../assets/img/cm.jpg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export const Works = () => {
  return (
    <div className='p-8 xl:p-10 bg-gray-100'>
        <div className='mb-8'>
            <h1 className='text-[30px] font-black'>ALGUNAS WEBS CREADAS POR NOSOTROS:</h1>
        </div>
        {/* WORKS */}
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
            <div className='flex flex-col gap-2'>
              <img src={market} className='w-full h-[500px] object-cover rounded-3xl'/>
              <h3 className='text-1xl font-bold'>3D MARKETSHOP</h3>
              <span className='text-gray-500'>Un sitio web creado para la venta de productos creados con impresion 3D.
            </span>
            </div> 

               <div className='grid gid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='flex flex-col gap-1'>
                   <img src={portfolio} className='w-full object-cover  rounded-3xl'/>
                   <p className='text-gray-500'>Diseño web</p>
                   <h3 className='text-[17px] font-bold'>Portfolio Personal con Galeria Multimedia</h3>
                 </div>

                 <div className='flex flex-col gap-1'>
                   <img src={marketingdigital} className='w-full object-cover rounded-3xl'/>
                   <p className='text-gray-500'>Diseño web</p>
                   <h3 className='text-[17px]  font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing </h3>
                 </div>

                 <div className='flex flex-col gap-1'>
                   <img src={jsshop} className='w-full object-cover rounded-3xl'/>
                   <p className='text-gray-500'>Diseño web</p>
                   <h3 className='text-[17px]  font-bold'>Sitio web creado unicamente con vanilla JS</h3>
                 </div>

                 <div className='flex flex-col gap-1'>
                   <img src={cm} className='w-full  object-cover rounded-3xl'/>
                   <p className='text-gray-500'>Diseño web</p>
                   <h3 className='text-[17px]  font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing</h3>
                 </div>
               </div>
        </div>
    </div>
  )
}

export default Works;