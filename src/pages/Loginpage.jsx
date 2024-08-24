import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//firebase
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export const Loginpage = () => {

  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {

    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  };

  const handleSubmit = (event) => {

    event.preventDefault();
    signInWithEmailAndPassword(auth, inputs.email, inputs.password)
      .then(() => {
        navigate("/newblogs");
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  return (
    <>
      <div className='flex h-screen justify-center items-center'>
        <div className='text-center space-y-3'>
          <div className='space-y-8'>

            <h1 className='text-gray-600 text-5xl font-medium'>
              LOGIN
            </h1>
            <div>
              <form className='' onSubmit={handleSubmit}>
                <div className='p-3'>
                  <input
                    id='email'
                    value={inputs.email}
                    name='email'
                    onChange={handleChange}
                    type='email'
                    placeholder='Email'
                    className='border-pri bg-transparent p-2 w-96 border-2 hover:border-b-4 rounded-lg outline-none text-gray-800 transition duration-150'
                    required
                  />
                </div>
                
                <div className='p-3'>
                  <input
                    id='password'
                    value={inputs.password}
                    name='password'
                    onChange={handleChange}
                    type='password'
                    placeholder='Password'
                    className='border-pri bg-transparent p-2 w-96 border-2 hover:border-b-4 rounded-lg outline-none text-gray-800 transition duration-150'
                    required
                  />
                </div>

                <div className='p-3 text-right'>
                  <p className='text-pri text-sm font-medium'>
                    <a href='/register'>
                      New User?
                    </a>                    
                  </p>
                </div>

                <div className='p-3 justify-end'>
                  <button 
                    type='submit'
                    className=' bg-pri text-white w-full h-10 rounded-lg hover:bg-transparent hover:text-pri hover:border-2 hover:border-pri transition duration-200'>
                    Login
                  </button>
                </div>
              </form>
            </div>

          </div>         
          
        </div>
      </div>
    </>

  )
};