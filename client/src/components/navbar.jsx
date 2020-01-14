// https://mdbootstrap.com/docs/react/navigation/navbar/
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../assets/styles/navbar.scss';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse,
  MDBContainer,
  MDBHamburgerToggler
} from 'mdbreact';

const collapseType = 'collapse2';

const Navbar = ({ title }) => {
  const [isOpen, setOpen] = useState(false);
  console.log('re-render');
  // const newMessages = useSelector(store => store.messages).unread;
  return (
<<<<<<< HEAD
    <MDBNavbar color="indigo" dark>
      {getLink("Home", "/")}
      {getLink("Feed", "/feed")}

      {/* Drop down button */}
      <MDBNavbarNav left>
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

      {/* Profile icon drop down */}
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
=======
    <MDBNavbar className="main-color" dark>
      <MDBContainer>
        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBNavLink to={'#!'} className="main-color">
              {'<=='}
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarBrand className="navbar-title">Paperclips</MDBNavbarBrand>
        <MDBHamburgerToggler
          className="main-color"
          id="navbar-hamburger"
          onClick={() => {
            setOpen(!isOpen);
            console.log(isOpen);
          }}
          right
        />
        <MDBCollapse isOpen={isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="/dist/profile">Profile</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/dist/feed">Feed</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/dist/messages">Messages</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
>>>>>>> e84274f90265079f5aaab1e92987c04e4ce16b03
    </MDBNavbar>
  );
};

export default Navbar;

// --------------------------------------------------------------------------------------------------
