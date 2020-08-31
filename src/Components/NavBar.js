import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './Logo';

function NavBar() {

  return (
    <div className="NavStyle">
    <Logo/>  
     <ul>
   <li>
    <Link to="/" className="clr">Home</Link>
  </li>
 
  <li>
    <Link to="/about" className="clr">About</Link>
  </li>
  <li>
    <Link to="/product" className="clr">Products</Link>
  </li>
 

</ul>
</div>
  );
}

export default NavBar