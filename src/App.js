import React, { Component } from 'react';
import styles from './App.css';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    activeTab: 0
  };

  handleTabChange = index => {
    this.setState({
      activeTab: index
    });
  }

  render() {
    const { activeTab } = this.state;
    return (
      <div className="App">
        <div className={styles.app}>
          <Navbar activeTab={activeTab} onTabChange={this.handleTabChange}/>
        </div>
      </div>
    );
  }
}

export default App;