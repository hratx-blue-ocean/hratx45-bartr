import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';
// import Navbar from '../components/Navbar';
import userDb from '../dummy_data/users';
import productDb from '../dummy_data/products';
import Searchbar from '../components/Searchbar';
import TradeItem from '../components/TradeItem';
// import '../assets/styles/upForTradeScreen.scss';

const ActiveOffersScreen = () => {
  const user = userDb[2];
  const other = userDb[1];
  return (
    <MDBContainer fluid id="active-offers-screen">
      <MDBRow className="pad-none margin-none">
        <MDBCol className="pad-bucket center" size="12" xs="12">
          Active Offers
        </MDBCol>
      </MDBRow>
      <MDBRow className="pad-none margin-none">
        <MDBCol className="margin-none pad-bucket center" size="12" xs="12">
          Offers You've Made
        </MDBCol>
      </MDBRow>
      {productDb
        .filter(p => p.user_id === user.user_id && p.up_for_trade)
        .map(p => (
          <MDBRow className="pad-none">
            <MDBCol className="pad-bucket-plus" size="12" xs="12">
              <TradeItem
                data={p}
                onClick={() => {}}
                image={
                  'https://i.kym-cdn.com/entries/icons/mobile/000/025/765/Screen_Shot_2018-03-23_at_1.55.44_PM.jpg'
                }
              />
            </MDBCol>
          </MDBRow>
        ))}
      <MDBRow className="pad-none margin-none">
        <MDBCol className="margin-none pad-bucket center" size="12" xs="12">
          Offers You've Recieved
        </MDBCol>
      </MDBRow>
      {productDb
        .filter(p => p.user_id === other.user_id && p.up_for_trade)
        .map(p => (
          <MDBRow className="pad-none">
            <MDBCol className="pad-bucket-plus" size="12" xs="12">
              <TradeItem
                data={p}
                onClick={() => {}}
                image={
                  'https://i.kym-cdn.com/entries/icons/mobile/000/025/765/Screen_Shot_2018-03-23_at_1.55.44_PM.jpg'
                }
              />
            </MDBCol>
          </MDBRow>
        ))}
    </MDBContainer>
  );
};
export default ActiveOffersScreen;
