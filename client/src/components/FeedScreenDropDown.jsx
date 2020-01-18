import React from "react";
import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle
} from "mdbreact";

const FeedScreenDropDown = props => (
  <MDBDropdown>
    <MDBDropdownToggle caret color="primary" style={{ width: "auto" }}>
      Filter
    </MDBDropdownToggle>
    <MDBDropdownMenu basic>
      <MDBDropdownItem
        value="Distance"
        id="filterByDistance"
        onClick={e => props.handleFilterTextChange(e.target.value)}
      >
        Distance
      </MDBDropdownItem>
      <MDBDropdownItem
        value="Value (Highest First)"
        id="filterByValueHigh"
        onClick={e => props.handleFilterTextChange(e.target.value)}
      >
        Value (Highest First)
      </MDBDropdownItem>
      <MDBDropdownItem
        value="Value (Lowest First)"
        id="filterByValueLow"
        onClick={e => props.handleFilterTextChange(e.target.value)}
      >
        Value (Lowest First)
      </MDBDropdownItem>
      <MDBDropdownItem
        value="Date (Newest First)"
        id="filterByDateNew"
        onClick={e => props.handleFilterTextChange(e.target.value)}
      >
        Date (Newest First)
      </MDBDropdownItem>
      <MDBDropdownItem
        value="Date (Oldest First)"
        id="filterByDateOld"
        onClick={e => props.handleFilterTextChange(e.target.value)}
      >
        Date (Oldest First)
      </MDBDropdownItem>
    </MDBDropdownMenu>
  </MDBDropdown>
);

export default FeedScreenDropDown;
