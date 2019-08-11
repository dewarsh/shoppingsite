import React from "react";
import style from "./style.css";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import PropTypes from 'prop-types';

const Navbar = ({ totalItems, location }) => (
  <div className={style.navbarContainer}>
    <ul className={style.navbarList}>
      <li className={style.navbarListItem}>
        <NavLink to="/items" activeClassName={style.active}>Items</NavLink>
      </li>
      <li className={style.navbarListItem}>
        <NavLink to="/cart" activeClassName={style.active}>Cart</NavLink>
      </li>
    </ul>
    {location.pathname === "/cart" && <div className={style.totalItemsContainer}>
      <div className={style.cartIcon}></div>
      <p className={style.totalItemsText}>{totalItems} items</p>
    </div>}
  </div>
);

Navbar.propTypes = {
  totalItems: PropTypes.number.isRequired
}

export default withRouter(Navbar);