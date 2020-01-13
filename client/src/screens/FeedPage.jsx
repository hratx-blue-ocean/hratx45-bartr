import React from "react";
import Container from "@material-ui/core/Container";
import FeedPageList from "../components/FeedPageList.jsx";
import {
  MDBBtn,
  MDBContainer,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBInput
} from "mdbreact";

class FeedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: "Distance"
    };
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(event) {
    this.setState({
      currentFilter: event
    });
  }

  render() {
    return (
      <MDBContainer className="w-50 p-3">
        <MDBInput label="Search by Keyword" size="lg"></MDBInput>
        <MDBBtn className="testButton" size="lg">
          Search
        </MDBBtn>

        <div id="entireDropDownContainer">
          <MDBDropdown>
            <MDBDropdownToggle caret color="primary">
              Filter by...
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <MDBDropdownItem
                value="Distance"
                id="filterByDistance"
                onClick={() =>
                  this.handleFilter(
                    document.getElementById("filterByDistance").innerHTML
                  )
                }
              >
                Distance
              </MDBDropdownItem>
              <MDBDropdownItem
                value="Value"
                id="filterByValue"
                onClick={() =>
                  this.handleFilter(
                    document.getElementById("filterByValue").innerHTML
                  )
                }
              >
                Value
              </MDBDropdownItem>
              <MDBDropdownItem
                value="Date"
                id="filterByDate"
                onClick={() =>
                  this.handleFilter(
                    document.getElementById("filterByDate").innerHTML
                  )
                }
              >
                Date
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>

          <div id="filteringByText">
            Filtering by: {this.state.currentFilter}
          </div>
        </div>

        <div id="feedPageProducrtListContainer">
          <FeedPageList />
        </div>
      </MDBContainer>
    );
  }
}

export default FeedPage;
