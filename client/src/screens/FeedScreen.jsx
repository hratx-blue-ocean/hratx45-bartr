import React from 'react';
import Axios from 'axios';
import FeedScreenListItem from '../components/FeedScreenListItem.jsx';
import FeedScreenDropDown from '../components/FeedScreenDropDown.jsx';
import { MDBBtn, MDBContainer, MDBInput } from 'mdbreact';
import { useSelector, connect } from 'react-redux';

class FeedScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOn: false,
      currentFilterText: 'Distance',
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
    this.setState(
      {
        filterOn: true,
        currentFilterText: event,
        error: null,
        productHoldWhileFiltered: this.state.productsToDisplay
      },
      () => {
        if (event === 'Value (Highest First)') {
          let arr = this.state.productsToDisplay;
          let sortedArr = [];
          for (let i = 0; i < arr.length; i++) {
            sortedArr[arr[i].value] = arr[i];
          }
          this.setState({
            productsToDisplay: sortedArr.filter(a => a !== undefined).reverse()
          });
        }
        if (event === 'Value (Lowest First)') {
          let arr = this.state.productsToDisplay;
          let sortedArr = [];
          for (let i = 0; i < arr.length; i++) {
            sortedArr[arr[i].value] = arr[i];
          }
          this.setState({
            productsToDisplay: sortedArr.filter(a => a !== undefined)
          });
        }
        if (event === 'Distance') {
          // ! sort by proximity
        }
        if (event === 'Date (Oldest First)') {
          let arr = this.state.productsToDisplay;
          let newArr = arr.slice();
          newArr.sort(
            (a, b) => Date.parse(a.posted_date) - Date.parse(b.posted_date)
          );
          this.setState({
            productsToDisplay: newArr
          });
        }
        if (event === 'Date (Newest First)') {
          let arr = this.state.productsToDisplay;
          let newArr = arr.slice();
          newArr.sort(
            (a, b) => Date.parse(b.posted_date) - Date.parse(a.posted_date)
          );
          this.setState({
            productsToDisplay: newArr
          });
        }
      }
    );
  }

  search(keyword = null) {
    if (!keyword || typeof keyword !== 'string') {
      this.setState({
        error: 'Please enter a keyword.'
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
            currentFilterText: 'Distance',
            error: null,
            filterOn: false
          },
          () =>
            this.setState({
              productHoldWhileFiltered: [],
              error: null,
              filterOn: false
            })
        )
      : this.setState({
          currentFilterText: 'Distance',
          error: null,
          filterOn: false
        });
  }

  getProducts() {
    // ! ping db using filter eventually, for now, this is unfiltered data
    Axios.get(`https://paperclip.link/api/testing/test-postgres/products`)
      .then(data =>
        this.setState({
          productsToDisplay: data.data,
          productHoldWhileFiltered: data.data
        })
      )
      .catch(console.log);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    console.log('GABEEEE', this.props);
    return (
      <MDBContainer id="feed-screen">
        <MDBInput
          label="Search by Keyword"
          size="lg"
          onChange={this.handleChange}
        ></MDBInput>
        <MDBBtn
          className="testButton"
          size="lg"
          onClick={() => {
            this.state.input
              ? this.search(this.state.input)
              : this.state.filterOn
              ? this.clearFilters()
              : this.search();
          }}
        >
          Search
        </MDBBtn>

        <div style={{ position: 'absolute' }}>
          {this.state.error ? this.state.error : null}
        </div>
        <div id="entireDropDownContainer">
          <FeedScreenDropDown
            handleFilterTextChange={this.handleFilterTextChange}
          />
          <div id="filteringByText">
            Filtering by: {this.state.currentFilterText}
          </div>
          <div id="clearButtonContainer">
            <MDBBtn id="clearFilterButton" onClick={this.clearFilters}>
              Clear Filter
            </MDBBtn>
          </div>
        </div>

        <div id="feedScreenProductListContainer" style={{ marginTop: '15px' }}>
          {this.state.productsToDisplay
            ? this.state.productsToDisplay.map((item, key) => (
                <div
                  id="feedScreenListItem"
                  key={key}
                  style={{ color: 'black', alignSelf: 'center' }}
                >
                  <FeedScreenListItem item={item} />
                </div>
              ))
            : null}
        </div>
      </MDBContainer>
    );
  }
}

const mapStateToProps = state => {
  console.log('state console.log', state);
  return {
    products: state.products,
    location: state.location,
    userInfo: state.userInfo
  };
};

export default connect(mapStateToProps, {})(FeedScreen);
