import React, {useState} from "react";
import "./navbar.css";
import { Link } from 'react-scroll';
import { FcHome } from 'react-icons/fc';


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
            <div className='container-fluid view-header'>
                <a href="#home"> 
                <FcHome size = {25}/>
                </a>

            </div>
            
            <ul>          
               
                <li className="nav-item">
                <Link 
                to = "home" 
                spy = {true} 
                smooth = {true} 
                offset = {-100} 
                duration = {100}>
                    Home
                </Link>
                </li>            
                
                <li className="nav-item">
                <Link 
                to = "about" 
                spy = {true} 
                smooth = {true} 
                offset = {-100} 
                duration = {100}>
                    About
                </Link>
                </li>
                
                <li className="nav-item">
                <Link 
                to = "competencies" 
                spy = {true} 
                smooth = {true} 
                offset = {-100} 
                duration = {100}>
                    Competencies
                </Link>
                </li>

                <li className="nav-item">
                <Link 
                to = "portfolio" 
                spy = {true} 
                smooth = {true} 
                offset = {-100} 
                duration = {100}>
                    Projects
                </Link>
                </li>

                <li className="nav-item">
                <Link 
                to = "timeline" 
                spy = {true} 
                smooth = {true} 
                offset = {-100} 
                duration = {100}>
                    Timeline
                    </Link>
                </li>

                <li className="nav-item">
                <Link 
                to = "services" 
                spy = {true} 
                smooth = {true} 
                offset = {-100} 
                duration = {100}>
                    Services
                    </Link>
                </li>


                <li className="nav-item">
                <Link 
                to = "reviews" 
                spy = {true} 
                smooth = {true} 
                offset = {-100} 
                duration = {100}>
                    Reviews
                    </Link>
                </li>

                <li className="nav-item">
                <Link 
                to = "contact" 
                spy = {true} 
                smooth = {true} 
                offset = {-100} 
                duration = {100}>
                    Contact
                </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;