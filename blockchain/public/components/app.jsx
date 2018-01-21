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
import PharmacyContainer from './pharmacy_container';
import TopNav from './top_nav';
//Turn routes to authroutes 
const App = () => {
  return (
    <div> 
      <Route exact path="/" render={() => <TopNav route={"Pharmacy"}/>}/>
      <Route exact path="/manufacturer" render={() => <TopNav route={"Manufacturer"}/>}/>
      <div className="main">
        <Switch>
          <Route exact path="/" component={PharmacyContainer}/>
        </Switch>
      </div>
    </div>
  );
};

export default App;