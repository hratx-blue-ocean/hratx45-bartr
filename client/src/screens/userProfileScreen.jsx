import React, { useState } from "react";
import { connect } from "react-redux";
import data from "../dummy_data/products";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCollapse,
  MDBCollapseHeader,
  MDBListGroup,
  MDBListGroupItem,
  MDBNavLink
} from "mdbreact";
//author -- Matt Lucas

const UserProfile = ({}) => {
  console.log(data);
  const [collapse1, setCollapse1] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol className="col-test"></MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol className="col-test">
          <MDBCard>
            <MDBContainer className="col-test">
              <MDBRow>
                <MDBCol className="col-test">
                  <MDBCardImage
                    src="https://ca.slack-edge.com/T2SVC7RB3-ULBGPCN2Y-ba2e48877a9b-512"
                    className="img-fluid img-thumbnail rounded mx-auto d-block"
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol className="col-test">
                  <MDBCardTitle>Austin, TX</MDBCardTitle>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol className="col-test">
                  <MDBCardText>Arohan Dutt</MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol className="col-test">
                  <MDBBtn>Your Items</MDBBtn>
                </MDBCol>
                <MDBCol className="col-test">
                  <MDBBtn>Wish List</MDBBtn>
                </MDBCol>
                <MDBCol className="col-test">
                  <MDBBtn>Active Offers</MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol className="text-center">
          <MDBNavLink to="/uploadItem">
            <MDBBtn>Upload an Item</MDBBtn>
          </MDBNavLink>
        </MDBCol>
      </MDBRow>
      <MDBContainer>
        <MDBCard>
          <MDBCollapseHeader
            onClick={() => setCollapse1(collapse1 === false ? true : false)}
            tag="h4"
          >
            Recent Activity
          </MDBCollapseHeader>
          <MDBCollapse id="collapse1" isOpen={collapse1}>
            <MDBCardBody>
              <p>Coming in Version 2.0!</p>
            </MDBCardBody>
          </MDBCollapse>

          <MDBCollapseHeader
            onClick={() => setCollapse2(collapse2 === false ? true : false)}
            tag="h4"
          >
            Completed Barters
          </MDBCollapseHeader>
          <MDBCollapse id="collapse2" isOpen={collapse2}>
            <MDBCardBody>
              <p>
                You traded a paperclip for a house
                <hr />
                You traded a laptop for a used laptop
                <hr />
                You traded a pizza for a pineapple
              </p>
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>
      </MDBContainer>
    </MDBContainer>
  );
};
export default UserProfile;

// <MDBCardImage
//           cascade
//           src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
//         />
//         <MDBCardTitle>User Name</MDBCardTitle>

//         <MDBCard narrow>
//       </MDBCard>
