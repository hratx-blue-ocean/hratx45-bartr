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
              fontSize: "1.3em"
            }}
          >
            {props.item.product_name}
          </MDBCardTitle>
          <MDBCardText style={{ fontWeight: "100", height: "auto" }}>
            <MDBContainer
              style={{
                textAlign: "center",
                marginTop: "-5px"
              }}
            >
              Value: {props.item.value.toLocaleString()}
            </MDBContainer>
            {props.item.up_for_trade === "True" ? (
              <MDBContainer style={{ color: "green", textAlign: "right" }}>
                Available
              </MDBContainer>
            ) : (
              <MDBContainer style={{ color: "red", textAlign: "right" }}>
                Not Available
              </MDBContainer>
            )}
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
                fontSize: "x-small",
                marginTop: "auto",
                marginRight: "0",
                marginLeft: "0"
              }}
            >
              Posted: {props.item.posted_date}
            </MDBContainer>

            <Link to={`/ItemDetail/${props.item.product_id}`}>
              <MDBBtn
                style={{
                  width: "100%",
                  justifyContent: "center",
                  float: "right"
                }}
              >
                View Item...
              </MDBBtn>
            </Link>
          </MDBContainer>
        </MDBCard>
      </MDBCardBody>
    </MDBContainer>
  ) : null;

export default FeedScreenListItem;
