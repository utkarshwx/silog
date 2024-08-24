import React from 'react';
import { useState } from 'react';

export const Otppage = () => {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    };

    const handleSubmit = (event) => {

        event.preventDefault();
        console.log(inputs);
    };
    return (
        <>
        <div className='flex h-screen justify-center items-center'>
            <div className='text-center space-y-3'>
            <div className='space-y-8'>

                <h1 className='text-gray-600 text-5xl font-medium'>
                OTP
                </h1>
                
                <div>
                <form className='' onSubmit={handleSubmit}>
                    <div className='p-3'>
                    <input
                        id='otp'
                        value={inputs.otp}
                        name='otp'
                        onChange={handleChange}
                        type='password'
                        placeholder='OTP'
                        className='border-pri bg-transparent p-2 w-96 border-2 hover:border-b-4 rounded-lg outline-none text-gray-800 transition duration-150'
                        required
                    />
                    </div>

                    <p className='text-gray-500 text-sm'>
                        Check email for OTP
                    </p>
                    
                    <div className='p-3 justify-end'>
                        <button 
                        type='submit' 
                        className='bg-pri text-qua w-full h-10 rounded-lg hover:bg-transparent hover:text-pri hover:border-2 hover:border-pri transition duration-200'>
                            Check
                        </button>
                    </div>
                </form>
                </div>

            </div>            
            
            </div>
        </div>
        </>
    )
}
