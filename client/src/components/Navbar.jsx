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
  const { userId } = useSelector(store => store.userInfo);
  const history = useHistory();
  console.log('re-render, browser location: ', location);
  // const newMessages = useSelector(store => store.messages).unread;
  return (
    <>
      {' '}
      {userId !== -1 ? (
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
              <Link to="/feed" className="logoLink">
                <img
                  src="https://paperclip.link/data/images/misc/logo_white.png"
                  width="75%"
                />
              </Link>
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
      ) : (
        ''
      )}
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
              onClick={() => setOpen('false')}
            >
              <Row nopad className="pad-none">
                <Col mobile="10" nopad className="pad-none align-right">
                  Profile
                </Col>
                <Col mobile="2" nopad className="pad-none align-center">
                  <Icon icon="user" size="lg" />
                </Col>
              </Row>
            </Link>
          </Col>
          <Col mobile="12">
            <Link
              to="/feed"
              className="margin-none pad-none color-purp-light font-double font-bold"
              onClick={() => {
                setOpen('false');
              }}
            >
              <Row nopad className="pad-none">
                <Col mobile="10" nopad className="pad-none align-right">
                  Feed
                </Col>
                <Col mobile="2" nopad className="pad-none align-center">
                  <Icon icon="rss" size="lg" />
                </Col>
              </Row>
            </Link>
          </Col>
          <Col mobile="12">
            <Link
              to="/messages"
              className="margin-none pad-none color-purp-light font-double font-bold"
              onClick={() => setOpen('false')}
            >
              <Row nopad className="pad-none">
                <Col mobile="10" nopad className="pad-none align-right">
                  Messages
                </Col>
                <Col mobile="2" nopad className="pad-none align-center">
                  <Icon icon="comments" size="lg" />
                </Col>
              </Row>
            </Link>
          </Col>
          <Col mobile="12">
            <Link
              to="/trade"
              className="margin-none pad-none color-purp-light font-double font-bold"
              onClick={() => setOpen('false')}
            >
              <Row nopad className="pad-none">
                <Col mobile="10" nopad className="pad-none align-right">
                  Up For Trade
                </Col>
                <Col mobile="2" nopad className="pad-none align-center">
                  <Icon icon="exchange-alt" size="lg" />
                </Col>
              </Row>
            </Link>
          </Col>
          <Col mobile="12">
            <Link
              to="/active-offers"
              className="margin-none pad-none color-purp-light font-double font-bold"
              onClick={() => setOpen('false')}
            >
              <Row nopad className="pad-none">
                <Col mobile="10" nopad className="pad-none align-right">
                  Active Offers
                </Col>
                <Col mobile="2" nopad className="pad-none align-center">
                  <Icon icon="fire-alt" size="lg" />
                </Col>
              </Row>
            </Link>
          </Col>
        </Row>
      </Grid>
      <div
        id="nav-modal"
        className={`open-${isOpen}`}
        onClick={() => setOpen('false')}
      />
    </>
  );
};

export default Navbar;

// --------------------------------------------------------------------------------------------------
