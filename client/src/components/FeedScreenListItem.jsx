import React from "react";
import { MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";

const FeedScreenListItem = props =>
  props.item.public ? (
    <Link to={`/ItemDetail/${props.item.product_id}`}>
      <MDBContainer
        id="feed-screen-list-item"
        style={{ borderTop: "1px solid gray", cursor: "pointer" }}
      >
        <MDBContainer style={{ justifyContent: "center", textAlign: "center" }}>
          PHOTO
        </MDBContainer>
        <MDBContainer style={{ color: "black" }}>
          Name: {props.item.product_name}
        </MDBContainer>
        <MDBContainer style={{ color: "black" }}>
          Value: {+props.item.value}
        </MDBContainer>
        <MDBContainer style={{ color: "black" }}>
          Date Posted: {props.item.posted_date}
        </MDBContainer>
        <MDBContainer style={{ color: "black" }}>
          Available? {props.item.up_for_trade === "True" ? "Yes" : "No"}
        </MDBContainer>
      </MDBContainer>
    </Link>
  ) : null;

export default FeedScreenListItem;
