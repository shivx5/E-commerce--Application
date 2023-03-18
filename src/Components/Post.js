import { Link } from "react-router-dom";
import axios from "axios";
import post from './post.css';
import Header from "./Header";
import {MdOutlineDeleteSweep} from 'react-icons/md'
import { useEffect, useState } from "react";
import { DeleteList } from "./DeleteList";
import Footer from "./Footer";
import {TiArrowLeftThick} from 'react-icons/ti'
import {AiOutlineCaretDown} from 'react-icons/ai'

function Post(props)
{
  let restultDetails;
  const[check,SetCheck]=useState(false);
  const[usename,setUsename]=useState("");
  const[allvalue,setAllvalue]=useState([]);
  const[CurrentUrl,SetCurrentUrl]=useState("http://localhost:8006/getAllDetails");
  const[accept,SetAccept]=useState(false);
  const[del,SetDel]=useState(false);

function getval(){
  axios.get(CurrentUrl).then(res=>
    {
      setAllvalue(res.data)
      
    })
  }

  useEffect(()=>
  {
   getval();
  },[accept])
  
  restultDetails=allvalue.find(items=>
    {
      
       return items.name===usename
     
    })||""

    // {name:"enter correct name ",landmark:" ",mobilenumber:"+91",address:" ",itemid:" ",items:" ",location:" "} 

 function deletefunction(name)
 {
// event.preventDefault()
  console.log(name);
  // console.log(accept);
    accept&& axios.delete(`${CurrentUrl}/${name}`).then(getval());

    
 }
 function showinputresult(){


  setUsename(document.getElementById('inputname').value);//saku


 }
 
     function accepting()
     {
      //  SetAccept(true);
      const answer=prompt("Your name");
      console.log(answer);
       if(answer=="siva")
       {
        SetAccept(true);
       }
      
      
     }

    return(
        <div className="orders">
         
 <Link to={`/Products`}><TiArrowLeftThick className='back-icon'/></Link>
        <div className="user-div">
             <button className="order-button"   onClick={accepting}>Show orders</button>  
             <span>Order Details : <input type="text" id='inputname' placeholder="enter your name to see details"></input></span>
             <button className="showresult" onClick={showinputresult}><AiOutlineCaretDown/></button>
            
            
            { restultDetails!=""?<>
                   <div className="items">name :{ restultDetails.name}</div>
                   <div className="items">landmarker  :{ restultDetails.landmark}</div>
                   <div className="items">mobilenumber :{ restultDetails.phoneNumber}</div>
                   <div className="items">Address  :{ restultDetails.address}</div>
                   <div className="items">itemid :{ restultDetails.itemid}</div>
                   <div className="items">placed succesfully :Yes</div>
                   <div className="items">location :{ restultDetails.location}</div>
                   <div className="items">No of Items :{ restultDetails.items}</div> </>:<div className="alertt">No user Found</div>
            }
        </div>
    
    {accept &&  <div className="admin-div">
{allvalue.map(data=>
  {
    return <DeleteList name={data.name} itemid={data.itemid}  deletefunction={deletefunction} />
  })}

{/* <Footer/> */}
</div>
}


       </div>
    )
}
export default Post;
{/* <div className="items">name :{ restultDetails.name}</div>
<div className="items">landmarker  :{ restultDetails.landmark}</div>
<div className="items">mobilenumber :{ restultDetails.phoneNumber}</div>
<div className="items">Address  :{ restultDetails.address}</div>
<div className="items">itemid :{ restultDetails.itemid}</div>
<div className="items">placed succesfully :Yes</div>
<div className="items">location :{ restultDetails.location}</div>
<div className="items">No of Items :{ restultDetails.items}</div> */}