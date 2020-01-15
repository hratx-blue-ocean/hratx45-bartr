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

const FeedScreenListItem = props =>
  props.item.public ? (
    <MDBContainer
      id="feed-screen-list-item"
      style={{ borderTop: "1px solid gray" }}
    >
      <MDBContainer>Name: {props.item.product_name}</MDBContainer>
      {/* <MDBContainer className="font-italic">
        {props.item.product_description}
      </MDBContainer> */}
      <MDBContainer>Value: {+props.item.value}</MDBContainer>
      <MDBContainer>Date Posted: {props.item.posted_date}</MDBContainer>
      <MDBContainer>
        Available? {props.item.up_for_trade === "True" ? "Yes" : "No"}
      </MDBContainer>
    </MDBContainer>
  ) : null;

export default FeedScreenListItem;
