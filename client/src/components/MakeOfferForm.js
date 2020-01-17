import React, { PureComponent } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBCard,
  MDBCardTitle
} from "mdbreact";

import { connect } from "react-redux";

import "../assets/styles/makeOfferForm.scss";

const getDate = () => {
  let dt = new Date();
  return `${dt
    .getFullYear()
    .toString()
    .padStart(4, "0")}-${(dt.getMonth() + 1).toString().padStart(2, "0")}-${dt
    .getDate()
    .toString()
    .padStart(2, "0")} ${dt
    .getHours()
    .toString()
    .padStart(2, "0")}:${dt
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${dt
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;
};

class MakeOfferForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      availableItems: [
        {
          id: 1,
          name: "One paperclip",
          value: 936,
          image:
            "https://a.1stdibscdn.com/tiffany-co-paper-clip-14k-yellow-gold-vintage-fine-jewelry-money-mens-jewelry-for-sale/1121189/j_71011511563797289160/7101151_master.jpg",
          selected: false
        },
        {
          id: 2,
          name: "Rare antique cute baby doll",
          value: 3,
          image:
            "http://crazysven.com/wp/wp-content/uploads/yapb_cache/weird_antiques_kewpie_lamp.bsn7luzlsw004wkc4cc0sw8co.6ylu316ao144c8c4woosog48w.th.JPG",
          selected: false
        },
        {
          id: 3,
          name: "Nicholas Cage Christmas ornament",
          value: 10000,
          image:
            "https://i.etsystatic.com/18008672/r/il/5dd61b/2089294108/il_1588xN.2089294108_m951.jpg",
          selected: false
        }
      ],
      indexMap: { 1: 0, 2: 1, 3: 2 },
      selectedItems: [],
      message: ""
    };

    this.toggle = this.toggle.bind(this);
    this.addToOffer = this.addToOffer.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  toggle() {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  addToOffer() {
    let { availableItems, selectedItems } = this.state;
    selectedItems = availableItems.filter(item => item.selected);
    this.setState({ selectedItems }, () => {
      this.toggle();
    });
  }

  handleClick(e) {
    let { indexMap, availableItems } = this.state;
    let id = e.currentTarget.id;

    availableItems[indexMap[id]].selected = !availableItems[indexMap[id]]
      .selected;

    this.setState({ availableItems }, () => this.forceUpdate());
  }

  handleInputChange(e) {
    this.setState({ message: e.target.value });
  }

  submit() {
    let data = new FormData();
    let ids = this.state.selectedItems.map(item => item.id);

    data.append("offer_made_date", getDate());
    data.append("offer_closed_date", null);
    data.append("offerer_id", this.props.userId);
    data.append("offeree_id", this.props.itemDetails.owner_id);
    data.append("desired_product_id", this.props.productId);
    data.append("message", this.state.message);
    ids.forEach(id => data.append("offered_product_id", id));
  }

  render() {
    return (
      <div id="makeOfferForm">
        <form className="md-form">
          <MDBContainer>
            <MDBCard className="makeOfferFormCard">
              <div className="desiredItemContainer">
              <h3 className="sectionTitle">Chosen Item: </h3>
                <MDBCard className="desiredItem">
                  
                  {this.props.itemDetails.photos &&
                  this.props.itemDetails.photos.length > 0 ? (
                    <div className="desiredItemImage">
                      <img
                        src={this.props.itemDetails.photos[0] || ""}
                        width="60px"
                        height="60px"
                      />
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="desiredItemInfo">
                    <h4 className="desiredItemName">
                      {this.props.itemDetails.product_name}
                    </h4>
                    <h4 className="desiredItemName">
                      Value: <span>{this.props.itemDetails.value}</span>
                    </h4>
                  </div>
                </MDBCard>
              </div>
              <MDBBtn
                color="danger"
                onClick={this.toggle}
                className="buttonSelectItems"
              >
                Select Item(s) To Offer
              </MDBBtn>
              <MDBModal isOpen={this.state.modalOpen} toggle={this.toggle}>
                <MDBModalHeader>Your Items</MDBModalHeader>
                <MDBModalBody>
                  <ul>
                    {this.state.availableItems.map((item, index) => (
                      <li
                        onClick={this.handleClick}
                        className={
                          item.selected ? "oneItem selected" : "oneItem"
                        }
                        id={item.id}
                        key={index}
                      >
                        <div className="itemContainer">
                          <div className="itemImage">
                            <img width="100px" src={item.image} />
                          </div>
                          <div className="itemInfo">
                            <h3>{item.name}</h3>
                            <p>
                              Value: <span>{item.value}</span>
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn color="warning" onClick={this.addToOffer}>
                    Add to Offer
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModal>
              {this.state.selectedItems.length > 0 ? (
                <div className="selectedItemsContainer">
                  <h3 className="sectionTitle">You're offering: </h3>
                  {this.state.selectedItems.map(item => (
                    <MDBCard className="selectedItem">
                      <div className="selectedItemImage">
                        <img src={item.image} width="50px" height="50px" />
                      </div>
                      <div className="selectedItemInfo">
                        <h4 className="selectedItemName">{item.name}</h4>
                        <h4 className="selectedItemName">
                          Value: <span>{item.value}</span>
                        </h4>
                      </div>
                    </MDBCard>
                  ))}
                </div>
              ) : (
                <></>
              )}
              <MDBInput
                className="messageInput"
                type="textarea"
                label="Send a message with your offer?"
                onChange={this.handleInputChange}
                value={this.state.message}
                outline
              />
              <MDBBtn
                color="default"
                onClick={this.submit}
                className="buttonSubmit"
              >
                Send Your Offer!
              </MDBBtn>
            </MDBCard>
          </MDBContainer>
        </form>
      </div>
    );
  }
}

let mapStateToProps = state => {
  let { userInfo, itemDetails } = state;

  let username = userInfo.username;
  let userId = userInfo.userId;

  return { itemDetails, username, userId };
};

export default connect(mapStateToProps)(MakeOfferForm);
