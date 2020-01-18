import React, { Component } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBInput,
  MDBListGroupItem,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody
} from 'mdbreact';

const PastOffer = props => {
  return (
    <MDBCard className="card">
      <MDBCardBody>
        <div key={props.index}>
          <div key={props.index} className="past-offer-list">
            <div className="past-offer-offerer">{props.item.offerer}</div>
            <div className="past-offer-traded">Traded</div>
            <div className="past-offer-offeree">{props.item.offeree}</div>
            <div>
              <div className="past-offer-desired-container">
                <img
                  src={props.item.desired_product_image}
                  className="past-offer-image"
                />
              </div>
              <div className="past-offer-desired-name">
                {props.item.desired_product_name}
              </div>
            </div>
            <div className="past-offer-for">for</div>
            <div className="past-offer-offered-names">
              {props.item.offered_product_names.map((item, index) => {
                return <div key={index}>{item}</div>;
              })}
            </div>
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default PastOffer;
