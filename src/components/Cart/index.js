import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';
import Item from '../ItemsList/Item';

const Cart = ({ items, onRemoveOne, onAddOne }) => {
    return (
    <ul className={style.items}>
        {items.map(item =>
            <li key={item.id} className={style.item}>
                <Item item={item}>
                    <div className={style.controls}>
                        <button className={style.removeOne} onClick={()=>onRemoveOne(item.id)}>-</button>
                        <span className={style.count}>{item.count}</span>
                        <button className={style.addOne} onClick={()=> onAddOne(item.id)}>+</button>
                    </div>
                </Item>
            </li> 
            )}
    </ul>
    );
}

Cart.propTypes = {
    items: PropTypes.array.isRequired,
    onRemoveOne: PropTypes.func.isRequired,
    onAddOne: PropTypes.func.isRequired
};

export default Cart;