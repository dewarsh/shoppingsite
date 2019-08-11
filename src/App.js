import React, { Component } from 'react';
import style from './App.css';
import Navbar from './components/Navbar';
import ItemsList from './components/ItemsList';
import Cart from './components/Cart';
import Axios from 'axios';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { initializeItems } from './AppActions';

class App extends Component {

  componentDidMount() {
    setTimeout(() => Axios.get('http://my-json-server.typicode.com/4d4rsh/mock-shopping-site-data/items')
      .then(response => {
        store.dispatch(initializeItems(response.data));
      }), 2000);
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className={style.app}>
            <Navbar />
            <main className={style.appContent}>
              <Switch>
                <Redirect exact from="/" to="/items" />
                <Route path='/items' component={ItemsList} />} />
                <Route path='/cart' component={Cart} />} />
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;