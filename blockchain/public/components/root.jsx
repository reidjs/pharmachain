import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Widget from './widget';
import App from './app';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
      </HashRouter>
    </Provider>
  );
};

export default Root;