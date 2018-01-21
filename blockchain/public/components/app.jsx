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
import Splash from './splash';
import BuyerContainer from './buyer_container';
import SellerContainer from './seller_container';
//Turn routes to authroutes 
const App = () => {
  return (
    <div> 
      <Route exact path="/pharmacy" render={() => <TopNav route={"Pharmacy"}/>}/>
      <Route exact path="/manufacturer" render={() => <TopNav route={"Manufacturer"}/>}/>
      <div className="main">
        <Switch>
          <Route exact path="/" component={Splash}/>
          <Route exact path="/pharmacy" component={BuyerContainer}/>
          <Route exact path="/manufacturer" component={SellerContainer}/>
        </Switch>
      </div>
    </div>
  );
};

export default App;