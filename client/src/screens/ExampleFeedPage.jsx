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


import {useSelector, useDispatch, connect} from "react-redux";
import {fetchProductsByUserIdAndProximity} from "../actions";

class FeedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilterText: "Distance",
      productsToDisplay: []
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
    this.props.fetchProductsByUserIdAndProximity(1, 100);
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
        
        <div id="feedPageProductListContainer">
          {this.state.productsToDisplay
            ? this.state.productsToDisplay.map((item, key) => (
              <div id="feedPageLIstItem" key={key}>
                <FeedPageListItem item={item} />
              </div>
            ))
            : null}
        </div>
      </MDBContainer>
    );
  }
}

// export default FeedPage;
const mapStateToProps = state => {
  return {products: state.products}
};


export default connect(mapStateToProps, {fetchProductsByUserIdAndProximity})(FeedPage);
