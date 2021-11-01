import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import App from './components/App';
import reducer from './reducers';
import middleware from './middlewares';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { retrieveQuestions } from './actions/questions';
import { retrieveUsers } from './actions/users';

const store = createStore(reducer,middleware);
store.dispatch(retrieveUsers());
store.dispatch(retrieveQuestions());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
