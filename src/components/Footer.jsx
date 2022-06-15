import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.ftlinks}>
        <Link path="" to="">Home</Link>
        <Link path="" to="/products">Products</Link>
        <Link path="" to="/aboutus">AboutUs</Link>
        <Link path="" to="/contactus">ContactUs</Link>
        <Link path="" to="/faq">FAQ</Link>
      </div>
      <div className={styles.icons}>
            <i class="fa-brands fa-facebook fa-2x"></i>
            <i class="fa-brands fa-twitter-square fa-2x"></i>
            <i class="fa-brands fa-youtube fa-2x"></i>
            <i class="fa-brands fa-instagram-square fa-2x"></i>
            <i class="fa-brands fa-linkedin fa-2x"></i>
            <i class="fa-brands fa-pinterest fa-2x"></i>
      </div>
    </div>
  )
}

export default Footer