import React from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBBtn, MDBIcon } from 'mdbreact';
import '../assets/styles/spacingHelpers.scss';
import '../assets/styles/theme.scss';

/**
 * Container for holding Row and Col tags cleanly, built upon MDBContainer
 * @param {string} className - Any custom classes to apply
 */
export const Grid = ({ className = '', children }) => (
  <MDBContainer fluid className={`null-space ${className}`}>
    {children}
  </MDBContainer>
);

/**
 * Container for holding Col tags,
 * not recommended to put elements directly in Rows without Cols
 * @param {string} className - Any custom classes to apply
 */
export const Row = ({ className = '', nopad = false, children }) => (
  <MDBRow
    className={`margin-none ${nopad ? '' : 'pad-edge-left'} ${className}`}
  >
    {children}
  </MDBRow>
);

/**
 * A container for holding design elements and resizing based on screen size.
 * The device parameters specify how many columns (out of 12)
 * the element should span when viewed on that device size.
 * @param {string} className - Any custom classes to apply
 * @param {number} mobile - The number of columns the element should span on mobile
 * @param {number} tablet - The number of columns the element should span on tablet
 * @param {number} desktop - The number of columns the element should span on desktop
 */
export const Col = ({
  className = '',
  children,
  nopad = false,
  mobile = '',
  tablet = '',
  desktop = ''
}) => (
  <MDBCol
    size={mobile}
    md={tablet}
    xl={desktop}
    className={`margin-none ${nopad ? '' : 'pad-col'} ${className}`}
  >
    {children}
  </MDBCol>
);

export const Button = ({ className = '', color = '', onClick, children }) => (
  <MDBBtn
    className={`pad-all-half rounded ${className}`}
    color={color}
    style={{
      margin: '0'
    }}
    onClick={onClick}
  >
    {children}
  </MDBBtn>
);

export const Card = ({ className = '', children }) => (
  <MDBContainer
    fluid
    className={`null-space rounded shadow-static border-thin color-border-lite ${className}`}
  >
    {children}
  </MDBContainer>
);

export const Icon = props => <MDBIcon {...props} />;

export const Divider = ({ className = '', nopad = false, label = '' }) => (
  <Grid className={className}>
    <Row>
      <Col>
        <Row className="border-bottom"></Row>
        <Row></Row>
      </Col>
      <Col>{label}</Col>
      <Col>
        <Row className="border-bottom"></Row>
        <Row></Row>
      </Col>
    </Row>
  </Grid>
);

export const AutoGrid = ({
  className = '',
  classNameCol = '',
  children,
  mobile = '',
  tablet = '',
  desktop = ''
}) => (
  <Grid className={className}>
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
