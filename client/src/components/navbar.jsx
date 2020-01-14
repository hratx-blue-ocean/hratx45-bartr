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
    </MDBNavbar>
  );
};

export default Navbar;

// --------------------------------------------------------------------------------------------------
