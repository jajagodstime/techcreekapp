import React from 'react'
import {Link} from 'react-router-dom'

const Body = () => {
  return (
      <div  className='bodytext'>
      {/* <h1>A <br /> habitat <br /> for   Creativity</h1> */}
      <h1>Welcome to the &#60;Creek/&#62;</h1>
        <p>TechCreek is a habitat for the teeming population of youths making sense of their lives with their digital skills and competencies, and actively involved in the development of the ‘new economy’ from Rivers State</p>

        <div className='aboutbtn'>
        <Link to ='/about'>  <button>About us</button></Link>
        </div>
      </div>
  )
}

export default Body