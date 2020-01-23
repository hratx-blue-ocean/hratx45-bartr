// https://mdbootstrap.com/docs/react/navigation/navbar/
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import "../assets/styles/navbar.scss";
import "../assets/styles/theme.scss";
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
} from "mdbreact";
import {
  Row,
  Col,
  Grid,
  Icon,
  Button,
  Link
} from "../components/CustomComponents";

const collapseType = "collapse2";

const Navbar = ({ title, location }) => {
  const [isOpen, setOpen] = useState("false");
  const { userId } = useSelector(store => store.userInfo);
  const history = useHistory();
  console.log("re-render, browser location: ", location);
  // const newMessages = useSelector(store => store.messages).unread;
  return (
    <>
      <Grid
        id="nav-bar"
        nopad
        className="color-purp rounded-large-top shadow-static-up pad-edge-top"
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
            <Link to="/" className="logo-link pad-none">
              <img
                src="https://paperclip.link/data/images/misc/logo_white.png"
                className="nav-logo"
              />
            </Link>
          </Col>
          <Col className="pad-all margin-none center" mobile="2">
            <MDBIcon
              icon="bars"
              size="2x"
              onClick={() => setOpen(isOpen === "false" ? "true" : "false")}
            />
          </Col>
        </Row>
      </Grid>
      <Grid
        id="nav-drawer"
        nopad
        className={`color-default rounded-large shadow-static-up open-${isOpen} color-purp-light border-thin`}
      >
        <Row center className="">
          {userId !== -1 ? (
            <>
              <Col
                mobile="12"
                bigMobile="4"
                desktop="2"
                className="align-center"
              >
                <Link
                  to="/f"
                  className="margin-none pad-none color-purp-light font-double font-bold"
                  onClick={() => {
                    setOpen("false");
                  }}
                >
                  Home
                  <Icon icon="home" size="lg" className="pad-edge-left" />
                </Link>
              </Col>
              <Col
                mobile="12"
                bigMobile="4"
                desktop="2"
                className="align-center"
              >
                <Link
                  to="/feed"
                  className="margin-none pad-none color-purp-light font-double font-bold"
                  onClick={() => {
                    setOpen("false");
                  }}
                >
                  Feed
                  <Icon icon="rss" size="lg" className="pad-edge-left" />
                </Link>
              </Col>
              <Col
                mobile="12"
                bigMobile="4"
                desktop="2"
                className="align-center"
              >
                <Link
                  to="/messages"
                  className="margin-none pad-none color-purp-light font-double font-bold"
                  onClick={() => setOpen("false")}
                >
                  Messages
                  <Icon icon="comments" size="lg" className="pad-edge-left" />
                </Link>
              </Col>
              <Col
                mobile="12"
                bigMobile="4"
                desktop="2"
                className="align-center"
              >
                <Link
                  to="/trade"
                  className="margin-none pad-none color-purp-light font-double font-bold"
                  onClick={() => setOpen("false")}
                >
                  Up For Trade
                  <Icon
                    icon="exchange-alt"
                    size="lg"
                    className="pad-edge-left"
                  />
                </Link>
              </Col>
              <Col
                mobile="12"
                bigMobile="4"
                desktop="2"
                className="align-center"
              >
                <Link
                  to="/active-offers"
                  className="margin-none pad-none color-purp-light font-double font-bold"
                  onClick={() => setOpen("false")}
                >
                  Active Offers
                  <Icon icon="fire-alt" size="lg" className="pad-edge-left" />
                </Link>
              </Col>
              <Col
                mobile="12"
                bigMobile="4"
                desktop="2"
                className="align-center"
              >
                <Link
                  to="/profile"
                  className="margin-none pad-none color-purp-light font-double font-bold"
                  onClick={() => setOpen("false")}
                >
                  Profile
                  <Icon icon="user" size="lg" className="pad-edge-left" />
                </Link>
              </Col>
            </>
          ) : (
            <>
              <Col
                mobile="12"
                bigMobile="4"
                desktop="2"
                className="align-center"
              >
                <Link
                  to="/login"
                  className="margin-none pad-none color-purp-light font-double font-bold"
                  onClick={() => setOpen("false")}
                >
                  Login
                  <Icon
                    icon="sign-in-alt"
                    size="lg"
                    className="pad-edge-left"
                  />
                </Link>
              </Col>
              <Col
                mobile="12"
                bigMobile="4"
                desktop="2"
                className="align-center"
              >
                <Link
                  to="/"
                  className="margin-none pad-none color-purp-light font-double font-bold"
                  onClick={() => setOpen("false")}
                >
                  Home
                  <Icon icon="home" size="lg" className="pad-edge-left" />
                </Link>
              </Col>
            </>
          )}
        </Row>
      </Grid>
      <div
        id="nav-modal"
        className={`open-${isOpen}`}
        onClick={() => setOpen("false")}
      />
    </>
  );
};

export default Navbar;

// --------------------------------------------------------------------------------------------------
