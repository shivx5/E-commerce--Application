import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import header from './header.css'
import{AiFillHome} from 'react-icons/ai'
import{RiContactsFill} from 'react-icons/ri'
import{FcAbout} from 'react-icons/fc'
import{MdProductionQuantityLimits} from 'react-icons/md'
import{MdPostAdd} from 'react-icons/md'
import Footer from './Footer'
import Home from './Home'



function Header() {
  return (
    

<div className="total-icons">
{/* <div className="home-icon"><Link to="/Home"   className="bars"><AiFillHome/></Link></div> */}
       <div className="contact-icon"><Link to="/Contact"  className="bars"><RiContactsFill/></Link></div>
       <div className="about-icon"><Link to="/About"  className="bars"><FcAbout/></Link></div>
       <div className="product-icon"><Link to="/Products"  className="bars"><MdProductionQuantityLimits/></Link></div>
       <div className="post-icon"><Link to="/Post"  className="bars"><MdPostAdd/></Link></div>
     <Footer/>

</div>
  )
}

export default Header;