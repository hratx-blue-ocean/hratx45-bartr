import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
  MDBIcon,
  MDBLink
} from "mdbreact";
import { Link as rLink } from "react-router-dom";
import "../assets/styles/spacingHelpers.scss";
import "../assets/styles/theme.scss";

/**
 * Container for holding Row and Col tags cleanly, built upon MDBContainer
 * @param {string} id - id of the element
 * @param {string} className - Any custom classes to apply
 * @param {boolean} nopad - Set compononet to NOT apply default padding
 */
export const Grid = ({ id = "", className = "", nopad = false, children }) => (
  <MDBContainer
    id={id}
    fluid
    className={`${nopad ? "" : "null-space"} ${className}`}
  >
    {children}
  </MDBContainer>
);

/**
 * Container for holding Col tags,
 * not recommended to put elements directly in Rows without Cols
 * @param {boolean} nopad - Set compononet to NOT apply default padding
 * @param {string} id - id of the element
 * @param {string} className - Any custom classes to apply
 */
export const Row = ({
  id = "",
  className = "",
  nopad = false,
  start,
  end,
  center,
  children
}) => (
  <MDBRow
    id={id}
    start={start}
    center={center}
    end={end}
    className={`margin-none ${nopad ? "" : "pad-edge-left"} ${className}`}
  >
    {children}
  </MDBRow>
);

/**
 * A container for holding design elements and resizing based on screen size.
 * The device parameters specify how many columns (out of 12)
 * the element should span when viewed on that device size.
 * @param {boolean} nopad - Set compononet to NOT apply default padding
 * @param {number} mobile - The number of columns the element should span on mobile
 * @param {number} tablet - The number of columns the element should span on tablet
 * @param {number} desktop - The number of columns the element should span on desktop
 * @param {string} id - id of the element
 * @param {string} className - Any custom classes to apply
 */
export const Col = ({
  id = "",
  className = "",
  children,
  nopad = false,
  mobile = "",
  bigMobile = "",
  tablet = "",
  bigTablet = "",
  desktop = "",
  center = false,
  left = false,
  right = false
}) => (
  <MDBCol
    id={id}
    size={mobile}
    sm={bigMobile}
    md={tablet}
    lg={bigTablet}
    xl={desktop}
    className={`margin-none ${nopad ? "" : "pad-col"} ${className}`}
  >
    {children}
  </MDBCol>
);

/**
 * Button component build upon MDBBtn. Margins have been
 * nullified and padding normalized to 0.5 rem on the inside
 * @param {string} color - theme color tou use for the button
 * @param {string} id - id of the element
 * @param {string} className - Any custom classes to apply
 * @param {string} onClick - function to run on click
 */
export const Button = ({
  id = "",
  className = "",
  color = "",
  onClick,
  children
}) => (
  <MDBBtn
    id={id}
    className={`pad-all-half ${className}`}
    color={color}
    style={{
      margin: "0"
    }}
    onClick={onClick}
  >
    {children}
  </MDBBtn>
);

/**
 * Basic panel component with no margins, rounded corners,
 * drop shadow, and thin border. Built upon MDBContainer.
 * Can be used in place of Grid to hold rows and cols.
 * @param {string} id - id of the element
 * @param {string} className - Any custom classes to apply
 */
export const Card = ({ id = "", className = "", children }) => (
  <MDBContainer
    id={id}
    fluid
    className={`null-space rounded shadow-static border-thin color-border-lite ${className}`}
  >
    {children}
  </MDBContainer>
);

/**
 * Basic wrapper for MDBIcon, all props are inherited
 * @param {string} icon - Name of icon to use from MDBIcon list
 */
export const Icon = props => <MDBIcon {...props} />;

/**
 * A divider component that consists of a centered text string
 * with horizonal-rules on each side.
 * @param {string} label - The text to display in the divider
 * @param {boolean} nopad - Set compononet to NOT apply default padding
 * @param {string} id - id of the element
 * @param {string} className - Any custom classes to apply
 */
export const Divider = ({
  id = "",
  className = "",
  nopad = false,
  label = ""
}) => (
  <Grid id={id} className={className}>
    <Row>
      <Col>
        <hr />
      </Col>
      <Col className="center">{label}</Col>
      <Col>
        <hr />
      </Col>
    </Row>
  </Grid>
);

/**
 * Basic wrapper for MDBLink
 * @param {string} to - The react router path to redirect to
 * @param {string} id - id of the element
 * @param {string} className - Any custom classes to apply
 * @param {string} onClick - function to run on click
 */
export const Link = ({
  id = "",
  className = "",
  to = "#",
  children,
  onClick
}) => (
  <MDBLink id={id} className={className} to={to} onClick={onClick}>
    {children}
  </MDBLink>
);

/**
 * An EZ solution for rendering items into a grid, simply specify the col settings
 * and class names, then place the items you want to be in the grid as child elements
 * @param {boolean} nopad - Set compononet to NOT apply default padding
 * @param {number} mobile - The number of columns the element should span on mobile
 * @param {number} tablet - The number of columns the element should span on tablet
 * @param {number} desktop - The number of columns the element should span on desktop
 * @param {string} id - id of the element
 * @param {string} className - Any custom classes to apply to PARENT CLASS
 * @param {string} classNameCol - Any custom classes to apply to EACH CHILD COL
 */
export const AutoGrid = ({
  id = "",
  className = "",
  classNameCol = "",
  children,
  mobile = "",
  tablet = "",
  desktop = ""
}) => (
  <Grid id={id} className={className}>
    <Row>
      {children.map(child => (
        <Col
          className={classNameCol}
          mobile={mobile}
          tablet={tablet}
          desktop={desktop}
        >
          {child}
        </Col>
      ))}
    </Row>
  </Grid>
);
