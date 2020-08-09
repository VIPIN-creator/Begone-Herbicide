import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, CardImg } from "reactstrap";
 

function Carousels(props){

    const slides = props.slide.map((item) => {
        return(
            <Card className="ml-5">
            <CardImg
           className="img-fluid carousel-image" src={item.content}   alt={item.key}>
            </CardImg>
            </Card>
        );
    });
    
    return(
        <div >
<Carousel
  additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={1000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  showDots={true}
  sliderClass=""
  slidesToSlide={2}
  swipeable
>
  {slides}
    </Carousel>
    </div>);
}

export default Carousels;