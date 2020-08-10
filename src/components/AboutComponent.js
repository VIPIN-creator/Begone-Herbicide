import React from 'react';
import { 
     Button, Badge, CardBody, CardTitle, CardText, Card, Breadcrumb, BreadcrumbItem, CardDeck} from 'reactstrap';
    import {about} from "../shared/About";
    import {Link} from "react-router-dom";

function About(){

    const cards = about.map((about) => {
        return(
         
          <Card style = {{ backgroundColor : about.color, color: '#0f0f0f', opacity: '0.8'}} >
            <CardBody>
              <CardTitle><h3>{about.heading}</h3></CardTitle>
              <CardText>{about.text}</CardText>
             
            </CardBody>
          </Card>
         
        );
      });
    
        return( 
            <div className=" home">
            <img src="Begone-Herbicide/assets/images/theme.jpg" alt='23' className='theme'/>
            <div className="centered text-center text-white">
                           <h1><b>About Us</b></h1>
                           <Breadcrumb style={{backgroundColor: '#F8F8F8'}}>
                               <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                               <BreadcrumbItem active>About Us</BreadcrumbItem>
                           </Breadcrumb>
                           </div>

            <div className="container">
            
          <div className="row">
            <div className="col-sm-7">
            <h2>Welcome to Begone Herbicide</h2>
            <br/>
            <p> Begone Herbicide is One of The Fastest Growing Business Group with a strong presence in the marketing and service industries of Agro Sector. Under the umbrella of BHM Group we are involved the marketing of various grade of Pesticides, Fungicides, Weedicide and have also ventured into the production of vegetable, grain and oil seeds. Additionally we are also suppliers of Bio-Fertilizers, Organic Products, Chelated Nutrients and Phosphatic Fertilizers motivated by our deep interest in farmers prosperity.</p>
            <br/>
          <br/><br/>
            <h3>Our Core Values</h3>
            <br/>
            <h4>
            <Button color="success" outline>
        Innovation <Badge color="secondary"></Badge>
      </Button>   {' '}       
      <Button color="success" outline>
        Persistence <Badge color="secondary"></Badge>
      </Button>{' '}
      <Button color="success" outline>
        People Orientation <Badge color="secondary"></Badge>
      </Button>{' '}
      <Button color="success" outline>
        Passion <Badge color="secondary"></Badge>
      </Button>{' '}
            </h4>
            </div>
            <div className="col-sm-4 offset-1">
              <img src="Begone-Herbicide/assets/images/A1.jpg" className="img-fluid"  alt = "sdfasdf"></img>
            </div>
          </div>
          <div className="container mt-4 text-center">
        <div className="row">
        <CardDeck>
        {cards}
        </CardDeck>
        </div>
        </div>
        </div>
        </div>
        );
  
}

export default About;