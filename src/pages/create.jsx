import React from 'react'


import "../pages/pages.scss"
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../assests/logo-white.png";

import learn from '../assests/ic_learn.svg'
import creates from '../assests/ic_create.svg'
import connect from '../assests/ic_connect.svg'


const Createpage = () => {
    return (
        <div className='cdgs'>
            <div className='main_create'>

                <div className='img_create'>
                    <div className="ovly"><Link to = '/'> <img src={logo} alt="" /></Link>
                        <div className="yellow_ovly"></div>
                        <div className="yellow_ovly">
                            {/* green  */}
                        </div>
                        <h2>Create <span>with us</span></h2>
                       <h5>Build innovative solutions</h5>
                    </div>

                </div>
                <div className='text'>
                    <p>We serve as a nursery providing the right Eco-System for Start-Ups and #individuals in Port Harcourt and it’s evirons, actively developing solutions to meet local needs</p>

                </div>
            </div>
            <div className='downer' >
                <h3><span>Build</span> your idea,join the creek </h3>
                <p>The creek has various tech programs and social inventions that enables you achieve your tech dream .So if you have one join the creek</p>

              <div className="junior">
              <img className='juniorimg' src="https://techcreek-site.vercel.app/static/media/junior.eebd17c7e259c00728cf.png" alt="" />
              <p className='juniortxt'>the CODEGAMINATORS programme was initiated to skill-up our youth in the fundamentals of the ICT contentes industry. the content industry (in software, game, animations , movies, music, education, health etc) accounts for $30bn worldwild</p>

              <div className='senoir'>
                  <img src="https://techcreek-site.vercel.app/static/media/cg_main.ed39ffbea01ea9efbc6f.png" alt="" />
                  <p className='senoirtxt'>
                  As part of our mandate to ensure the right capacities are developed in the Information and Communication Technology sector of the Economy, we have this programme designed to build capacities in software and digital content development. Our focus with this programme is Software Development, Animations/Post production and Game Development. At the RivTechCreek we envision to create the foremost hub of creative minds in content development in sub-sahara Africa
                  </p>
              </div>
                
              </div>
            </div>
           <Link to= '/'> <em><FaArrowLeft/>Back</em></Link>
             <div className="lcca">
             <div className='learn'>
                <Link to='/learn'> <img src={learn} alt="" /></Link>
              </div>
              <div className='create'>
                <Link to='/create'><img src={creates} alt="" /></Link>
              </div>
              <div className='connect'>
                <Link to='/connect'> <img src={connect} alt="" /></Link>
          </div>
          </div>
           
        </div>
    )
}

export default Createpage