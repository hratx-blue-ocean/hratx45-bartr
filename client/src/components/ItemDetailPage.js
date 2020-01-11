import React, { PureComponent } from "react";
import ItemDetailPicture from "./ItemDetailPicture";
import ItemDetailCarousel from "./ItemDetailPictureCarousel";
import ItemDetailItemInfo from "./ItemDetailItemInfo";
import ItemDetailMakeOfferButton from "./ItemDetailMakeOfferButton";
import "../assets/styles/itemDetail.scss";

export default class ItemDetailPage extends PureComponent {
  render() {
    return (
      <div className="itemDetailPage">
        <div className="navbarPlaceholder">Navbar Goes Here</div>
        <div className="itemTitle">
          <h1>One Paperclip</h1>
        </div>
        <ItemDetailPicture />
        <div className="itemImageCarouselContainer">
          <ItemDetailCarousel />
        </div>

        <ItemDetailItemInfo />
        <ItemDetailMakeOfferButton />
      </div>
    );
  }
}
