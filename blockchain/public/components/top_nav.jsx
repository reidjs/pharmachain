import React from 'react';
import { Link } from 'react-router-dom';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
const TopNav = () => {
  return (
    <nav className="nav-container">
      <div className="brand">
      
        <Link to="/">PharmaChain</Link>
      </div>
      <div className="nav-links">
      <ToolbarGroup>
          <FontIcon className="muidocs-icon-custom-sort" />
          <ToolbarSeparator />
          Pharmacy Account
          {/* <Link to="/information"><Rai  sedButton label="More Information" secondary={true} /></Link> */}
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <Link to="/"><MenuItem primaryText="Pharmacy" /></Link>
            <Link to="/manufacturer"><MenuItem primaryText="Manufacturer" /></Link>
          </IconMenu>
        </ToolbarGroup>          
      </div>
    </nav>
  );
};

export default TopNav;
