import Card from "react-bootstrap/Card";
import blogo from '../assests/logo-blue.png'
import connect from '../assests/ic_connect.svg'
import learn from '../assests/ic_learn.svg'
import create from '../assests/ic_create.svg'
import pics from '../assests/bg-connect.png'
import pics2 from '../assests/bg-learn2.png'
import pics3 from '../assests/rest.jpg'
import { Link } from "react-router-dom";
import {FaArrowRight} from 'react-icons/fa'
import {FiArrowLeft} from 'react-icons/fi'
import './Datafetch.scss'

const Datafetch = ({ blogs, loading }) => {
  if (loading) return <h>Loading...</h>;

  return (
    <div className="DataContainer">
      <Link to = '/'><span className="span"><FiArrowLeft/>Back home</span></Link>

<div className="lccicons">
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

       
      
      <Link to='/'> <img className="blogo" src={blogo} alt="" /></Link>
      <div className="Blogcontain">
       <div className="learn_header">
          <h1>Learn the Creek Way</h1>
        <p>
          Education  doesn’t have to be expensive there are plenty of free
          courses to brush up on your IT skills that require nothing more than
          an internet connection and a laptop or smartphone.Whether you’re
          interested in changing the direction of your career, just starting
          out, trying to beef up your resume or just looking to stay on top of
          technology trends, any of these  online Course materials can
          help you without breaking the bank.
        </p>
       </div>
        <h2> Courses</h2>
        <div className="free_courses">

          <div className="blogs">
            <img src={pics} alt="logo" />
            <h3>Coding</h3>
            <p>Computer programming is the process of performing a particular computation, usually by designing/building an executable computer program. Programming involves tasks such as analysis, generating algorithms, </p>

            <button>view </button>
          </div>
          <div className="blogs">
            <img src={pics2} alt="logo" />
            <h3>Database Management</h3>
            <p>
              Database management refers to the actions a business takes to manipulate and control data to meet necessary conditions throughout the entire data lifecycle Lorem ipsum dolor sit amet consectetur adipisicing. </p>
       
              <button>View</button>
          </div>
          <div className="blogs">
            <img src={pics3} alt="logo" />
            <h3>Cyber Security</h3>
            <p>Cyber security is the application of technologies, processes and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and protect against the .</p>
           <button>view</button>
            <Link to = 'kill'><span>More items <FaArrowRight/> </span></Link>
          </div>


        </div>

      </div>
      <div className="Blogcontainer">
        <h1>Tutorial Videos</h1>

        {blogs &&
          blogs.map((blog) => {
            return (
              <div className="Card--Container" key={blog.id}>
                <div className="card__container" key={blog.id}>
                  <div className="card__img">
                    <img
                      src={`http://image.tmdb.org/t/p/w200${blog.poster_path}`}
                      alt=""
                    />
                  </div>
                  <div className="Card_content">
                    <div className="card__body">
                      <p className="Title">Coursetitle: {blog.title}</p>
                      <p className="description"> Description</p>
                      <p>{blog.overview}</p>
                    </div>
                    <div className="btn__container">
                      <p>
                        <span>Rating:</span>
                        {blog.vote_average}
                      </p>
                      <p className="date">
                        <span>Date:</span> {blog.release_date}
                      </p>
                    </div>
                    <button> View</button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Datafetch;
