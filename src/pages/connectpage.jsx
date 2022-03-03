import Cards from "../Components/connectcard/card";
import students from "../student"
import "../pages/pages.scss"
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../Components/assests/logo-white.png";

import learn from '../assests/ic_learn.svg'
import create from '../assests/ic_create.svg'
import connect from '../assests/ic_connect.svg'
import '../members.scss'


const Connectpage = () => {
  return (
    
    <div>
      <div className="connectimg">
       

        <div className="overlay">
       
          <Link to = '/'><img src={logo} alt="" /></Link>
          <div className="connectlinks">
            <Link className="hback" to='/'> <FaArrowLeft /> Back</Link >
          </div>
          <div className="connecttext">
            <h1>Connect to the <span>creek</span> </h1>
            <p> Connect with the creek from all over the world with students and tutor and expand your tech world. <br /> We serve as a nursery providing the right Eco-System for Start-Ups  and individuals in Port Harcourt and it’s <br /> evirons, actively developing solutions to meet local needs.</p>
          </div>
  
          
          <div className='lccred'>
            <div className='learn'>
              <Link to='/learn'> <img src={learn} alt="" /></Link>
            </div>
            <div className='create'>
              <Link to='/create'><img src={create} alt="" /></Link>
            </div>
            <div className='connect'>
              <Link to='/connect'> <img src={connect} alt="" /></Link>
            </div>

          </div>
        </div>
      </div>
      <div className="Connect_main_container">
        {students.map((student, index) => {
          return <Cards student={student} key={index} />;
        })}

      </div>


    </div>

  );
};

export default Connectpage;
