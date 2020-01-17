import React, { PureComponent } from "react";
import {
  MDBContainer,
  MDBCarouselItem,
  MDBCarousel,
  MDBCarouselInner,
  MDBView
} from "mdbreact";

export default class ItemDetailPicture extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.forceUpdate();
    }
  }

  render() {
    return (
      <MDBContainer className="carouselContainer">
        <MDBCarousel
          className="imageCarousel"
          slide
          activeItem={1}
          mobileGesture={true}
          interval={10000000}
          length={this.props.photos ? this.props.photos.length : 1}
        >
          <MDBCarouselInner className="imageWindow">
            {this.props.photos && this.props.photos.length > 0 ? (
              this.props.photos.map((photo, index) => (
                <MDBCarouselItem key={index} itemId={index + 1}>
                  {/* <MDBView className="carouselView"> */}
                    <img src={photo.blob} className="mainImage" />
                  {/* </MDBView> */}
                </MDBCarouselItem>
              ))
            ) : (
              <MDBCarouselItem itemId={1}>
                  <img src="../assets/images/no_images.png" className="mainImage" />
              </MDBCarouselItem>
            )}
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
      // <div className="imageWindow">
      //   <span className="arrow leftArrow">&laquo;</span>
      //   {/* <img
      //     className="mainImage"
      //     src="https://a.1stdibscdn.com/tiffany-co-paper-clip-14k-yellow-gold-vintage-fine-jewelry-money-mens-jewelry-for-sale/1121189/j_71011511563797289160/7101151_master.jpg"
      //   /> */}
      //   <img
      //     className="mainImage"
      //     src={this.props.photos[0] ? this.props.photos[0].blob : ""}
      //   />
      //   <span className="arrow rightArrow">&raquo;</span>

      // </div>
    );
  }
}
