import React, { Component } from 'react';
import styles from './App.css';
import Navbar from './components/Navbar';
import ItemsList from './components/ItemsList';
import Cart from './components/Cart';

class App extends Component {
  state = {
    activeTab: 0
  };

  handleTabChange = index => {
    this.setState({
      activeTab: index
    });
  }

  renderContent = () => {
    const { activeTab } = this.state;
    switch (activeTab) {
      default:
      case 0: return <ItemsList />;
      case 1: return <Cart />
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