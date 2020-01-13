import React from "react";
import Axios from "axios";
import FeedPageListItem from "../components/FeedPageListItem.jsx";
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
      currentFilter: "Distance",
      productsToDisplay: []
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  handleFilter(event) {
    this.setState({
      currentFilter: event
    });
  }

  getProducts() {
    // ! ping db using filter eventually, for now, this is unfiltered data
    Axios.get(
      `http://api-server.escxwv87wi.us-west-2.elasticbeanstalk.com/api/testing/test-postgres/products`
    )

      .then(data =>
        this.setState({
          productsToDisplay: data.data
        })
      )
      .catch(console.log);
  }

  componentDidMount() {
    this.getProducts();
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

        <div id="feedPageProductListContainer">
          {this.state.productsToDisplay
            ? this.state.productsToDisplay.map((item, key) => (
                <FeedPageListItem
                  key={key}
                  itemProduct_id={item.product_id}
                  itemUser_id={item.user_id}
                  itemCategory={item.category_id}
                  itemName={item.product_name}
                  itemValue={item.value}
                  itemUpForTrade={item.up_for_trade}
                  itemPublic={item.public}
                />
              ))
            : null}
        </div>
      </MDBContainer>
    );
  }
}

export default FeedPage;
