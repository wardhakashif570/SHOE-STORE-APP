import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Slider.module.css';
const Slider=()=>
{ return(
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" width="100%" height="530px" alt="slider 1"/>
  

    <Carousel.Caption>
      <h3 className={styles.clr}>ONLINE SHOE STORE</h3>
      <p className={styles.clr1}>"Style is a way to say who you are without having to speak"</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
     src= "https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=767&q=80" width="100%" height="530px" alt="slider 2"/>
     
  

    <Carousel.Caption>
      <h3 className={styles.clr}>ONLINE SHOE STORE</h3>
      <p  className={styles.clr1}>"Fashion is like eating, you shouldn't stick to the same menu."</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" width="100%" height="530px" alt="slider 3"/>
     


    <Carousel.Caption>
      <h3 className={styles.clr}>ONLINE SHOE STORE</h3>
      <p className={styles.clr1}>"Clothes mean nothing until someone lives in them."</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

);
  
}
export default Slider;