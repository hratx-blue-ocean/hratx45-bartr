import React, { PureComponent, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  fetchProductsByProductId,
  fetchProductsByUserIdAndProximity
} from "../actions/productsActions";
import ItemDetailPicture from "../components/ItemDetailPicture";
import ItemDetailCarousel from "../components/ItemDetailPictureCarousel";
import ItemDetailItemInfo from "../components/ItemDetailItemInfo";
import ItemDetailMakeOfferButton from "../components/ItemDetailMakeOfferButton";
import "../assets/styles/itemDetail.scss";

let ItemDetailScreen = props => {
  // let { id } = useParams();
  // useEffect(() => {props.fetchProductsByProductId(id);}, [id])

  useEffect(() => {
    props.fetchProductsByProductId(1);
  }, []);

  return (
    <div id="itemDetailScreen">
      <div className="itemTitleContainer">
        <h1 className="itemTitle">{props.products.product_name}</h1>
      </div>
      {/* <div className="itemOfferCountContainer">
          3 people have bid on this item
        </div> */}
      <div className="itemDetailImageContainer">
        {/* <ItemDetailPicture photos={props.products.photos} /> */}
        <ItemDetailPicture
          photos={[
            {
              blob:
                "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/01/shutterstock_587562362.jpg"
            },
            {
              blob:
                "https://static.parade.com/wp-content/uploads/2018/03/golden-puppy-life-national-geographic-ftr-1.jpg"
            },
            {
              blob:
                "https://static.boredpanda.com/blog/wp-content/uploads/2018/10/cutest-puppy-dog-pictures-coverimage.jpg"
            }
          ]}
        />
      </div>
      {/* <div className="itemImageCarouselContainer condensed">
        <ItemDetailCarousel />
      </div> */}
      <div className="itemValueContainer">
        <h4>
          Value: <span>{props.products.value}</span>
        </h4>
      </div>
      <div className="makeOfferButtonContainer">
        <ItemDetailMakeOfferButton />
      </div>
      <div className="itemInfoContainer">
        <ItemDetailItemInfo
          postedDate={props.products.posted_date}
          description={props.products.product_description}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { products } = state;
  return { products };
};

export default connect(mapStateToProps, { fetchProductsByProductId })(
  ItemDetailScreen
);
