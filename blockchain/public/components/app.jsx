import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { 
  AuthRoute, 
  ProtectedRoute 
} from './route_util';
import SplashContainer from './splash_container';
import BorrowContainer from './borrow_container';
import PaybackContainer from './payback_container';
import TopNav from './top_nav';
//Turn routes to authroutes 
const App = () => {
  return (
    <div> 
      <Route path="/" component={TopNav}/>
      <div className="main">
        <Switch>
          <Route exact path="/" component={SplashContainer}/>
          <Route exact path="/borrow" component={BorrowContainer}/>
          <Route exact path="/payback" component={PaybackContainer}/>
        </Switch>
      </div>
    </div>
  );
};

export default App;