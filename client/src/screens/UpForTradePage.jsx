import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import '../assets/styles/grid.scss';

const UpForTradePade = () => {
  return (
    <MDBContainer fluid>
      <MDBRow className="grid-no-padding">
        <MDBCol className="grid-no-padding" size="12" xs="12">
          <Navbar />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol className="center-contents" size="12" xs="12">
          Up For Trade
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size="12" xs="12">
          <Searchbar onChange={() => {}} />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol className="center-contents" size="12" xs="12">
          {[1, 2, 3, 4, 5].map(i => (
            <div>Item Number {i}</div>
          ))}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
export default UpForTradePade;
