import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.css';
import Item from '../ItemsList/Item';
import { connect } from 'react-redux';
import { decreaseItemCount, increaseItemCount } from '../../AppActions';

class Cart extends Component {
    state = {
        totalAmount: 0
    }

    static getDerivedStateFromProps(props) {
        if (props.cartItems.length !== 0) {
            const sum = props.cartItems.reduce((sum, item) => sum + (item.count * item.price), 0);
            return {
                totalAmount: sum
            }
        }
        return null;
    }

    onRemoveOne = itemId => {
        const { dispatch } = this.props;
        dispatch(decreaseItemCount(itemId));
    }

    onAddOne = itemId => {
        const { dispatch } = this.props;
        dispatch(increaseItemCount(itemId));
    }

    render() {
        const { totalAmount } = this.state;
        const { cartItems } = this.props;
        return (<>
            <ul className={style.items}>
                {cartItems.map(item =>
                    <li key={item.id} className={style.item}>
                        <Item item={item}>
                            <div className={style.controls}>
                                <button className={style.removeOne} onClick={() => this.onRemoveOne(item.id)}>-</button>
                                <span className={style.count}>{item.count}</span>
                                <button className={style.addOne} onClick={() => this.onAddOne(item.id)}>+</button>
                            </div>
                        </Item>
                    </li>
                )}
            </ul>
            {cartItems.length !== 0 && <h2 className={style.totalAmount}>Total: ${totalAmount}</h2>}
            {cartItems.length === 0 && <h2 className={style.loadingText}>Your Cart is empty !</h2>}
        </>);
    }
}

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    cartItems: state.cartItems
});

export default connect(mapStateToProps)(Cart);