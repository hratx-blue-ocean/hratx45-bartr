// https://mdbootstrap.com/docs/react/navigation/navbar/
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';
import '../assets/styles/navbar.scss';
import '../assets/styles/theme.scss';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse,
  MDBContainer,
  MDBHamburgerToggler,
  MDBBtn,
  MDBDropdown,
  MDBRow,
  MDBCol,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownToggle,
  MDBIcon
} from 'mdbreact';

const collapseType = 'collapse2';

const Navbar = ({ title, location }) => {
  const [isOpen, setOpen] = useState(false);
  const history = useHistory();
  console.log('re-render, browser location: ', location);
  // const newMessages = useSelector(store => store.messages).unread;
  return (
    <MDBContainer
      id="nav-bar"
      className="main-color pad-none margin-none"
      fluid
    >
      <MDBRow className="pad-none margin-none fill">
        <MDBCol className="pad-bucket-right margin-none center" size="2" xs="2">
          <MDBIcon
            icon="arrow-alt-circle-left"
            size="2x"
            onClick={() => history.goBack()}
          />
        </MDBCol>
        <MDBCol className="pad-bucket-right margin-none center" size="6" xs="6">
          Paperclips
        </MDBCol>
        <MDBCol className="pad-all margin-none center" size="4" xs="4">
          <MDBDropdown dropup>
            <MDBDropdownToggle className="pad-none margin-none">
              <MDBIcon icon="bars" size="2x" />
            </MDBDropdownToggle>
            <MDBDropdownMenu right basic>
              <MDBDropdownItem>
                <MDBNavLink to="/profile">Profile</MDBNavLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBNavLink to="/feed">Feed</MDBNavLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBNavLink to="/messages">Messages</MDBNavLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBNavLink to="/trade">Up For Trade</MDBNavLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBNavLink to="/active-offers">Active Offers</MDBNavLink>
              </MDBDropdownItem>
              {/* <MDBDropdownItem>
                <MDBNavLink to="/theme">*THEME TEST*</MDBNavLink>
              </MDBDropdownItem> */}
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Navbar;

// --------------------------------------------------------------------------------------------------
