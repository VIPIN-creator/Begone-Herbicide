import React from "react";
import {Breadcrumb, BreadcrumbItem, Button, Badge} from "reactstrap";
import {Link} from "react-router-dom";

export default function InvestInUs(){
    return(
        <div className="home">
        <img src="Begone-Herbicide/assets/images/theme.jpg" alt='23' className='theme'/>
        <div className="centered text-center text-white">
                       <h1><b>Invest In Us</b></h1>
                       <Breadcrumb style={{backgroundColor: '#F8F8F8'}}>
                           <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                           <BreadcrumbItem active>Invest In Us</BreadcrumbItem>
                       </Breadcrumb>
                       </div>
                       <div className="container mt-5">
                       <div className="row">
                       <div className="col-6 col-sm-4 offset-2 text-center">
                       <img className="img-fluid mb-3" src="Begone-Herbicide/assets/images/battery.jpg" alt="234r" style={{width: "300px" }} />
                       <h3>Navidhya Battery</h3><br/><h4>Undertaken Begone Herbicide</h4>
                       </div>
                       <div className="col-sm-4">
                        <ul style={{lineHeight: "7"}} >
                            <li><Button color="success" outline>
        Invest upto 2Lac - 4Lac  <Badge color="secondary"></Badge>
      </Button></li>
      <li><Button color="primary" outline>
        Invest upto 4Lac - 10Lac  <Badge color="secondary"></Badge>
      </Button></li>
      <li><Button color="danger" outline>
        Invest upto 10Lac - 15Lac  <Badge color="secondary"></Badge>
      </Button></li>
                        </ul>
                       </div>
                       </div>
                       </div>
                       </div>
    );
}