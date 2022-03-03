import React from 'react'
import { Link } from 'react-router-dom';
import learn from '../assests/ic_learn.svg';
import create from '../assests/ic_create.svg';
import connect from '../assests/ic_connect.svg';
import './navigation.scss';

const Navigation = () => {
  return (
    <div>
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

export default Navigation;