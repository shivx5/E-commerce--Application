
import { Link } from "react-router-dom";
import about from './about.css';
import Header from "./Header";
import Footer from "./Footer";
function About()
{
    return(
        <div className="total-About">
            {/* <h>i m in About</h> */}
            <div className="about"></div>
            <div className="about-1">
                <img src="https://jooinn.com/images/multicolored-abstract-painting-5.jpg"></img>
            </div>
            <div className="about-2">
                <p>Creativity involves transforming your ideas, imagination, and dreams into reality. When you’re being creative, you can see the hidden patterns, make connections between things that aren’t normally related, and come up with new ideas. Creative ability depends on creative thinking which is part hard work but largely creative problem-solving.</p>
            </div>
            <div className="about-3">
                <p>“You can’t use up creativity. The more you use, the more you have.”</p>
            </div>
            {/* <Footer/> */}
        </div>
    )
}
export default About;