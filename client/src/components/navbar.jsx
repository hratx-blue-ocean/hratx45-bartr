// https://mdbootstrap.com/docs/react/navigation/navbar/
import React from "react";
import {
  MDBNavbar,
  MDBIcon,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";

/* Gets link button for navbar */
const getLink = (title, link) => {
  return (
    <MDBNavbarNav left>
      <MDBNavItem>
        <MDBNavLink to={`/dist${link}`}>{title}</MDBNavLink>
      </MDBNavItem>
    </MDBNavbarNav>
  );
};

const Navbar = props => {
  return (
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
    </MDBNavbar>
  );
};

export default Navbar;

// --------------------------------------------------------------------------------------------------
