import React from 'react'


import { useState } from "react";
import Alert from '../assests/ic_notification.svg'
import "bootstrap/dist/css/bootstrap.min.css";

import logo from '../assests/logo-white.png'
import { Link } from 'react-router-dom'
import Modalpage from './Modalpage/modalpage';
const navItems = [
  { title: "Home", path: "/" },
  { title: "Learn", path: "/learn" },
  { title: "Create", path: "create" },
  { title: "Connect", path: "/connect" },
];
const Header = () => {
  const [show, setShow] = useState(false);
  
  const handleModal = () => {
    setShow(!show);
  };
  //  to toggle alert
  const [name, setName] = useState(false);
  const handleToggle = () => setName(!name);



  return (
  
    <div  >
      < nav >  
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div>
          <ul className="nav__links">
            {navItems.map((navItem, index) => {
              return (
                <li className="nav__item" key={index}>
                  <Link to={navItem.path}>{navItem.title}</Link>
                </li>
              );
            })}

            <div className="btndiv"><button onClick={handleModal}>Ongoing Application</button></div>
            

           </ul>

        </div>
        <div className="Navbar_Menku">
          <div onClick={handleToggle} className="text">
            
             <span></span>
            
            {name && (
              <div className="text-float" onClick={handleModal}>
                
              </div>
            )}
          </div>
          <div className="bell">
            <img classname="img" src={Alert} alt="" />
          </div>
          {/* <div className="Menu-bar">
            <img src={Menu} alt="Menu-Bar" />
          </div> */}
        </div>
        <Modalpage handleModal={handleModal} show={show} />
      </nav>
    </div>
  )
}

export default Header

