import styles from "../styles/Intro.module.css";
import Image from 'next/image';
import Circle from "./Circle";

const Intro = () => {
    return (
        <div className={styles.container}>
            <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
            <Circle backgroundColor="#01c686" right="-40vh" />
            <div className={styles.card}>
                <h1 className={styles.title}>
                    <span className={styles.brand}>KEEWEE</span> DIGITAL PRODUCT AGENCY
                </h1>
                <p className={styles.desc}>
                    Create live segments and target the right people for message based on their behaviors.
                </p>
                <button className={styles.button}>DISCOVER</button>
            </div>
            <div className={styles.card}>
                <div className={styles.img}>
                    <Image
                        src="/img/kiwi.png"
                        layout="fill"
                        objectFit="cover"    
                        priority="true" 
                        alt=""                    
                    />
                </div>                
            </div>
        </div>
    );
};

export default Intro;
