import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.css';
import Item from '../ItemsList/Item';

class Cart extends Component {
    state = {
        totalAmount: 0
    }

    static getDerivedStateFromProps (props) {
        if(props.items.length !== 0){
            const sum = props.items.reduce((sum,item)=>sum+(item.count*item.price),0);
            return {
                totalAmount: sum
            }
        }
        return null;
    }

    render() {
        const { totalAmount } = this.state;
        const { items, onRemoveOne, onAddOne } = this.props;
        return (<>
            <ul className={style.items}>
                {items.map(item =>
                    <li key={item.id} className={style.item}>
                        <Item item={item}>
                            <div className={style.controls}>
                                <button className={style.removeOne} onClick={() => onRemoveOne(item.id)}>-</button>
                                <span className={style.count}>{item.count}</span>
                                <button className={style.addOne} onClick={() => onAddOne(item.id)}>+</button>
                            </div>
                        </Item>
                    </li>
                )}
            </ul>
            {items.length !== 0 && <h2 className={style.totalAmount}>Total: ${totalAmount}</h2>}
            {items.length === 0 && <h2 className={style.loadingText}>Your Cart is empty !</h2>}
        </>);
    }
}

Cart.propTypes = {
    items: PropTypes.array.isRequired,
    onRemoveOne: PropTypes.func.isRequired,
    onAddOne: PropTypes.func.isRequired
};

export default Cart;