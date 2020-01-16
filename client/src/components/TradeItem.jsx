import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBView,
  MDBIcon,
  MDBBtn
} from 'mdbreact';
import '../assets/styles/spacingHelpers.scss';

const TradeItem = ({
  data,
  onClick,
  onDelete,
  image,
  ownItem = true,
  showDelete = true
}) => {
  const {
    product_id,
    user_id,
    category_id,
    product_name,
    value,
    up_for_trade
  } = data;
  const location = 'right behind you...';
  return (
    <MDBCard className="trade-item rounded">
      <MDBRow className="margin-none pad-none">
        <MDBCol className="pad-none" size="4" xs="4">
          <img
            src={image}
            className="width-contain rounded clip-half box-shadow"
            alt={data.product_name}
          />
        </MDBCol>
        <MDBCol size="7" xs="7">
          <MDBRow className="pad-none">
            <MDBCol className="pad-none" size="12" xs="12">
              {product_name}
            </MDBCol>
          </MDBRow>
          <MDBRow className="pad-none">
            <MDBCol className="pad-none" size="12" xs="12">
              Worth: {value}
            </MDBCol>
          </MDBRow>
          {!ownItem ? (
            <MDBRow className="pad-none">
              <MDBCol className="pad-none" size="12" xs="12">
                Location: {location}
              </MDBCol>
            </MDBRow>
          ) : (
            ''
          )}
        </MDBCol>
        {showDelete ? (
          <MDBCol
            className="pad-none cancel dark center border rounded"
            size="1"
            xs="1"
          >
            <MDBIcon className="cancel dark" far icon="times-circle" />
          </MDBCol>
        ) : (
          ''
        )}
      </MDBRow>
    </MDBCard>
  );
};
export default TradeItem;
