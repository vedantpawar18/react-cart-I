import React from 'react';
import image from "../logo.png";
import styles from "../components/Navbar.module.css";
import { Button, ButtonGroup } from '@chakra-ui/react';
import {Link, useNavigate} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


const Navbar = () => {
  const {isAuth, logout} =useContext(AuthContext);
    const navigate= useNavigate();
    const handleLoginClick = () =>{
        if (isAuth){
            logout();
            navigate("/");
        }
        else{
            navigate("/login");
        }
    };
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
      <div style={{paddingRight:"30px"}}>
      <Button colorScheme='green' size='sm' onClick={handleLoginClick}>
         {isAuth ? "Logout" : "Login"}
      </Button>
      </div>
        
    </div>
  )
}

export default Navbar