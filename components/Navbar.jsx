import styles from '../styles/Navbar.module.css';
import Link from "next/link";
import { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    
    return (
        <div className={styles.container}>
            <Link href="/">KEEWEE</Link>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link href="/products/design">DESIGN</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/research">RESEARCH</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/development">DEVELOPMENT</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/brand">BRAND</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/production">PRODUCTION</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/photography">PHOTOGRAPHY</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/contact">CONTACT</Link>
                </li>
            </ul>
            <div className={styles.hamburger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <ul className={styles.menu} onClick={() => setOpen(false)} style={{right: open ? "0" : "-50vw"}}>
                <li className={styles.menuItem}>
                    <Link href="/products/design">DESIGN</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/products/research">RESEARCH</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/products/development">DEVELOPMENT</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/products/brand">BRAND</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/products/production">PRODUCTION</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/products/photography">PHOTOGRAPHY</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/contact">CONTACT</Link>
                </li>
            </ul>  
        </div>
    );
};

export default Navbar;
