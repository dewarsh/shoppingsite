import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';
import Item from '../ItemsList/Item';

const Cart = ({ items }) => {
    return (
    <ul className={style.items}>
        {items.map(item =>
            <li key={item.id} className={style.item}>
                <Item item={item} />
            </li> 
            )}
    </ul>
    );
}

Cart.propTypes = {
    items: PropTypes.array.isRequired
};

export default Cart;