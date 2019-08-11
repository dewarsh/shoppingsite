import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import style from './style.css';
import Item from './Item';
import { connect } from 'react-redux';
import { addItemToCart } from '../../AppActions';

class ItemsList extends PureComponent {
    onAddToCart = item => {
        const { dispatch } = this.props;
        dispatch(addItemToCart(item));
    }

    render() {
        const { items } = this.props;
        return (<><ul className={style.items}>
            {items.map(item =>
                <li key={item.id} className={style.item}>
                    <Item item={item}>
                        <button className={style.itemAddToCart} onClick={() => this.onAddToCart(item)}>
                            Add to Cart
                    </button>
                    </Item>
                </li>
            )}
        </ul>
            {items.length === 0 && <h2 className={style.loadingText}>Fetching Items!</h2>}
        </>)
    }
}

ItemsList.propTypes = {
    items: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    items: state.items
});

export default connect(mapStateToProps)(ItemsList);