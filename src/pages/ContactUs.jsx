import React from 'react';
import styles from "./ContactUs.module.css";
import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const ContactUs = () => {
  return (
    <div >
        <div className={styles.top}>
            <div className={styles.left}>
                <h1 className={styles.h1}>Got a question about using Shopify?</h1>
                <h3 className={styles.h3}>This is the place to start. Find the answers you need from the Shopify Community or our award-winning support team.</h3>
            </div>
            <div className={styles.right}>
                <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/contact/contact-hero-intl@mobile-8a6260f62f2fc57fc473e978f2a3ebf5585bdea6ee6032d3f6f644f94c783164.jpg" alt="" />
            </div>
        </div>
        <div className={styles.contUs}>
        <h1 className={styles.h1} style={{color:"black"}}>Join our growing team</h1>
                <h3 className={styles.h3} style={{color:"black"}}>We’re always looking for hard-working, passionate people to help us make commerce better.</h3>
        </div>
        <div className={styles.contUs}>
                        <Link href='https://chakra-ui.com' isExternal>
                             View current job postings  <ExternalLinkIcon mx='2px' />
                        </Link>
        </div>
    </div>
  )
}

export default ContactUs