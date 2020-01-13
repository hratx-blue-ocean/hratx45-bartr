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
    <MDBContainer>
      <MDBContainer>Name: {props.item.product_name}</MDBContainer>
      <MDBContainer>Value: {props.item.value}</MDBContainer>
    </MDBContainer>
  ) : null;

export default FeedPageListItem;
