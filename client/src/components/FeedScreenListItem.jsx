import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from "mdbreact";
import { Link } from "react-router-dom";

const FeedScreenListItem = props =>
  props.item.public ? (
    <Link to={`/ItemDetail/${props.item.product_id}`}>
      <MDBContainer
        id="feed-screen-list-item"
        style={{ marginTop: "10px", color: "black" }}
      >
        <MDBCardBody>
          <MDBCard style={{ width: "90vw", textAlign: "left" }}>
            <MDBCardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
              waves
            />
            <MDBCardTitle
              style={{
                marginTop: "5px",
                fontWeight: "bold",
                marginLeft: "10px"
              }}
            >
              Name: {props.item.product_name}
            </MDBCardTitle>
            <MDBCardText>
              <MDBContainer>
                Value: ${props.item.value.toLocaleString()}
              </MDBContainer>
              <MDBContainer style={{ color: "black" }}>
                Date Posted: {props.item.posted_date}
              </MDBContainer>
              <MDBContainer style={{ color: "black" }}>
                Available? {props.item.up_for_trade === "True" ? "Yes" : "No"}
              </MDBContainer>
            </MDBCardText>
            <MDBBtn>View...</MDBBtn>
          </MDBCard>
        </MDBCardBody>
      </MDBContainer>
    </Link>
  ) : null;

export default FeedScreenListItem;
