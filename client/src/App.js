import React, { PureComponent, Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ItemDetailPage from "./components/ItemDetailPage";

export default class App extends PureComponent {
  render() {
    return (
     <ItemDetailPage /> 
    );
  }
}
