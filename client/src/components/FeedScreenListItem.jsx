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
    <MDBContainer
      id="feed-screen-list-item"
      style={{ marginTop: "10px", color: "black" }}
    >
      <MDBCardBody>
        <MDBCard style={{ width: "75vw", textAlign: "left" }}>
          <Link to={`/ItemDetail/${props.item.product_id}`}>
            <MDBCardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
              waves
              style={{ width: "100%" }}
            />
          </Link>
          <MDBCardTitle
            style={{
              marginTop: "5px",
              fontWeight: "bold",
              marginLeft: "10px"
            }}
          >
            {props.item.product_name}
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
          <MDBContainer
            style={{ width: "auto", marginRight: "3px", marginBottom: "5px" }}
          >
            <Link to={`/ItemDetail/${props.item.product_id}`}>
              <MDBBtn style={{ width: "100%", justifyContent: "center" }}>
                View Item...
              </MDBBtn>
            </Link>
          </MDBContainer>
        </MDBCard>
      </MDBCardBody>
    </MDBContainer>
  ) : null;

export default FeedScreenListItem;
