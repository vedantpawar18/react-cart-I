import React from 'react';
import styles from "./ContactUs.module.css";
import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const FAQ = () => {
  return (
    <div>
          <div className={styles.top}>
            <div className={styles.left}>
                <h1 className={styles.h1}>FAQ</h1>
                <h3 className={styles.h3}>This is the place to start. Find the answers you need from the Shopify Community or our award-winning support team.</h3>
            </div>
            <div className={styles.right}>
                <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/online/overview/hero@tablet-e2d94e80f9227adc2309a7b0de5a558343bde3481f0eed48e535b1c5303f4689.png" alt="" />
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

export default FAQ