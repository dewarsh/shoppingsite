import React from 'react';
import styles from './style.css';

const Navbar = props => {
    const {
        activeTab,
        onTabChange
    } = props;

    return (
        <nav className={styles.navbarContainer}>
            <ul className={styles.navbarList}>
                <li className={`${styles.navbarListItem} ${activeTab === 0 ? styles.navbarItemActive : ""}`}>
                    <a onClick={()=>onTabChange(0)}>Items</a>
                </li>
                <li className={`${styles.navbarListItem} ${activeTab === 1 ? styles.navbarItemActive : ""}`}>
                    <a onClick={()=>onTabChange(1)}>Cart</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;