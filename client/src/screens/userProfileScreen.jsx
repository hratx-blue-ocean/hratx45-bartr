import React, { useState } from "react";
import { connect } from "react-redux";
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
  MDBListGroupItem
} from "mdbreact";
//author -- Matt Lucas

const UserProfile = ({}) => {
  const [collapse1, setCollapse1] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  return (
    <MDBContainer>
      <MDBRow id="red">
        <MDBCol className="col-test"></MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol className="col-test">
          <MDBCard>
            <MDBContainer className="col-test">
              <MDBRow>
                <MDBCol className="col-test">
                  <MDBCardImage src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol className="col-test">
                  <MDBCardTitle>City, State, Country</MDBCardTitle>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol className="col-test">
                  <MDBCardText>User Name</MDBCardText>
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
        <MDBCol className="col-test">
          <MDBBtn>Upload an Item</MDBBtn>
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
          <MDBCollapse id="collapse1" isOpen={collapse1}></MDBCollapse>
          <MDBCardBody>
            <p>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
            </p>
          </MDBCardBody>

          <MDBCollapseHeader
            onClick={() => setCollapse2(collapse2 === false ? true : false)}
            tag="h4"
          >
            Completed Barters
          </MDBCollapseHeader>
          <MDBCollapse id="collapse1" isOpen={collapse2}></MDBCollapse>
          <MDBCardBody>
            <p>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
            </p>
          </MDBCardBody>
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
