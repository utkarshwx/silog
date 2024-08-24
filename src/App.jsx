import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";

import { useState } from 'react';

import './App.css';

//pages
import { Loginpage } from './pages/Loginpage.jsx';
import { Registerpage } from './pages/Registerpage.jsx';
import { Blogpage } from './pages/Blogpage.jsx';
import { Otppage } from "./pages/Otppage.jsx";
import { Newblogs } from "./pages/newblogs.jsx";

//firebase
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function App() {

  const [ userlog, setUserlog ] = useState(false);
  const navigate = useNavigate();

  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setUserlog(true);

    } else {
      // User is signed out
      // ...
      //navigate("/");
      setUserlog(false);
    }
  });
  
  return (


    <>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/otp" element={<Otppage />} />
        <Route path="/blogs" element={<Blogpage />} />
        {
          !userlog ? 
          null
          :
          <Route path="/newblogs" element={<Newblogs />} />

        }
      </Routes>
      
      
    </>
  )
}

export default App
