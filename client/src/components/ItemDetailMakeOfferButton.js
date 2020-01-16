import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class ItemDetailMakeOfferButton extends PureComponent {
  render() {
    return (
      <Link to="/MakeOffer">
        <button type="button" className="btn makeOffer">
          Make Offer
        </button>
      </Link>
    );
  }
}
