import React, {useState} from 'react';
import "./navbarMobileView.css";
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-scroll';
// import Switch from "react-switch";
import Switch from "./Switch";

const NavbarMobileView = ({theme, handleChangeTheme}) => {

  const [open, setOpen] = useState(false);

  const handleNavbarOpen = () => {
    setOpen(!open)
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className='responsive-mobile-view'>
      <div className='container-fluid mobile-view-header'>
        <p> 
          <GiHamburgerMenu size = {25} onClick = {handleNavbarOpen}/>
        </p>

      </div>

      { open? (
           <div className='mobile-nav'>
           <ul>
                    
                    <li className="nav-item">
                    <Link 
                    to = "home" 
                    spy = {true} 
                    smooth = {true} 
                    offset = {-400} 
                    duration = {100} 
                    onClick = {handleLinkClick}>
                        Home
                    </Link>
                    </li>            
                    
                    <li className="nav-item">
                    <Link 
                    to = "about" 
                    spy = {true} 
                    smooth = {true} 
                    offset = {-400} 
                    duration = {100}
                    onClick = {handleLinkClick}>
                        About
                    </Link>
                    </li>

                    <li className="nav-item">
                    <Link 
                    to = "competencies" 
                    spy = {true} 
                    smooth = {true} 
                    offset = {-400} 
                    duration = {100}
                    onClick = {handleLinkClick}>
                        Competencies
                    </Link>
                    </li>

                    <li className="nav-item">
                    <Link 
                    to = "portfolio" 
                    spy = {true} 
                    smooth = {true} 
                    offset = {-400} 
                    duration = {100}
                    onClick = {handleLinkClick}>
                        Projects
                    </Link>
                    </li>

                    <li className="nav-item">
                    <Link 
                    to = "timeline" 
                    spy = {true} 
                    smooth = {true} 
                    offset = {-400} 
                    duration = {100}
                    onClick = {handleLinkClick}>
                        Timeline
                    </Link>
                    </li>

                     <li className="nav-item">
                    <Link 
                    to = "services"
                    spy = {true} 
                    smooth = {true} 
                    offset = {-400} 
                    duration = {100}
                    onClick = {handleLinkClick}>
                        Services
                        </Link>
                    </li>    
     
                    <li className="nav-item">
                    <Link 
                    to = "reviews" 
                    spy = {true} 
                    smooth = {true} 
                    offset = {-400} 
                    duration = {100}
                    onClick = {handleLinkClick}>
                        Reviews
                    </Link>
                    </li>

                    <li className="nav-item">
                     <Link 
                     to = "contact" 
                     spy = {true} 
                     smooth = {true}
                     offset = {-400} 
                     duration = {100}
                     onClick = {handleLinkClick}>
                    Contact
                    </Link>
                    </li>

                    <li>
                      {/* <Switch onChange={handleChangeTheme}
                       checked = {theme === "light"} /> */}
                      <Switch/>
                    </li>
                </ul>
     
           </div>
      ):null  }


    </div>
  )
}

export default NavbarMobileView