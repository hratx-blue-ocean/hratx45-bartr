import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FeedPageList from "../components/FeedPageList.jsx";
import {
  MDBBtn,
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
      styling: useStyles,
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
      <Container component="main" id="feedPageOuterContainer">
        <Container maxWidth="xs">
          <div className={this.state.styling.paper}>
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
          </div>
          <div id="feedPageProducrtListContainer">
            <FeedPageList />
          </div>
        </Container>
      </Container>
    );
  }
}

export default FeedPage;

const useStyles = makeStyles(theme => ({
  outerContainer: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    flexDirection: "column",
    justifyContent: "center"
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
