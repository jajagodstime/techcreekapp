import React from 'react'
 import { useState } from 'react';
import { Link } from 'react-router-dom';


import SignIn from './SignIn';
import Register from './Register';
import Footer from "./Footer";
import Forms from "./Forms";
import Icons from "./Icons";


const Membership = () => {
  const  [form, setform] = useState(true)
  
  


    
    return ( 
        
        <div className="main__container">
        <div className="main__box">
            <div className="main__content">
            <Icons/>

      <h5 className="signin" onClick={()=>{setform(true)}}>Sign in </h5>
      <h5 className="register" onClick={()=>{setform(false)}}>Register </h5>
      {form?  <SignIn />:<Register />}      
        
      
         

            </div>
            <Footer/>
        </div> 
        </div>

             

       
     );
}
 
export default Membership;