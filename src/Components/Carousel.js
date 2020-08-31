import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Slider.module.css';
const Slider=()=>
{ return(
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= "images/boutique1.jpg" width="100%" height="550px" alt="slider 1"/>
  

    <Carousel.Caption>
      <h3 className={styles.clr}>ONLINE SHOE STORE</h3>
      <p className={styles.clr1}>"Style is a way to say who you are without having to speak"</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
     src= "images/boutique3.jpg" width="100%" height="550px" alt="slider 2"/>
     
  

    <Carousel.Caption>
      <h3 className={styles.clr}>ONLINE SHOE STORE</h3>
      <p  className={styles.clr1}>"Fashion is like eating, you shouldn't stick to the same menu."</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= "images/boutique2.jpg" width="100%" height="550px" alt="slider 3"/>
     


    <Carousel.Caption>
      <h3 className={styles.clr}>ONLINE SHOE STORE</h3>
      <p className={styles.clr1}>"Clothes mean nothing until someone lives in them."</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

);
  
}
export default Slider;