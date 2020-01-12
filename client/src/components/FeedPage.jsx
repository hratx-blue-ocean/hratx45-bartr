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

const FeedPage = () => {
  const classes = useStyles();

  const filterFunc = (e = "Distance") => `Filtering by: ${e}`;

  return (
    <Container component="main" id="feedPageOuterContainer">
      <Container maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Search
          </Typography>
          <form className={classes.form} noValidate>
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
              className={classes.submit}
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
                  id="filterByDistance"
                  onClick={() =>
                    filterFunc(
                      document.getElementById("filterByDistance").innerHTML
                    )
                  }
                >
                  Distance
                </a>
                <a className="dropdown-item" href="#">
                  Value
                </a>
                <a className="dropdown-item" href="#">
                  Date
                </a>
              </div>
            </div>
            <div id="filteringByText">{filterFunc()}</div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default FeedPage;

const useStyles = makeStyles(theme => ({
  outerContainer: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    flexDirection: "column"
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
