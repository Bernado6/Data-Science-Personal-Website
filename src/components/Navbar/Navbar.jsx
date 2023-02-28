import React, {useState} from "react";
import "./navbar.css";
import { Link } from 'react-scroll';


const Navbar = () => {

    const [navScrollColor, SetNavScrollColor] = useState(false);

    const onChangeNavColor = () =>{

        if (window.scrollY>=100){
            SetNavScrollColor(true);
        } else{
            SetNavScrollColor(false);
        }

    };

    window.addEventListener("scroll", onChangeNavColor);
    return(
        <nav className={navScrollColor ? "nav-scroll-color navbar-main":"navbar-main"}>
            <ul>
               
                <li className="nav-item">
                <Link to = "home" spy = {true} smooth = {true} offset = {-100} duration = {100}>
                    Home
                </Link>
                </li>            
                
                <li className="nav-item">
                <Link to = "about" spy = {true} smooth = {true} offset = {-100} duration = {100}>
                    About
                </Link>
                </li>
                
                <li className="nav-item">
                <Link to = "services" spy = {true} smooth = {true} offset = {-100} duration = {100}>
                    Service
                    </Link>
                </li>

                <li className="nav-item">
                <Link to = "experience" spy = {true} smooth = {true} offset = {-100} duration = {100}>
                    Experience
                </Link>
                </li>

                <li className="nav-item">
                <Link to = "portfolio" spy = {true} smooth = {true} offset = {-100} duration = {100}>
                    Portfolio
                </Link>
                </li>

                <li className="nav-item">
                <Link to = "career" spy = {true} smooth = {true} offset = {-100} duration = {100}>
                    Career
                    </Link>
                </li>
                <li className="nav-item">
                <Link to = "contact" spy = {true} smooth = {true} offset = {-100} duration = {100}>
                    Contact
                </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;