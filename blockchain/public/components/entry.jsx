import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store';


document.addEventListener("DOMContentLoaded", function(){
  const rootEl = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store; 
  // window.dispatch = store.dispatch
  ReactDOM.render(<Root store={store}/>, rootEl);
});
