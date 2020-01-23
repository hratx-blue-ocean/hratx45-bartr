import React, { PureComponent, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchItemDetailsByItemId } from "../actions/itemDetailsActions";
import ItemDetailPicture from "../components/ItemDetailPicture";
import ItemDetailCarousel from "../components/ItemDetailPictureCarousel";
import ItemDetailItemInfo from "../components/ItemDetailItemInfo";
import ItemDetailMakeOfferButton from "../components/ItemDetailMakeOfferButton";
import "../assets/styles/itemDetail.scss";

let ItemDetailScreen = props => {
  let { id } = useParams();
  useEffect(() => {
    props.fetchItemDetailsByItemId(id);
  }, [id]);

  return (
    <div id="itemDetailScreen">
      <div className="itemTitleContainer">
        {/* <h1 className="itemTitle">{props.itemDetails.product_name}</h1> */}
        <h1 className="itemTitle">Daddy saddle!</h1>
      </div>
      {/* <div className="itemOfferCountContainer">
          3 people have bid on this item
        </div> */}
      <div className="itemDetailImageContainer">
        {/* <ItemDetailPicture photos={props.itemDetails.photos} /> */}
        <ItemDetailPicture
          photos={[
            {
              blob:
                "https://images-na.ssl-images-amazon.com/images/I/81PkJiEPmvL._AC_SL1500_.jpg"
            },
            {
              blob:
                "https://images-na.ssl-images-amazon.com/images/I/61BYnv0ifBL._AC_SL1472_.jpg"
            },
            {
              blob:
                "https://images-na.ssl-images-amazon.com/images/I/71kPphZN59L._AC_SL1472_.jpg"
            }
          ]}
        />
        {/* <ItemDetailPicture
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
        /> */}
      </div>
      <div className="itemValueContainer">
        <h4 className="itemDetailBold">
          {/* Value: <span className="itemDetailBold">{props.itemDetails.value}</span> */}
          Value: <span className="itemDetailBold">10</span>
        </h4>
      </div>
      <div className="makeOfferButtonContainer">
        <ItemDetailMakeOfferButton />
      </div>
      <div className="itemInfoContainer">
        {/* <ItemDetailItemInfo
          postedDate={props.itemDetails.posted_date}
          description={props.itemDetails.product_description}
        /> */}
        <ItemDetailItemInfo
          postedDate={"One week ago"}
          description={"Fun for the whole family!"}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { itemDetails } = state;
  return { itemDetails };
};

export default connect(mapStateToProps, { fetchItemDetailsByItemId })(
  ItemDetailScreen
);
