import React from 'react';
import './Footer.css';
const Footer=()=>
{
    return(
        <div className="ftrStyle">
        Follow Us On 

        <img src={process.env.PUBLIC_URL + "/images/Instagram.png"} width="50px" height="30px" alt="Pic 1"/>
        <img src={process.env.PUBLIC_URL + "/images/twitter.png"} width="50px" height="30px" alt="Pic 2"/>    
        <img src={process.env.PUBLIC_URL + "/images/facebook1.png"} width="50px" height="30px" alt="Pic 3"/>
                
        </div>
    );
}
export default Footer;