import React from 'react'
import { Link } from 'react-router-dom'
import footer from './footer.css'
import{AiFillHome} from 'react-icons/ai'
import{RiContactsFill} from 'react-icons/ri'
import{FcAbout} from 'react-icons/fc'
import{MdProductionQuantityLimits} from 'react-icons/md'
import{MdPostAdd} from 'react-icons/md'


export default function Footer() {
  return (
    <div className='total-footer'>
      <div className="footer">
      <div className="bars"><Link to="/Home"  ><AiFillHome/></Link></div>
      <div className="contact-icon"><Link to="/Contact"  ><RiContactsFill/></Link></div>
       <div className="about-icon"><Link to="/About"  ><FcAbout/></Link></div>
       <div className="product-icon"><Link to="/Products"  ><MdProductionQuantityLimits/></Link></div>
       <div className="post-icon"><Link to="/Post"  ><MdPostAdd/></Link></div>
      
</div>
    </div>
  )
}
