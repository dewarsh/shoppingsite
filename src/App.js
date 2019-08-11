import React, { Component } from 'react';
import style from './App.css';
import Navbar from './components/Navbar';
import ItemsList from './components/ItemsList';
import Cart from './components/Cart';
import Axios from 'axios';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    items: [],
    cart: [],
    totalItems: 0
  };

  componentDidMount() {
    setTimeout(() => Axios.get('http://my-json-server.typicode.com/4d4rsh/mock-shopping-site-data/items')
      .then(response => this.setState({
        items: response.data
      })), 2000);
  }

  handleAddToCart = item => {
    let tempCart = [...this.state.cart];
    let valueFound = false;
    for (let i = 0; i < tempCart.length; i++) {
      if (tempCart[i].id === item.id) {
        tempCart[i] = { ...tempCart[i], count: tempCart[i].count + 1 }
        valueFound = true;
        break;
      }
    }
    if (!valueFound) {
      tempCart = [...tempCart, { ...item, count: 1 }]
    }
    this.setState({
      cart: tempCart,
      totalItems: this.state.totalItems + 1
    })
  }

  handleRemoveOne = itemId => {
    const { cart } = this.state;
    let tempCart = [...cart];
    let index = tempCart.findIndex(item => item.id === itemId);
    if (cart[index].count !== 1) {
      let newItem = { ...cart[index], count: cart[index].count - 1 };
      tempCart.splice(index, 1, newItem);
    } else {
      tempCart.splice(index, 1);
    }

    this.setState({
      cart: tempCart,
      totalItems: this.state.totalItems - 1
    })
  }

  handleAddOne = itemId => {
    const { cart } = this.state;
    let tempCart = [...cart];
    let index = tempCart.findIndex(item => item.id === itemId);
    let newItem = { ...cart[index], count: cart[index].count + 1 };
    tempCart.splice(index, 1, newItem);

    this.setState({
      cart: tempCart,
      totalItems: this.state.totalItems + 1
    })
  }

  render() {
    const { totalItems, items, cart } = this.state;
    return (
      <BrowserRouter>
          <div className={style.app}>
            <Navbar totalItems={totalItems} />
            <main className={style.appContent}>
              <Switch>
              <Redirect exact from= "/" to= "/items" />
              <Route path='/items' 
                render={(routeProps) => <ItemsList {...routeProps} 
                                          items={items} 
                                          onAddToCart={this.handleAddToCart} />} />
              <Route path='/cart' 
                render={(routeProps) => <Cart {...routeProps} 
                                          items={cart} 
                                          onAddOne={this.handleAddOne} 
                                          onRemoveOne={this.handleRemoveOne} />} />
              </Switch>
            </main>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;