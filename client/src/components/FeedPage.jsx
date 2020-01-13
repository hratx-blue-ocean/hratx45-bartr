import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

class FeedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styling: useStyles,
      currentFilter: null
    };
  }

  handleFilter(event) {
    console.log(event);
    this.setState({
      currentFilter: event
    });
  }

  render() {
    return (
      <Container component="main" id="feedPageOuterContainer">
        <Container maxWidth="xs">
          <div className={this.state.styling.paper}>
            <Typography component="h1" variant="h5">
              Search
            </Typography>
            <form className={this.state.styling.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                placeholder="Enter Keyword"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={this.state.styling.submit}
              >
                Search
              </Button>
            </form>
            <div id="entireDropDownContainer">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Filter by...
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a
                    className="dropdown-item"
                    href="#"
                    value="Distance"
                    onClick={() => this.handleFilter("Distance")}
                  >
                    Distance
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    value="Value"
                    onClick={() => this.handleFilter("Value")}
                  >
                    Value
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    value="Date"
                    onClick={() => this.handleFilter("Date")}
                  >
                    Date
                  </a>
                </div>
              </div>
              {this.state.currentFilter ? (
                <div id="filteringByText">
                  Filtering by: {this.state.currentFilter}
                </div>
              ) : (
                <div id="filteringByText">Filtering by: Distance</div>
              )}
            </div>
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
