import React from 'react'
import logo from '../assests/logo-white.png'
const navItems = [
    { title: "Home", path: "/" },
    { title: "Learn", path: "/learn" },
    { title: "Create", path: "create" },
    { title: "Connect", path: "/connect" },
  ];

const navbar = () => {
  return (
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
          <div className="Navbar_Menku"> </div>
            <div onClick={handleToggle} className="text">
              
               <span></span>
              
              
            </div>
            <div className="bell">
              <img classname="img" src={Alert} alt="" />
            </div>
           
          

        </nav>
    
  )
}

export default navbar;