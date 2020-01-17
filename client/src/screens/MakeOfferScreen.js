import React, { PureComponent } from "react";
import "../assets/styles/makeOffer.scss";
import MakeOfferForm from "../components/MakeOfferForm";

const MakeOfferScreen = props => {
  let { id } = useParams();

  // useEffect(() => {
  //   props.fetchProductsByProductId(id);
  // }, [id]);

  return (
    <div>
      <h1>Make An Offer</h1>
      <MakeOfferForm productId={id}/>
    </div>
  );
};

export default MakeOfferScreen;
