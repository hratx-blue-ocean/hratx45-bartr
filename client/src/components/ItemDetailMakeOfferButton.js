import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class ItemDetailMakeOfferButton extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Link to={`/makeOffer/${this.props.id}`}>
        <button type="button" className="btn makeOffer">
          Make Offer
        </button>
      </Link>
    );
  }
}
