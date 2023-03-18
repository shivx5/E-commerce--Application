import { useEffect, useState } from "react"
import Header from "./Header"
import Footer from "./Footer";
import {  useNavigate } from "react-router-dom";
import Loginpage from './Loginpage.css'
import Home from "./Home";
import axios from "axios";
import {FcNext} from 'react-icons/fc';

let Results=[{user:"",name:"",value:0}];

export function LoginPage(props){
    const Navigate=useNavigate();
    const[Component,SetComponent]=useState(false);
    const[UserPassword,SetUserPassword]=useState({user:"",pass:"",value:0});
    const[CurrentUrl,SetCurrentUrl]=useState("http://localhost:8006/getAllUP");
    const[send,SetSend]=useState(false);
   
    

 function enterUserPass(event)
    {
        const{name,value}=event.target;
        SetUserPassword(preval=>
            {
               return{
                ...preval,
                [name]:value
               }
               })

    }
    

    function checkexecute(){
        if(UserPassword.user=="")
        {
            alert("UserName 😊");
        }
        else if(UserPassword.pass=="")
        {

            alert("Password 🥲");
        }
        else{
            // axios.post(CurrentUrl,UserPassword);
        //  console.log(UserPassword);
        SetComponent(!Component);
        props.execut(Component);
        // SetSend(!send);
        Navigate("/Home");
        
        }


       
      
    
    }
   
    return(
        <div className="total-login">
            <div className="user-content">
            <span className="heading">LOGIN</span>
            <input type="text" className="inputs1" placeholder="UserName" onChange={enterUserPass} name='user' value={UserPassword.name}></input>
            <input type="password" className="inputs2" placeholder="Password" onChange={enterUserPass} name='pass' value={UserPassword.pass}></input>
            </div>
            <button onClick={checkexecute} className="login-button"><FcNext/></button>
           
          
            
        </div>
    )
}

 export default Results;