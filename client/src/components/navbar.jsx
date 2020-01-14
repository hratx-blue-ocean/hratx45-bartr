// https://mdbootstrap.com/docs/react/navigation/navbar/
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
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

const collapseType = 'collapse1';

const Navbar = ({ title }) => {
  const [isOpen, setOpen] = useState(false);
  console.log('re-render');
  // const newMessages = useSelector(store => store.messages).unread;
  return (
    <Router>
      <MDBNavbar color="default-color" dark>
        <MDBContainer>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to={'#!'} color="secondary-color">
                {'<=='}
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarBrand className="navbar-title">Paperclip</MDBNavbarBrand>
          <MDBHamburgerToggler
            color="secondary-color"
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
                <MDBNavLink to="/profile">Profile</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/home">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/messages">Messages</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </Router>
  );
};

export default Navbar;

// --------------------------------------------------------------------------------------------------
