import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//firebase
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export const Registerpage = () => {

  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => { 

    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));

  };

  const handleSubmit = async(event) => {

    event.preventDefault();
    

    if (inputs.password.length < 8) {
      alert('Password must be at least 8 characters');
    }

    else {
      if (inputs.password !== inputs.confirmpassword) {
        alert('Passwords do not match');
      }
      
      else {
        console.log(inputs);

        await createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
          .then((useCredential) => {
            const user = useCredential.user;
            console.log(user);
            navigate("/")
          })
          .catch((error) => {
            console.log(error.code, error.message);
          });
      }
    }
    
  };

  return (
    <>
      <div className='flex h-screen justify-center items-center'>
        <div className='text-center space-y-3'>
          <div className='space-y-8'>

            <h1 className='text-gray-600 text-5xl font-medium'>
              REGISTER
            </h1>
            <div>
              <form className='' onSubmit={handleSubmit}>
                <div className='p-3'>
                  <input
                    id='email'
                    name='email'
                    value={inputs.email}
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
                    name='password'
                    value={inputs.password}
                    onChange={handleChange}
                    type='password'
                    placeholder='Password'
                    className='border-pri bg-transparent p-2 w-96 border-2 hover:border-b-4 rounded-lg outline-none text-gray-800 transition duration-150'
                    required
                  />
                </div>

                <div className='p-3'>
                  <input
                    id='confirmpassword'
                    name='confirmpassword'
                    value={inputs.confirmpassword}
                    onChange={handleChange}
                    type='password'
                    placeholder='Confirm Password'
                    className='border-pri bg-transparent p-2 w-96 border-2 hover:border-b-4 rounded-lg outline-none text-gray-800 transition duration-150'
                    required
                  />
                </div>

                <div className='p-3 text-right'>
                  <p className='text-pri text-sm font-medium'>
                    <a href='/'>
                      Already a member?
                    </a>
                  </p>
                </div>

                <div className='p-3 justify-end'>
                  <button type='submit' className=' bg-pri text-qua w-full h-10 rounded-lg hover:bg-transparent hover:text-pri hover:border-2 hover:border-pri transition duration-200'>
                    Register
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