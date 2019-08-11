import React, { Component } from 'react';
import styles from './App.css';
import Navbar from './components/Navbar';
import ItemsList from './components/ItemsList';
import Cart from './components/Cart';
import Axios from 'axios';

class App extends Component {
  state = {
    activeTab: 0,
    items: [],
    cart: []
  };

  componentDidMount () {
    Axios.get('http://my-json-server.typicode.com/4d4rsh/mock-shopping-site-data/items')
      .then(response => this.setState({
        items: response.data
      }));
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
      cart: tempCart
    })
  }


  renderContent = () => {
    const { activeTab, items, cart } = this.state;
    switch (activeTab) {
      default:
      case 0: return <ItemsList items={items}
      onAddToCart={this.handleAddToCart}/>;
      case 1: return <Cart items={cart}/>
    }
  }

  render() {
    const { activeTab } = this.state;
    return (
      <div className="App">
        <div className={styles.app}>
          <Navbar activeTab={activeTab} onTabChange={this.handleTabChange} />
          <main className={styles.appContent}>
            {this.renderContent()}
          </main>
        </div>
      </div>
    );
  }
}

export default App;