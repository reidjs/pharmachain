import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
const Splash = () => {
  return (
    <div>
      <img src="../assets/splash1.jpg"/>
      <Link to="/pharmacy"><RaisedButton label="Enter"/></Link>
    </div>
  );
};

export default Splash;