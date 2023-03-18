import {MdOutlineDeleteSweep} from 'react-icons/md'
import deletelist from './deletelist.css'
import Footer from './Footer';

export function DeleteList(props)
{
    function deleteitems(event)
    {
event.preventDefault();
        props.deletefunction(props.name);
    }
    return(
        <div className="inside-admin">
    <div className="as-items"><p>Name   :{props.name}  </p></div>
    <div className="as-items"><span>Item Id:{props.itemid}</span></div>
    <form>
    <button className="as-items" onClick={deleteitems} ><MdOutlineDeleteSweep/></button>
    </form>
    {/* <Footer/> */}
    </div>
    
    )
}