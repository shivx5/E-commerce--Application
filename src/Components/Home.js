import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
// import HomeImg from './src/Images/Homeimage.jpg'
import home from './home.css'
import { SeeFoods } from "./SeeFoods";
function Home()
{
    
    
    return(
        <div className="total-home">
            <div className="home-1">
                <span>"NOTHING IS ORIGINAL"</span>
            </div>
            <div className="home-2">
               <p> High intelligence is common in creative persons, yet while they can meet the problems of life as rationally as anyone else can, their intellect does not rule at the expense of intuition or other seemingly nonrational influences. Most studies of the relationship of creativity to intelligence have also shown that extreme general intelligence does not necessarily kindle creativity. </p>
           </div>
         <img src="https://img.freepik.com/premium-photo/illustration-medieval-historical-man_183364-45644.jpg?w=900"></img>
         {/* <Footer/> */}
        </div>  
           
      
    )
}
export default Home;