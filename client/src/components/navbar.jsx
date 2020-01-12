// https://mdbootstrap.com/docs/react/navigation/navbar/
import React from 'react';

import {
  MDBNavbar,MDBIcon, MDBNavbarNav, MDBNavItem, MDBNavLink,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";


const Navbar = props => {
  return (
    <MDBNavbar color="indigo" dark expand="md">
      <MDBNavbarNav left>
        <MDBNavItem>
          <MDBNavLink to="/dist/">Home</MDBNavLink>
        </MDBNavItem>
        
        <MDBNavItem>
          <MDBDropdown>
            <MDBDropdownToggle nav caret>
              <span className="mr-2">Dropdown</span>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem href="#!">Item 1</MDBDropdownItem>
              <MDBDropdownItem href="#!">Item 2</MDBDropdownItem>
              <MDBDropdownItem href="#!">Item 3</MDBDropdownItem>
              <MDBDropdownItem href="#!">Item 4</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>
        
      </MDBNavbarNav>
  
      <MDBNavbarNav right>
        <MDBDropdown dropleft>
          <MDBDropdownToggle nav caret>
            <MDBIcon icon="user" />
          </MDBDropdownToggle>
          <MDBDropdownMenu className="dropdown-default">
            <MDBDropdownItem href="#!">Item 1</MDBDropdownItem>
            <MDBDropdownItem href="#!">Item 2</MDBDropdownItem>
            <MDBDropdownItem href="#!">Item 3</MDBDropdownItem>
            <MDBDropdownItem href="#!">Item 4</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBNavbarNav>
      
    </MDBNavbar>
  );
};

export default Navbar;


// --------------------------------------------------------------------------------------------------
