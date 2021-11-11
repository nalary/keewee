import styles from "../styles/Testimonials.module.css";
import Circle from "./Circle";
import { users } from "../data";
import Image from "next/image";

const Testimonials = () => {
    return (
        <div className={styles.container}>
            <Circle backgroundColor="darkblue" top="-70vh" left="0" right="0" />
            <h1 className={styles.title}>Testimonials</h1>
            <div className={styles.wrapper}>
                {users.map(user => (
                    <div key={user.id} className={styles.card}>
                        <Image 
                            src={`/img/${user.logo}`}
                            alt=""
                            width="30px"
                            height="30px"
                        />
                        <p className={styles.comment}>
                            {user.comment}
                        </p>
                        <div className={styles.person}>
                            <div className={styles.avatar}>
                                <Image 
                                    src={`/img/${user.avatar}`}
                                    alt=""
                                    width="45px"
                                    height="45px"
                                    objectFit="cover"
                                    className={styles.photo}                            
                                />
                            </div>                            
                            <div className={styles.info}>
                                <span className={styles.name}>{user.name}</span>
                                <span className={styles.jobTitle}>{user.title}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
