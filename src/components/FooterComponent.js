import React from 'react';
import {Link} from "react-router-dom";
import ScrollToTop from "./ScrollToTopComponent";

function Footer(props) {
    return(
    
        <div className="container-fluid mt-4 text-white" style = {{backgroundColor: '#0f0f0f'}}>
       
            <div className="row justify-content-center">
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                       <li><Link to="/contact">Contact Us</Link></li>
                       <li><Link to="/invest">Invest In Us</Link></li>
                        <li><Link to="/products">Our Products</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
                    1 -Sr Compound Dewas Naka indore 
                    452001<br />
		              <i className="fa fa-phone fa-lg"></i>: 8889997580<br />
		              <i className="fa fa-fax fa-lg"></i>:8319414458<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:Begoneherbicide@yahoo.in">
                      Begoneherbicide@yahoo.in</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center text-white">
                        <a className=" fa fa-google fa-2x mr-3" href="http://google.com/+"><i ></i></a>
                        <a className="fa fa-facebook fa-2x mr-3" href="http://www.facebook.com/profile.php?id="><i></i></a>
                        <a className="fa fa-twitter fa-2x mr-3" href="http://twitter.com/"><i ></i></a>
                        <a className="fa fa-social-icon fa-2x mr-3" href="mailto:Begoneherbicide@yahoo.in"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <p>© Copyright 2002 Begone Herbicide</p>
                </div>
	    <div className = "col ml-auto">
	    <div class="powr-hit-counter" id="37fb65dd_1600140680"></div><script src="https://www.powr.io/powr.js?platform=react"></script>
	    </div>
            </div>
            <ScrollToTop />
        </div>
    
    )
}

export default Footer;
