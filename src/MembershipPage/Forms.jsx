import {Link} from "react-router-dom"
import { useState } from "react";

const Forms = () => {
    const memberItems = [
        { title: "Sign in", path: "/membership" },
        { title: "Register", path: "/Register" },
            
    ]


    return ( 


        
        <div className="creek__from">
            <ul className="form__header">
                {memberItems.map((memberItem, index) => {

                    return (
                    <li className="sign_in_form">
                    <Link to={memberItem.path}>{memberItem.title}</Link>
                    </li>

                    )
                })}
                

               
            </ul>
            <div className="form__control">
                    <input className="input" type="text" placeholder="Email" />
                </div>

                <div className="form__control">
                    <input className="input" type="text" placeholder="Password" />
                </div>

            <div className="control_penal">
                <label>
                    <input type="checkbox" name="Check 1"/> Remember me
                </label>
                <a href="#">Forgot Password?</a>
            </div>

            <div className="btn1">
                <button>Log in</button>
            </div>
            
        </div>
     );
}
 
export default Forms;