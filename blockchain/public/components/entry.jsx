import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store';


document.addEventListener("DOMContentLoaded", function(){
  // fetch('../candidates')
  // .then(res => res.json())
  // .then(res => {
  //   const candidatesTableHTML = res.candidates.map(function(candidate) {
  //     return `<tr><td>${candidate.name}</td><td id='${candidate.name}'>${candidate.votes}</td></tr>`;
  //   });

  //   $('#candidatesTable').html(candidatesTableHTML);
  // }).catch(function(err) {
  //   // Error :(
  // });

  // $('#voteSubmit').click(function(event) {
  //   const headers = new Headers({
  //     "Content-Type": "application/json",
  //   });

  //   fetch('/vote', {
  //     method: 'post',
  //     headers: headers,
  //     body: JSON.stringify({ candidateName: $('#candidateName').val() }),
  //   })
  //   .then(res => res.json())
  //   .then(res => {
  //     $('#' + res.name).html(res.votes);
  //   }).catch(function() {
  //     // Error
  //   });
  // });
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
