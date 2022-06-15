import React, { useEffect, useState } from 'react';
import styles from "./Products.module.css";
import { Button } from '@chakra-ui/react'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        const fetchProducts =async () =>{
            let r= await fetch ("http://localhost:8080/products");
            let d= await r.json();
            setProducts(d);
        };
        fetchProducts();
    },[]);
  return (
    <div>
        <div className={styles.container}>
            {products.map((p)=>(
                <div className={styles.box} key={p.id}>
                    <img src={p.img} alt="" />
                    <p>{p.name}</p>
                    <Button colorScheme='green' size='xs'>
                        Buy Now
                    </Button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Products