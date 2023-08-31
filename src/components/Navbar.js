import React,{useState} from 'react'
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
    <nav className='main-nav'>
        <div className='logo'>
            <h2>
            <span>T</span>ic-
            <span>T</span>ac-
            <span>T</span>oe
            </h2>
        </div>
        <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
            </div>
        <div  className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          
            <ul>
                <li>
                <NavLink exact to='/'>Home</NavLink>
                </li>
                <li>
                <NavLink to='/login'>Login</NavLink>
                </li>
                <li>
                <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                <NavLink to='/contact'>Contact</NavLink>
                </li>
            </ul>
            

        </div>
        
    </nav>
    </>
  )
}

export default Navbar