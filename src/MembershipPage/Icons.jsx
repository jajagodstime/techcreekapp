import logo from "../assests/logo-blue.png"
import { Link } from "react-router-dom";
import '../MembershipPage/membership.scss'

const Icons = () => {
    return ( 
        
        <div className="icons__container">
            <div className="Back"><Link to = '/'>Back</Link></div>
         <Link className="logo__box" to='/'><img src={logo} alt="" /></Link>
        </div>
     );
}
 




export default Icons;




