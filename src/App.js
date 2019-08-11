import React from 'react';
import styles from './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className={styles.app}>
        <Navbar/>
      </div>
    </div>
  );
}

export default App;