import React, { PureComponent } from "react";

export default class ItemDetailPicture extends PureComponent {
  render() {
    return (
      <div className="itemDetailImageContainer">
        <div className="imageWindow">
          <img
          className="mainImage"
            src="https://a.1stdibscdn.com/tiffany-co-paper-clip-14k-yellow-gold-vintage-fine-jewelry-money-mens-jewelry-for-sale/1121189/j_71011511563797289160/7101151_master.jpg"
            width="500px"
          />
        </div>
      </div>
    );
  }
}
