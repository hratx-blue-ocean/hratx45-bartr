import React from "react";
import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle
} from "mdbreact";

const FeedScreenDropDown = props => (
  <MDBDropdown>
    <MDBDropdownToggle caret color="primary">
      Filter by...
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
        value="Date Posted"
        id="filterByDate"
        onClick={e => props.handleFilterTextChange(e.target.value)}
      >
        Date Posted
      </MDBDropdownItem>
    </MDBDropdownMenu>
  </MDBDropdown>
);

export default FeedScreenDropDown;
