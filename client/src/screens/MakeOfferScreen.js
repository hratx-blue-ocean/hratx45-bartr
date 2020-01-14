import React, { PureComponent } from "react";
import "../assets/styles/makeOffer.scss";
import MakeOfferForm from "../components/MakeOfferForm";

export default class MakeOfferScreen extends PureComponent {
  render() {
    return (
      <div>
        <h1>Make An Offer</h1>
        <MakeOfferForm />
      </div>
    );
  }
}
