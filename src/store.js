import { createStore } from 'redux';
import appReducer from './AppReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store =
  process.env.NODE_ENV === 'development'
    ? createStore(
        appReducer,
        composeWithDevTools()
      )
    : createStore(appReducer);

export default store;