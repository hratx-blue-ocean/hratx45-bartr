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
      input: null,
      error: null
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.getProducts = this.getProducts.bind(this);
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
    if (!keyword || typeof keyword !== "string") {
      this.setState({
        error: "Please enter a keyword."
      });
      return;
    }
    let arr = this.state.productsToDisplay;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].product_name.contains(keyword)) {
        console.log(keyword, arr[i]);
      }
    }
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
        <MDBInput
          label="Search by Keyword"
          size="lg"
          onChangeText={text => this.setState({ input: text })}
        ></MDBInput>
        <MDBBtn
          className="testButton"
          size="lg"
          onClick={() => this.search(this.state.input)}
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
