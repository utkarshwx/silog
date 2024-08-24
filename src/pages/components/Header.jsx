import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Icons
import { IoIosAddCircle } from 'react-icons/io';
import { IoLogOutOutline } from "react-icons/io5";

//firebase
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export const Header = () => {

  const [ userlog, setUserlog ] = useState(false);

  const navigate = useNavigate();

  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      setUserlog(true);

    } else {
      navigate("/");
    }
  });

  const newblog = () => {
    alert("draging to new blogs form");
    navigate("/newblogs");    
  }

  const logoutUser = async () => {
    try {
      await signOut(auth);
      setUserlog(false);
      console.log("User signed out successfully!");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      <header className='flex text-left text-pri p-4 font-medium'>
        
        <h1 className='text-3xl'>SILOG</h1>
        <div className='flex-grow text-right'>

        <button 
        onClick={newblog}
        className='bg-pri text-white py-2 px-3 mx-1 rounded-lg hover:text-pri border-2 hover:border-pri hover:bg-transparent transition duration-200'>
          <IoIosAddCircle className='text-xl inline mr-1 mb-1'/>
          New Blog 
        </button>
        {
          userlog ? 
          
          <button
          onClick={logoutUser} 
          className='bg-pri text-white py-2 px-3 mx-1 rounded-lg hover:text-pri border-2 hover:border-pri hover:bg-transparent transition duration-200'>
            <IoLogOutOutline className='text-xl inline mr-1 mb-1'/>
            Logout
          </button>

          :

          <button 
          onClick={() => navigate("/login")}
          className='bg-pri text-white py-2 px-3 mx-1 rounded-lg hover:text-pri border-2 hover:border-pri hover:bg-transparent transition duration-200'>
            <IoLogOutOutline className='text-xl inline mr-1 mb-1'/>
            Login
          </button>

        }
        
        </div>
      </header>
    </div>
  )
};
