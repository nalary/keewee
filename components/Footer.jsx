import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardLg}>
                <Link href="/">
                    <h1 className={styles.title}>KEEWEE CREATIVES.</h1>
                </Link>                
                <h1 className={styles.linkTitle}>
                    <Link href="/contact" className={styles.link} passHref>                        
                        {/* <> */}
                            <span className={styles.linkText}>WORK WITH US</span>
                            {/* <Image
                                src="/img/link.png"
                                alt=""
                                width="35px"
                                height="35px"
                            /> */}
                        {/* </> */}
                    </Link>                    
                </h1>
            </div>
            <div className={styles.cardSm}>
                <div className={styles.cardItem}>
                    RAMA 9 ROAD BKK, <br/> THAILAND
                </div>
                <div className={styles.cardItem}>
                    CONTACT@JANDT.LAB <br/> +66 2 345 6789
                </div>
            </div>
            <div className={styles.cardSm}>
                <div className={styles.cardItem}>
                    FOLLOW US:
                    <br/>
                    <div className={styles.icons}>
                        <div className={styles.icon}>
                            <Image
                                src="/img/facebook.png"
                                alt=""
                                width="100%"
                                height="100%"
                                layout="responsive"
                            />
                        </div>
                        <div className={styles.icon}>
                            <Image
                                src="/img/instagram.png"
                                alt=""
                                width="100%"
                                height="100%"
                                layout="responsive"
                            />
                        </div>
                        <div className={styles.icon}>
                            <Image
                                src="/img/pinterest.png"
                                alt=""
                                width="100%"
                                height="100%"
                                layout="responsive"
                            />
                        </div>
                        <div className={styles.icon}>
                            <Image
                                src="/img/twitter.png"
                                alt=""
                                width="100%"
                                height="100%"
                                layout="responsive"
                            />
                        </div>
                        {/* __FB __IN __BE __TW */}
                    </div>
                </div>
                <div className={styles.cardItem}>
                    © 2022 JANDT INTERACTIVE,
                    <br/>
                    ALL RIGHTS RESERVED
                </div>
            </div>
        </div>
    );
};

export default Footer;
