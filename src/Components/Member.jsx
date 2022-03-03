import React from 'react'
import member from '../assests/ic_member.svg'


import '../members.scss'

import { Link } from 'react-router-dom'
import learn from '../assests/ic_learn.svg'
import create from '../assests/ic_create.svg'
import connect from '../assests/ic_connect.svg'




const Member = () => {
  

  return (
 <div className='img_bg'>
   <div className='members'>
         <Link to ='/membership' > <img src={member} alt="" /></Link>
         
    </div>
<div className='lcc'>
  <div  className='learn'>
   <Link to = '/learn'> <img src={learn} alt="" /></Link>
  </div>
  <div className='create'>
  <Link to = '/create'><img src={create} alt="" /></Link>
  </div>
  <div className='connect'>
 <Link to = '/connect'> <img src={connect} alt="" /></Link>
  </div>
 
</div>
   </div>

  )
}

export default Member