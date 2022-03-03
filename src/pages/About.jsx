import React from 'react'
import '../pages/pages.scss'
import { Link } from 'react-router-dom';
import logo from "../assests/logo-blue.png"
import image1 from "../assests/img7.jpeg";
import image2 from "../assests/img2.jpeg";
import image3 from "../assests/img4.jpeg";
import image4 from "../assests/img5.jpeg";
import image5 from "../assests/img6.jpeg";
import learn from '../assests/ic_learn.svg';
import create from '../assests/ic_create.svg';
import connect from '../assests/ic_connect.svg';
import {FaArrowLeft} from 'react-icons/fa'

import Footer from '../Components/footer/footer';

const About = () => {
  return (
    <div>
      <Link to='/'> <img className='logo11' src={logo} alt="" /></Link>
      <div className="container">
        <div className="bscks"><Link to = '/'><span><FaArrowLeft/>Back</span></Link></div>
        <div className="AboutusGrid_Cont">

          <div className="Aboutuspic">
            <img className="postion1" src={image1} alt="" />
            <img className="postion2" src={image2} alt="" />
            <img className="postion3" src={image3} alt="" />
            <img className="postion4" src={image4} alt="" />
            <img className="postion5" src={image5} alt="" />
          </div>
          <div className="About-uscontent">
            <div className="About_Creek_content">
              <h2>About the {"<Creek />"}</h2>
              <p>
                Tech Creek is a habitat for the teeming population of youths
                making sense out of their lives with their digital skills and
                competencies, and actively involved in the development of the
                ‘new economy’ from Rivers State. <br /> <br />

                Our culture is at the heart of
                everything we do. It reinforces our core values which create the
                perfect picture of our existence as the melting pot for the
                development of tech capacities and opportunities in the region.
                “Tech Creek is the pilot for a new set of creeks that would
                house creativity in design and system development in the Niger
                Delta.”
              </p>
            </div>
          </div>
          
            
             <div className="lcca">
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
      <Footer />
    </div>
  );
};

export default About;
