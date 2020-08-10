import React , {useState} from 'react';
import { Carousel,
    CarouselItem,
    CarouselControl,
  
    CarouselCaption , Button, Badge, CardBody, CardTitle, CardText, Card, CardDeck} from 'reactstrap';
import {Link} from "react-router-dom";
import Carousels from "./CarouselComponent";
import {products} from "../shared/Products";
import {about} from "../shared/About";
import {items} from "../shared/Home";





  

function Home() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    
    const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.key}
          >
            <img src={item.src} alt={item.altText} className="home-image"/>
            <CarouselCaption  />
          </CarouselItem>
        );
      });

      const cards = about.map((about) => {
        return(
         
          <Card style = {{ backgroundColor : about.color, color: '#0f0f0f', opacity: '0.8'}} >
            <CardBody>
              <CardTitle><h3>{about.heading}</h3></CardTitle>
              <CardText>{about.text}</CardText>
              <Button><Link to ='/about' style={{ textDecoration: 'none', color: 'black' }} >Read more</Link></Button>
            </CardBody>
          </Card>
         
        );
      });

      return (
          <div className="home">
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-7">
            <h2>Welcome to Begone Herbicide</h2>
            <br/>
            <p> Begone Herbicide is One of The Fastest Growing Business Group with a strong presence in the marketing and service industries of Agro Sector. Under the umbrella of BHM Group we are involved the marketing of various grade of Pesticides, Fungicides, Weedicide and have also ventured into the production of vegetable, grain and oil seeds. Additionally we are also suppliers of Bio-Fertilizers, Organic Products, Chelated Nutrients and Phosphatic Fertilizers motivated by our deep interest in farmers prosperity.</p>
            <br/>
            <Button outline color="primary" className="btn-lg"><Link to = '/about' style={{ textDecoration: 'none', color: 'black' }} >Read More</Link></Button>
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
            <div className="col-12 col-sm-4 offset-1 text-center">
              <img src="Begone-Herbicide/assets/images/A1.jpg" className="img-fluid" alt = "233"></img>
            </div>
          </div>
        </div>
        <div className="container mt-4 text-center">
        <div className="row">
        <CardDeck>
        {cards}
        </CardDeck>
        </div>
        </div>
        <div className="container-fluid mt-5 text-white" style={{backgroundColor: "#394989"}}>
        <h2>Wide Range Of Products</h2>
        <Carousels slide = {products} />
        </div>
        </div>
      );
   
}

export default Home;