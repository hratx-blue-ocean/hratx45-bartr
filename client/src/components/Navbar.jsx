// https://mdbootstrap.com/docs/react/navigation/navbar/
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
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
import {
  Row,
  Col,
  Grid,
  Icon,
  Button,
  Link
} from '../components/CustomComponents';

const collapseType = 'collapse2';

const Navbar = ({ title, location }) => {
  const [isOpen, setOpen] = useState('false');
  const history = useHistory();
  console.log('re-render, browser location: ', location);
  // const newMessages = useSelector(store => store.messages).unread;
  return (
    <>
      <Grid
        id="nav-bar"
        nopad
        className="color-purp rounded-large shadow-static-up"
      >
        <Row>
          <Col className="center" mobile="2">
            <Icon
              icon="arrow-alt-circle-left"
              size="2x"
              onClick={() => history.goBack()}
            />
          </Col>
          <Col className="center font-bold font-triple" mobile="8">
            Paperclips
          </Col>
          <Col className="pad-all margin-none center" mobile="2">
            <MDBIcon
              icon="bars"
              size="2x"
              onClick={() => setOpen(isOpen === 'false' ? 'true' : 'false')}
            />
          </Col>
        </Row>
      </Grid>
      <Grid
        id="nav-drawer"
        nopad
        className={`color-default rounded-large shadow-static-up open-${isOpen} color-purp-light border-thin`}
      >
        <Row>
          <Col mobile="12">
            <Link
              to="/profile"
              className="margin-none pad-none color-purp-light font-double font-bold"
            >
              Profile
            </Link>
          </Col>
          <Col mobile="12">
            <Link
              to="/feed"
              className="margin-none pad-none color-purp-light font-double font-bold"
            >
              Feed
            </Link>
          </Col>
          <Col mobile="12">
            <Link
              to="/messages"
              className="margin-none pad-none color-purp-light font-double font-bold"
            >
              Messages
            </Link>
          </Col>
          <Col mobile="12">
            <Link
              to="/trade"
              className="margin-none pad-none color-purp-light font-double font-bold"
            >
              Up For Trade
            </Link>
          </Col>
          <Col mobile="12">
            <Col mobile="10">
              <Link
                to="/active-offers"
                className="margin-none pad-none color-purp-light font-double font-bold"
              >
                Active Offers
              </Link>
            </Col>
            <Col mobile="2">
              <Icon
                icon="arrow-alt-circle-left"
                size="2x"
                onClick={() => history.goBack()}
              />
            </Col>
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default Navbar;

// --------------------------------------------------------------------------------------------------
