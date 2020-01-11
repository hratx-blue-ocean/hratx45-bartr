import React, {PureComponent} from "react";
 
export default class ItemDetailPictureCarousel extends PureComponent {
    render() {
        return (<div className="itemImageCarousel">
            <div className="thumbnailContainer">
                <img className="thumbnail" src="https://a.1stdibscdn.com/tiffany-co-paper-clip-14k-yellow-gold-vintage-fine-jewelry-money-mens-jewelry-for-sale-picture-2/j_10993/j_71011511563747782591/g8940b_master.jpg" width="100px" />
            </div>
            <div className="thumbnailContainer">
                <img className="thumbnail" src="https://a.1stdibscdn.com/tiffany-co-paper-clip-14k-yellow-gold-vintage-fine-jewelry-money-mens-jewelry-for-sale-picture-3/j_10993/j_71011511563747791540/g8940a_master.jpg?width=768" width="100px"/>
            </div>
        </div>)
    }
}