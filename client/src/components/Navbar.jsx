// https://mdbootstrap.com/docs/react/navigation/navbar/
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';
import '../assets/styles/navbar.scss';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse,
  MDBContainer,
  MDBHamburgerToggler,
  MDBBtn
} from 'mdbreact';

const collapseType = 'collapse2';

const Navbar = ({ title, location }) => {
  const [isOpen, setOpen] = useState(false);
  const history = useHistory();
  console.log('re-render, browser location: ', location);
  // const newMessages = useSelector(store => store.messages).unread;
  return (
    <MDBNavbar id="nav-bar" className="main-color" dark>
      <MDBContainer>
        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBBtn className="main-color" onClick={() => history.goBack()}>
              {'<=='}
            </MDBBtn>
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
            <MDBNavItem>
              <MDBNavLink to="/dist/trade">Up For Trade</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;

// --------------------------------------------------------------------------------------------------
