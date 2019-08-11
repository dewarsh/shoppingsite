import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const ItemsList = ({items}) => {
    return (
        <ul className={style.items}>
            {items.map(item => 
                <li key={item.id} className={style.itemList}>
                    {item.name}
                </li>
            )}
        </ul>
    )
}
ItemsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ItemsList;