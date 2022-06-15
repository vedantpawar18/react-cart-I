import React from 'react';
import image from "../logo.png";
import styles from "../components/Navbar.module.css";
import { Button, ButtonGroup } from '@chakra-ui/react';
import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.image}>
        <img style={{height:"50px"}} src={image}/>
      </div>
      <div className={styles.links}>
        <Link path="" to="">Home</Link>
        <Link path="" to="/products"><h2>Products</h2></Link>
        <Link path="" to="/aboutus">AboutUs</Link>
        <Link path="" to="/contactus">ContactUs</Link>
        <Link path="" to="/faq">FAQ</Link>
      </div>
        
    </div>
  )
}

export default Navbar