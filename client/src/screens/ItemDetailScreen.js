import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchProductsByProductId,
  fetchProductsByUserIdAndProximity
} from "../actions/productsActions";
import ItemDetailPicture from "../components/ItemDetailPicture";
import ItemDetailCarousel from "../components/ItemDetailPictureCarousel";
import ItemDetailItemInfo from "../components/ItemDetailItemInfo";
import ItemDetailMakeOfferButton from "../components/ItemDetailMakeOfferButton";
import "../assets/styles/itemDetail.scss";

class ItemDetailScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      productInfo: {photos: []}
    }
  }

  componentDidMount() {
    this.props.fetchProductsByProductId(5);
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <div id="itemDetailScreen">
        <div className="itemTitleContainer">
          <h1 className="itemTitle">{this.props.products.product_name}</h1>
        </div>
        {/* <div className="itemOfferCountContainer">
          3 people have bid on this item
        </div> */}
        <div className="itemDetailImageContainer">
          <ItemDetailPicture photos={this.props.products.photos}/>
        </div>
        <div className="itemImageCarouselContainer condensed">
          <ItemDetailCarousel />
        </div>
        <div className="itemValueContainer">
          <h4>
            Value: <span>{this.props.products.value}</span>
          </h4>
        </div>
        <div className="makeOfferButtonContainer">
          <ItemDetailMakeOfferButton />
        </div>
        <div className="itemInfoContainer">
          <ItemDetailItemInfo postedDate={this.props.products.posted_date} description={this.props.products.product_description}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { products } = state;
  return { products };
};

export default connect(mapStateToProps, { fetchProductsByProductId })(
  ItemDetailScreen
);
