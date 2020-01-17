import React, { PureComponent } from "react";
import "../assets/styles/makeOffer.scss";
import MakeOfferForm from "../components/MakeOfferForm";

const MakeOfferScreen = props => {
  // let { id } = useParams();

  // useEffect(() => {
  //   props.fetchProductsByProductId(id);
  // }, [id]);

  return (
    <div id="makeOfferScreen">
      <h1>Make An Offer</h1>
      <MakeOfferForm />
    </div>
  );
};

export default MakeOfferScreen;
