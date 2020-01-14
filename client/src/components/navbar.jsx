// https://mdbootstrap.com/docs/react/navigation/navbar/
<<<<<<< HEAD
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../assets/styles/navbar.scss";
=======
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';
import '../assets/styles/navbar.scss';
>>>>>>> 68ddc4278488b8c9366463776bc8b4ebcdac3fa8
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse,
  MDBContainer,
<<<<<<< HEAD
  MDBHamburgerToggler
} from "mdbreact";
=======
  MDBHamburgerToggler,
  MDBBtn
} from 'mdbreact';
>>>>>>> 68ddc4278488b8c9366463776bc8b4ebcdac3fa8

const collapseType = "collapse2";

const Navbar = ({ title, location }) => {
  const [isOpen, setOpen] = useState(false);
<<<<<<< HEAD
  console.log("re-render");
=======
  const history = useHistory();
  console.log('re-render, browser location: ', location);
>>>>>>> 68ddc4278488b8c9366463776bc8b4ebcdac3fa8
  // const newMessages = useSelector(store => store.messages).unread;
  return (
    <MDBNavbar className="main-color" dark>
      <MDBContainer>
        <MDBNavbarNav left>
          <MDBNavItem>
<<<<<<< HEAD
            <MDBNavLink to={"#!"} className="main-color">
              {"<=="}
            </MDBNavLink>
=======
            <MDBBtn className="main-color" onClick={() => history.goBack()}>
              {'<=='}
            </MDBBtn>
>>>>>>> 68ddc4278488b8c9366463776bc8b4ebcdac3fa8
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
