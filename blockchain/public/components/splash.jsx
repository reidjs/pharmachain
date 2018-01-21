import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
const Splash = () => {
  return (
    <div className="splash">
      <img src="../assets/background.png"/>
      <img src="../assets/logo.svg"/>
      <h2>Predictive medical inventory platform powered by blockchain</h2>
      <div id="key-input">
        <input type="text" placeholder="Enter your public key"/>
        <Link to="/pharmacy"><RaisedButton label="Enter"/></Link>
      </div>
    </div>
  );
};

export default Splash;