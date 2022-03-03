import { Link } from "react-router-dom";
import "./learncard.scss"
const Cards = ({ courses }) => {
    return (
      <div className="layout">
        <div className="student--section">
          <div className="header">
          <h6> {courses.coursestittle} </h6>
          <p> {courses.Description} </p>
          
           
            
          </div>
        </div>
      </div>
    );
  };
  
  export default Cards;
 