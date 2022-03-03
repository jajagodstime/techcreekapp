import { Link } from "react-router-dom";
import "../connectcard/card.scss"
import {FaFacebook, FaInstagramSquare, FaGithub, FaTwitter} from 'react-icons/fa'
const Cards = ({ student }) => {
    return (
      <div className="layout">
        <div className="student--section">
          <div className="header">
          <h6> {student.fullName} </h6>
            <Link to ='/'> <p>{student.email}</p> </Link>
           
            <p>{student.gender}</p>
            <p>{student.stateOfOrigin}</p>
            <p>{student.job}</p>
            <FaFacebook color="blue" fontSize="1.5em"/>
            <FaInstagramSquare color="hotpink" fontSize="1.5em"/>
            <FaGithub color="black" fontSize="1.5em"/>
            <FaTwitter color="lightblue" fontSize="1.5em"/>

          
          </div>
        </div>
      </div>
    );
  };
  
  export default Cards;
 