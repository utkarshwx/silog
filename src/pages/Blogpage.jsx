import React from 'react';

//Components
import { Header } from './components/header.jsx';
import { Footer } from './components/Footer.jsx';

//Icons
import { IoMdShare } from 'react-icons/io';
import { PiHeadphonesBold } from 'react-icons/pi';

import data from '../work.json';

export const Blogpage = () => {

  const handleShare = () => {
    alert("Sharing...");
  }



  return (
    <div>
        <div className='flex flex-col h-screen'>
            <Header/>
            <div className='flex-grow m-5 px-5 md:px-10 md:pr-52'>

                <h1 className='text-3xl text-gray-700'>{data.Title}</h1>
                <p className='text-gray-600 text-sm mb-6'>{data.Author} | {data.Date}</p>
                <p className='text-gray-700 text-justify'>{data.Description}</p>
                
            </div>

            <button
            onClick={handleShare} 
            className='bg-pri py-3 px-3 fixed items-end top-36 right-12 text-white rounded-2xl border-2 hover:bg-transparent hover:text-pri hover:border-pri transition duration-300'>
              <IoMdShare className='text-3xl'/>
            </button>

            <button className='bg-pri  py-3 px-3 fixed items-end top-52 right-12 text-white rounded-2xl border-2 hover:bg-transparent hover:text-pri hover:border-pri transition duration-300'>
              <PiHeadphonesBold className='text-3xl'/>
            </button>

            <Footer/>
        </div>

    </div>
  )
}

