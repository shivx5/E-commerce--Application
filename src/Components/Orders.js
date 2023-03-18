import React, { useState } from "react";
import {useParams,useNavigate} from 'react-router-dom'
import PRODUCTS from "./Data";
import orders from './orders.css';
import axios from 'axios';
 export function Orders()
{

const Navigate=useNavigate();
const[Currenturl,SetCurrenturl]=useState("http://localhost:8006/getAllDetails");

const{id}=useParams();


const products=PRODUCTS.find(pro=>
  {
    return pro.id===parseInt(id);
  })



  const[details,SetDetails]=useState({name:"",items:0,location:"",landmark:"",phoneNumber:0,address:"",itemid:`${id}`});
    
  // console.log(id);

 
    // console.log(products);
  
  function Detailsentry(event)
  {
    const{name,value}=event.target;
    // console.log(name,value);

    SetDetails(preVal=>
      {
        return{
          ...preVal,
          [name]:value
      }
      })

  }
  function showResults()
  {
    console.log(details);
  }

  function sendDetailstoDB()
  {
    axios.post(Currenturl,details);
    console.log(details);
    alert("Order Placed Succesfully");
    Navigate('/Products');

  }

  // function showPersonDetails()
  // {
  //   axios.get(`${Currenturl}/${details.name}`).then(res=>
  //     {
  //       console.log(res);
  //     })
  // }

  
  return(
        <div className="order-form">
          <span value>PRODUCT  :  {products.name}</span>
          <img src={products.image}></img>
             <div className="row-1">
              <input readOnly value={products.id}></input>
              <input type="text"  placeholder="Name"  onChange={Detailsentry} name="name"></input>
              <input type="Number"  placeholder="items"  onChange={Detailsentry} name="items"></input>
              <input type="text"  placeholder="Location"  onChange={Detailsentry} name="location"></input>
              </div>
              <div className="row-2">
              <input type="text"  placeholder="Landmark"  onChange={Detailsentry}  name="landmark"></input>
              <input type="number"  placeholder="PhoneNumber" onChange={Detailsentry}  name="phoneNumber"></input>
              <input type="text"  placeholder="Address"  onChange={Detailsentry} name="address"></input>
              </div>

              
                <button type='submit' title="Order Now..!" className="button-1" onClick={sendDetailstoDB}>Place Order</button>
              
              {/* <button onClick={showResults} className="button-2">showResults</button> */}
              {/* <button onClick={showPersonDetails}>Show Personn</button> */}
        </div>
    )
}

