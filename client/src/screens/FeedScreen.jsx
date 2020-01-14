import React from "react";
import Axios from "axios";
import FeedScreenListItem from "../components/FeedScreenListItem.jsx";
import {
  MDBBtn,
  MDBContainer,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBInput
} from "mdbreact";

class FeedScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilterText: "Distance",
      productsToDisplay: [],
      productHoldWhileFiltered: [],
      input: null,
      error: null
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
  }

  handleFilterTextChange(event) {
    if (event === "Value (Highest First)") {
      let arr = this.state.productsToDisplay;
      let sortedArr = [];
      for (let i = 0; i < arr.length; i++) {
        sortedArr[arr[i].value] = arr[i];
      }
      this.setState({
        productsToDisplay: sortedArr.filter(a => a !== undefined).reverse(),
        currentFilterText: event
      });
    }
    if (event === "Value (Lowest First)") {
      let arr = this.state.productsToDisplay;
      let sortedArr = [];
      for (let i = 0; i < arr.length; i++) {
        sortedArr[arr[i].value] = arr[i];
      }
      this.setState({
        productsToDisplay: sortedArr.filter(a => a !== undefined),
        currentFilterText: event
      });
    }
    if (event === "Distance") {
      // ! sort by proximity
    }
    if (event === "Date Posted") {
      // ! sort by date
    }
  }

  search(keyword) {
    if (!keyword.length || typeof keyword !== "string") {
      this.setState({
        error: "Please enter a keyword."
      });
      return;
    } else {
      let arr = this.state.productsToDisplay;
      let searchedArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].product_name.toLowerCase().includes(keyword.toLowerCase())) {
          searchedArr.push(arr[i]);
        }
      }
      this.setState({
        productsToDisplay: searchedArr,
        productHoldWhileFiltered: arr,
        input: null
      });
    }
  }

  clearFilters() {
    this.state.productHoldWhileFiltered.length > 0
      ? this.setState(
          {
            productsToDisplay: this.state.productHoldWhileFiltered,
            currentFilterText: "Distance",
            input: null
          },
          () =>
            this.setState({
              productHoldWhileFiltered: [],
              currentFilterText: "Distance",
              input: null
            })
        )
      : null;
  }

  getProducts() {
    // ! ping db using filter eventually, for now, this is unfiltered data
    Axios.get(
      `http://api-server.escxwv87wi.us-west-2.elasticbeanstalk.com/api/testing/test-postgres/products`
    )
      .then(data =>
        this.setState({
          productsToDisplay: data.data,
          productHoldWhileFiltered: data.data
        })
      )
      .catch(console.log);
  }

  componentDidMount() {
    this.getProducts();
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (
      <MDBContainer>
        <MDBInput
          label="Search by Keyword"
          size="lg"
          onChange={this.handleChange}
          value={this.state.input}
        ></MDBInput>
        <MDBBtn
          className="testButton"
          size="lg"
          onClick={() => {
            this.state.input
              ? this.search(this.state.input)
              : this.clearFilters();
          }}
        >
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
                  this.handleFilterTextChange(
                    document.getElementById("filterByDistance").innerHTML
                  )
                }
              >
                Distance
              </MDBDropdownItem>
              <MDBDropdownItem
                value="ValueHigh"
                id="filterByValueHigh"
                onClick={() =>
                  this.handleFilterTextChange(
                    document.getElementById("filterByValueHigh").innerHTML
                  )
                }
              >
                Value (Highest First)
              </MDBDropdownItem>
              <MDBDropdownItem
                value="ValueLow"
                id="filterByValueLow"
                onClick={() =>
                  this.handleFilterTextChange(
                    document.getElementById("filterByValueLow").innerHTML
                  )
                }
              >
                Value (Lowest First)
              </MDBDropdownItem>
              <MDBDropdownItem
                value="Date"
                id="filterByDate"
                onClick={() =>
                  this.handleFilterTextChange(
                    document.getElementById("filterByDate").innerHTML
                  )
                }
              >
                Date Posted
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>

          <div id="filteringByText">
            Filtering by: {this.state.currentFilterText}
          </div>
          <div id="clearButtonContainer">
            <MDBBtn id="clearFilterButton" onClick={this.clearFilters}>
              Clear Filter
            </MDBBtn>
          </div>
        </div>

        <div id="FeedScreenProductListContainer">
          {this.state.productsToDisplay
            ? this.state.productsToDisplay.map((item, key) => (
                <div id="FeedScreenListItem" key={key}>
                  <FeedScreenListItem item={item} />
                </div>
              ))
            : null}
        </div>
      </MDBContainer>
    );
  }
}

export default FeedScreen;
