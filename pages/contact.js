import styles from "../styles/Contact.module.css";
import Circle from "../components/Circle";
import Head from "next/head";

const contact = () => {
    return (        
        <>
            <Head>
                <title>KEEWEE Contact</title>
                <meta name="description" content="Contact of the best agency" />
            </Head>
            <div className={styles.container}>
                <Circle backgroundColor="green" left="-40vh" top="-20vh" />
                    <Circle backgroundColor="yellow" right="-30vh" bottom="-60vh" />
                <h1 className={styles.title}>GET IN TOUCH</h1>
                <form className={styles.form}>
                    <input className={styles.inputSm} placeholder="Name" />
                    <input className={styles.inputSm} placeholder="Phone" />
                    <input className={styles.inputLg} placeholder="Email" />
                    <input className={styles.inputLg} placeholder="Subject" />
                    <textarea className={styles.textarea} placeholder="Message" rows="6" />
                    <button className={styles.button}>SUBMIT</button>
                </form>
            </div>
        </>
    );
};

export default contact;
