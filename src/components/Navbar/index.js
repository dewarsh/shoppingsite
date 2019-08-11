import React from "react";
import style from "./style.css";
import NavLink from "./NavLink";
import PropTypes from 'prop-types';

const Navbar = ({ activeTab, onTabChange, totalItems }) => {

  return (
    <div className={style.navbarContainer}>
      <ul className={style.navbarList}>
        <li className={`${style.navbarListItem} ${activeTab === 0 ? style.navbarItemActive : ""}`}>
          <NavLink index={0} onClick={onTabChange}>Items</NavLink>
        </li>
        <li className={`${style.navbarListItem} ${activeTab === 1 ? style.navbarItemActive : ""}`}>
          <NavLink index={1} onClick={onTabChange}>Cart</NavLink>
        </li>
      </ul>
      {activeTab === 1 && <div className={style.totalItemsContainer}>
        <div className={style.cartIcon}></div>
        <p className={style.totalItemsText}>{totalItems} items</p>
        </div>}
    </div>
  );
}

Navbar.propTypes = {
  activeTab: PropTypes.number.isRequired,
  onTabChange: PropTypes.func.isRequired,
  totalItems: PropTypes.number.isRequired
}

export default Navbar;