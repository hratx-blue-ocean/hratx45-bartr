import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';
import { MDBInput } from 'mdbreact';

const Searchbar = ({ onChange }) => {
  return (
    <MDBInput
      label="Search for a product"
      icon="search"
      size="lg"
      onChange={onChange}
    />
  );
};
export default Searchbar;
