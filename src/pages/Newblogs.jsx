import React from 'react';

import { useState } from 'react';

//Components
import { Header } from './components/header.jsx';
import { Footer } from './components/Footer.jsx';

export const Newblogs = () => {

    const [inputs, setInputs ] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }
    

  return (
    <> 
        <div className='flex flex-col h-screen'>
            <Header/>
                <div className='flex-grow md:px-10 bg-ter md:m-8 rounded-lg pb-5'>
                    <h1 className='md:text-3xl text-xl text-gray-700 m-5 underline my-5 md:my-12'>Create new blog</h1>
                    <form className='' onSubmit={handleSubmit}>
                        <div className='m-5 space-x-8 '>
                            <input className='w-full border-pri bg-qua p-2 border-2 hover:border-b-4 rounded-lg outline-none text-gray-900 transition duration-150'
                            type="text" id="title" 
                            name="title" 
                            value={inputs.title}
                            onChange={handleChange}
                            placeholder='Title of the Article'/>
                        </div>
                        <div className='m-5 space-x-8'>
                            <input className='w-full border-pri bg-qua p-2 border-2 hover:border-b-4 rounded-lg outline-none text-gray-900 transition duration-150'
                            type="author" id="author" 
                            name="author" 
                            value={inputs.author}
                            onChange={handleChange}
                            placeholder='Author of the Article'/>
                        </div>
                        <div className='m-5 space-x-8'>
                            <textarea className='w-full h-96 border-pri bg-qua p-2 border-2 hover:border-b-4 rounded-lg outline-none text-gray-900 transition duration-150'
                            type="description" id="description" 
                            name="description" 
                            value={inputs.description}
                            onChange={handleChange}
                            placeholder='The Article'/>
                        </div>
                        <button 
                        type='submit'
                        className='bg-pri text-white py-2 px-3 rounded-lg mx-5 hover:text-pri border-2 border-ter hover:border-pri hover:bg-transparent transition duration-200'>
                        {/* <IoIosAddCircle className='text-xl inline mr-1 mb-1'/> */}
                        New Blog 
                        </button>
                        <button 
                        type='reset'
                        className='bg-pri text-white py-2 px-3 rounded-lg hover:text-pri border-2 border-ter hover:border-pri hover:bg-transparent transition duration-200'>
                        {/* <IoIosAddCircle className='text-xl inline mr-1 mb-1'/> */}
                        Cancel
                        </button>
                    </form>
                </div>
            <Footer/>
        </div>
        
    </>
  )
}

