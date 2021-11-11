import { data } from "../../data";
import styles from "../../styles/Product.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';

const Product = ({product}) => {
    return (
        <>
            <Head>
                <title>KEEWEE {product.title}</title>
                <meta name="description" content={`${product.title} of the best agency`} />
            </Head>
            <div className={styles.container}>
                <div className={styles.cardLg}>
                    {product.images.map(img => (
                        <div key={img.id} className={styles.imgContainer}>
                            <Image
                                src={img.url}
                                width="100%"
                                height="100%"
                                alt=""
                                objectFit="cover"
                                layout="responsive"
                            />
                        </div>
                    ))}
                </div>
                <div className={styles.cardSm}>
                    <h1 className={styles.title}>{product.title}</h1>
                    <p className={styles.desc}>{product.longDesc}</p>
                    <button className={styles.button}>
                        <Link href="/contact">Contact</Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export const getStaticPaths = async () => {
    const products = data;
    const paths = products.map(item => {
        return {
            params: { name: item.name }
        };
    });

    return {
      paths,
      fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const name = context.params.name;
    const product = data.filter(item => item.name === name)[0];

    return {
        props: { product }
    };
};

export default Product;
