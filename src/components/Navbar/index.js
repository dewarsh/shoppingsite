import React from 'react';
import styles from './style.css';

const Navbar = () => {
    return (
        <nav className={styles.navbarContainer}>
            <ul className={styles.navbarList}>
                <li className={styles.navbarListItem}>Items</li>
                <li className={styles.navbarListItem}>Cart</li>
            </ul>
        </nav>
    );
}

export default Navbar;