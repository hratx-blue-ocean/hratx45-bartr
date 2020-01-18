import React, {PureComponent} from "react";
 
export default class ItemDetailItemInfo extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="itemInfo">
            <div className="itemDescriptionContainer">
                <div className="descriptionElement itemDescription"><h4 className="itemDetailBold">Description</h4>{this.props.description}</div>
                {/* <div className="descriptionElement desiredTrades"><h4 className="itemDetailBold">Desired Trades</h4>Interested in a house!</div>
                <div className="descriptionElement timeline"><h4 className="itemDetailBold">Timeline</h4>Need to get rid of this by January 24th</div> */}
            </div>
            
            <div className="itemPostedDateContainer"><p>Posted <span className="postedDate">{this.props.postedDate}</span></p></div>
        </div>
    }
}