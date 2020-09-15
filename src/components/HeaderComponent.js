import React, { useState } from "react";
 import {  Navbar, NavbarToggler, Collapse, Nav, NavItem } from "reactstrap";
import {NavLink} from "react-router-dom";

function Header() {

const [isNavOpen, setNav] = useState(false);


function toggleNav(){
    setNav(!isNavOpen);
}


    return(
        
        
        <Navbar fixed = "top" className = "navbar-light"  expand="md">
        
        <div className="container">
        <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink   to="/home"><img src="assets/images/logo.jpg" className="img-fluid logo" alt="2344" /></NavLink>
            </NavItem>
        </Nav>
        <NavbarToggler onClick={toggleNav}  />
           
        <Collapse isOpen={isNavOpen} navbar>
            <Nav  navbar className="ml-auto">
            <NavItem>
              <NavLink className="nav-link mr-3" to="/home" >Home</NavLink>
            </NavItem>
            <NavItem>
            <NavLink className="nav-link mr-3" to="/gallery">Gallery</NavLink>
            </NavItem>
            <NavItem>
             <NavLink className="nav-link mr-3"  to='/about'>About Us</NavLink>
                 </NavItem>
                  <NavItem>
             <NavLink className="nav-link mr-3" to='/products'>Our Products</NavLink>
              </NavItem>
              <NavItem>
            <NavLink className="nav-link mr-3" to="/contact">Contact Us</NavLink>
            </NavItem>
            <NavItem>
            <NavLink className="nav-link mr-3" to="/invest">Invest In Us</NavLink>
            </NavItem>
           <NavItem>
     <div class="powr-hit-counter" id="37fb65dd_1600140680"></div><script src="https://www.powr.io/powr.js?platform=react"></script>
     </NavItem>
            </Nav>
            
            
            </Collapse>
        </div>

      </Navbar>
       
    );
}

export default Header;
