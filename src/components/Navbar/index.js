import React from "react";
import styles from "./style.css";
import NavLink from "./NavLink";
import PropTypes from 'prop-types';

const Navbar = ({activeTab,onTabChange}) => {

    return (
      <div className={styles.navbarContainer}>
        <ul className={styles.navbarList}>
          <li className={`${styles.navbarListItem} ${activeTab === 0 ? styles.navbarItemActive : ""}`}>
            <NavLink index={0} onClick={onTabChange}>Items</NavLink>
          </li>
          <li className={`${styles.navbarListItem} ${activeTab === 1 ? styles.navbarItemActive : ""}`}>
            <NavLink index={1} onClick={onTabChange}>Cart</NavLink>
          </li>
        </ul>
      </div>
    );
}

Navbar.propTypes = {
  activeTab: PropTypes.number.isRequired,
  onTabChange: PropTypes.func.isRequired
}

export default Navbar;