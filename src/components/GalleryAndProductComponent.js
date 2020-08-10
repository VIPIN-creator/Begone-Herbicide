import React, {useState} from 'react';
import {Breadcrumb, BreadcrumbItem, Card, CardDeck, CardBody, CardImg, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import {Link} from "react-router-dom";
import { useSpring, animated, config } from "react-spring";


function Render({item}){

 const [hovered, setState] = useState(false);

 const [modal, setModal] = useState(false);

 const toggle = () => setModal(!modal);
  
  function cancelHover(){
      setState(!hovered);
    }
  
    function setHover(){
      setState(!hovered);
    }
  
    const hoverBoxShadow = '0 2 11px rgba(33,33,33,.2)';
    const normalBoxShadow = '0 1 4px  white';
  
    const change = useSpring({ to : {
      transform: `scale(${hovered ? 1.2 : 1})`,
      boxShadow: hovered ? hoverBoxShadow : normalBoxShadow,
      color: hovered ? '#E31837' : 'black' 
    }, config: config.default })
      
    return(
      
      <CardDeck   className=" col-12 col-sm-2 col-md-4 mt-5 text-center   mb-3"
            onMouseOver={setHover}
    onMouseOut={ cancelHover}  >
    <animated.div style={change}>
      <Card >
      <CardBody>
      <CardImg onClick={toggle} src={item.content} alt="Card image cap" className="img-fluid carousel-image mb-3"/>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
        <img src={item.content} alt="Card" className="img-fluid " />
         </ModalBody>
        <ModalFooter>
        
        </ModalFooter>
      </Modal>
    </CardBody>
  </Card>
   </animated.div>
      </CardDeck>
    );
  }
  

function GalleryAndProduct({name, items}){
    const show = items.map((item) => {
       return(
         <Render item = {item}  key={item.key} />
                  );
        });

        return(
            <div className="gallery "><div>
 <img src="assets/images/theme.jpg" alt='23' className='theme'/>
 <div className="centered text-center text-white">
                <h1><b>{name}</b></h1>
                <Breadcrumb style={{backgroundColor: '#F8F8F8'}}>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{name}</BreadcrumbItem>
                </Breadcrumb>
                </div>
                <div className="row">
                {show}
                </div>
                </div>
            </div>
        );
    }

export default GalleryAndProduct;