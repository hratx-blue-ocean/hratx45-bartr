import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBInput
} from "mdbreact";

const FeedPageListItem = props =>
  props.item.public ? (
    <MDBContainer style={{ borderTop: "1px solid gray" }}>
      <MDBContainer>Name: {props.item.product_name}</MDBContainer>
      <MDBContainer>Value: {props.item.value}</MDBContainer>
      <MDBContainer>
        Available? {props.item.up_for_trade ? "Yes" : "No"}
      </MDBContainer>
    </MDBContainer>
  ) : null;

export default FeedPageListItem;
