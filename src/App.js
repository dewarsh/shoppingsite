import React, { Component } from 'react';
import style from './App.css';
import Navbar from './components/Navbar';
import ItemsList from './components/ItemsList';
import Cart from './components/Cart';
import Axios from 'axios';

class App extends Component {
  state = {
    activeTab: 0,
    items: [],
    cart: [],
    totalItems: 0
  };

  componentDidMount() {
    setTimeout(()=>Axios.get('http://my-json-server.typicode.com/4d4rsh/mock-shopping-site-data/items')
    .then(response => this.setState({
      items: response.data
    })),2000);
  }

  handleTabChange = index => {
    this.setState({
      activeTab: index
    });
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
      totalItems: this.state.totalItems+1
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
      totalItems: this.state.totalItems-1
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
      totalItems: this.state.totalItems+1
    })
  }


  renderContent = () => {
    const { activeTab, items, cart } = this.state;
    switch (activeTab) {
      default:
      case 0: return <ItemsList items={items}
        onAddToCart={this.handleAddToCart} />;
      case 1: return <Cart items={cart} 
        onAddOne={this.handleAddOne}
        onRemoveOne={this.handleRemoveOne} />
    }
  }

  render() {
    const { activeTab, totalItems } = this.state;
    return (
      <div className="App">
        <div className={style.app}>
          <Navbar activeTab={activeTab} onTabChange={this.handleTabChange} totalItems={totalItems}/>
          <main className={style.appContent}>
            {this.renderContent()}
          </main>
        </div>
      </div>
    );
  }
}

export default App;