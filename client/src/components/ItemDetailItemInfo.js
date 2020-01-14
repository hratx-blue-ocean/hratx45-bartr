import React, {PureComponent} from "react";
 
export default class ItemDetailItemInfo extends PureComponent {
    render() {
        return <div className="itemInfo">
            <div className="itemDescriptionContainer">
                <div className="descriptionElement itemDescription"><h4>Description</h4>Hot chicken semiotics taxidermy polaroid lo-fi try-hard next level coloring book roof party heirloom la croix sriracha celiac four loko. <br></br><br></br>DIY sustainable narwhal migas prism kitsch kinfolk. Neutra messenger bag salvia freegan, unicorn williamsburg gochujang raw denim kogi narwhal hella. <br></br><br></br>Normcore fanny pack blue bottle shaman woke microdosing twee intelligentsia roof party XOXO messenger bag. Green juice health goth bespoke selvage. <br></br><br></br>Marfa chillwave bicycle rights, 3 wolf moon man braid stumptown locavore typewriter.</div>
                <div className="descriptionElement desiredTrades"><h4>Desired Trades</h4>Interested in a house!</div>
                <div className="descriptionElement timeline"><h4>Timeline</h4>Need to get rid of this by January 24th</div>
            </div>
            
            <div className="itemPostedDateContainer"><p>Posted <span className="postedDate">3 days ago</span></p></div>
        </div>
    }
}