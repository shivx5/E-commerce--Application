import { Link } from "react-router-dom";
import contact from './contact.css'
import {MdLocationOn} from 'react-icons/md'
import {GiPhone} from 'react-icons/gi'
import {TbMail} from 'react-icons/tb'
import {TiArrowLeftThick} from 'react-icons/ti'


function Contact()
{
    return(
        <div className="contact-main">
            <div className="contact-1">
                 <p className="bold"><MdLocationOn className="inside-icons"/>  Address</p>
                 <p className="bold-down">1/118, East Street London</p>
            </div>
            <div className="contact-2">
                 <p className="bold"><GiPhone className="inside-icons"/>     Lets Talk</p>
                 <p className="bold-down" id="diff-color">+91 9655055299</p>
            </div>
            <div className="contact-3">
                 <p className="bold"><TbMail className="inside-icons"/>   General Support</p>
                 <p className="bold-down">sivakongunadu234@gmail.com</p>
                
            </div>
            <Link to={`/Products`}><TiArrowLeftThick className='back-icon'/></Link>

            
        </div>
    )
}
export default Contact;