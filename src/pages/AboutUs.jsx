import React from 'react';
import styles from "./AboutUs.module.css"

const AboutUs = () => {
  return (
    <div>
        <div className={styles.top}>
            <div className={styles.left}>
                <h1 className={styles.h1}>Shopify powers millions of businesses worldwide</h1>
                <h3 className={styles.h3}>The all-in-one commerce platform to start, run, and grow a business.</h3>
            </div>
            <div className={styles.right}>
                <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/assembly/about-hero-small-2a2faf4cb65f77ff8a7957d0f3f5c335a0d13a328f773d30ae252d81e8475dce.png" alt="" />
            </div>
        </div>
        <div className={styles.middle}>
            <h2 className={styles.h2}>The first Shopify store was our own</h2>
            <p>Over a decade ago, we started a store to sell snowboards online. None of the ecommerce solutions at the time gave us the control we needed to be successful—so we built our own. Today, businesses of all sizes use Shopify, whether they’re selling online, in retail stores, or on-the-go.</p>
            <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/snowdevil/snowdevil-about-online-store-sustainability@desktop-d45981b88381b90b17d60887fa0ad6429568d50b08b1d7fb6c5e86eabf7ee84a.png" alt="" />
        </div>
        <div className={styles.middle}>
            <h2 className={styles.h2}>Making commerce better for everyone</h2>
            <p>We help people achieve independence by making it easier to start, run, and grow a business. We believe the future of commerce has more voices, not fewer, so we’re reducing the barriers to business ownership to make commerce better for everyone.</p>
            <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/about/decorator-video-781c004f2dd5936c62834cef03a2f81de1b2b49160d521238f3fcf3125c0e9c0.svg" alt="" />
        </div>
        <div className={styles.middle}>
            <h2 className={styles.h2}>Creating a community for impact</h2>
            <p>Shopify has grown from 5 people in a coffee shop to over 10,000 across the globe. With millions of businesses powered by Shopify, we care deeply about the work we do. We’re constant learners who thrive on change and seek to have an impact in everything we do.</p>
            <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/about/sustainability-small-9082b3c33fc96c720d3534c0908c622c1ca835cdfccb307ba6c30db8d9c41cc0.jpg" alt="" />
        </div>
       
    </div>
  )
}

export default AboutUs