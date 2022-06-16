import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import styles from "../pages/Login.module.css"

const Login = () => {
    const navigate = useNavigate();
    const [loginCreds, setLoginCreds] = useState ({});
    const {login} = useContext(AuthContext);

    const handleChange =(e) =>{
        const {name,value} =e.target;
        setLoginCreds({
            ...loginCreds,
            [name]:value,
        });
    };

    const handleSubmit =(e) =>{
        e.preventDefault();
        login();
        navigate("/products")
    };

  return (
    <div>Login

        <form className={styles.form} onSubmit={handleSubmit} >
            <input name="email" type="email" onChange={handleChange} placeholder="Enter Email" />
            <input name="password" type="password" onChange={handleChange} placeholder="Enter Password..." />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login