import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';
import Item from './Item';

const ItemsList = React.memo(({ items, onAddToCart }) => 
    (<><ul className={style.items}>
        {items.map(item =>
            <li key={item.id} className={style.item}>
                <Item item={item}>
                    <button className={style.itemAddToCart} onClick={() => onAddToCart(item)}>
                        Add to Cart
                    </button>
                </Item>
            </li>
        )}
    </ul>
    {items.length === 0 && <h2 className={style.loadingText}>Fetching Items!</h2>}
    </>)
)

ItemsList.propTypes = {
    items: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired
}

export default ItemsList;//This won't render again and again when state/props of the app.js changes