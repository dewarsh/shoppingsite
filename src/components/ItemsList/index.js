import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';
import Item from './Item';

const ItemsList = ({ items, onAddToCart }) => {
    return (<ul className={style.items}>
        {items.map(item =>
            <li key={item.id} className={style.item}>
                <Item item={item}>
                    <button className={style.itemAddToCart} onClick={() => onAddToCart(item)}>
                        Add to Cart
                    </button>
                </Item>
            </li>
        )}
    </ul>)
}

ItemsList.propTypes = {
    items: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired
}

export default ItemsList;