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
        <MDBCard style={{ width: "75vw", height: "auto", textAlign: "left" }}>
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
              textAlign: "center",
              marginTop: "5px",
              fontWeight: "bold",
              fontSize: "1em"
            }}
          >
            {props.item.product_name}
          </MDBCardTitle>
          <MDBCardText style={{ fontWeight: "100" }}>
            <MDBContainer
              style={{
                textAlign: "center",
                marginTop: "-5px"
              }}
            >
              Value: ${props.item.value.toLocaleString()}
            </MDBContainer>
            <MDBContainer
              style={{ color: "black", textAlign: "right", marginTop: "10%" }}
            >
              Available? {props.item.up_for_trade === "True" ? "Yes" : "No"}
            </MDBContainer>
          </MDBCardText>
          <MDBContainer
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <MDBContainer
              style={{
                color: "black",
                padding: "0",
                width: "auto",
                fontSize: "x-small"
              }}
            >
              Posted: {props.item.posted_date}
            </MDBContainer>
            <MDBContainer
              style={{
                width: "auto",
                marginRight: "3px",
                marginBottom: "5px",
                float: "right"
              }}
            >
              <Link to={`/ItemDetail/${props.item.product_id}`}>
                <MDBBtn style={{ width: "100%", justifyContent: "center" }}>
                  View Item...
                </MDBBtn>
              </Link>
            </MDBContainer>
          </MDBContainer>
        </MDBCard>
      </MDBCardBody>
    </MDBContainer>
  ) : null;

export default FeedScreenListItem;
