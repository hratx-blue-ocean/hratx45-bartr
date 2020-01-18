import React, { PureComponent } from 'react';
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
} from 'mdbreact';

import TradeItem from './TradeItem';

import { connect } from 'react-redux';

import '../assets/styles/makeOfferForm.scss';

const getDate = () => {
  let dt = new Date();
  return `${dt
    .getFullYear()
    .toString()
    .padStart(4, '0')}-${(dt.getMonth() + 1).toString().padStart(2, '0')}-${dt
    .getDate()
    .toString()
    .padStart(2, '0')} ${dt
    .getHours()
    .toString()
    .padStart(2, '0')}:${dt
    .getMinutes()
    .toString()
    .padStart(2, '0')}:${dt
    .getSeconds()
    .toString()
    .padStart(2, '0')}`;
};

class MakeOfferForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      availableItems: [
        {
          id: 1,
          product_name: 'One paperclip',
          value: 936,
          image:
            'https://a.1stdibscdn.com/tiffany-co-paper-clip-14k-yellow-gold-vintage-fine-jewelry-money-mens-jewelry-for-sale/1121189/j_71011511563797289160/7101151_master.jpg',
          selected: false
        },
        {
          id: 2,
          product_name: 'Rare antique cute baby doll',
          value: 3,
          image:
            'http://crazysven.com/wp/wp-content/uploads/yapb_cache/weird_antiques_kewpie_lamp.bsn7luzlsw004wkc4cc0sw8co.6ylu316ao144c8c4woosog48w.th.JPG',
          selected: false
        },
        {
          id: 3,
          product_name: 'Nicholas Cage Christmas ornament',
          value: 10000,
          image:
            'https://i.etsystatic.com/18008672/r/il/5dd61b/2089294108/il_1588xN.2089294108_m951.jpg',
          selected: false
        }
      ],
      indexMap: { 1: 0, 2: 1, 3: 2 },
      selectedItems: [],
      message: ''
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

    data.append('offer_made_date', getDate());
    data.append('offer_closed_date', null);
    data.append('offerer_id', this.props.userId);
    data.append('offeree_id', this.props.itemDetails.owner_id);
    data.append('desired_product_id', this.props.productId);
    data.append('message', this.state.message);
    ids.forEach(id => data.append('offered_product_id', id));

    //axios post request

    this.props.toggleConfirmationModal();
  }

  render() {
    console.log("User items on Make Offer Form page: ", this.props.userItems)
    return (
      <div id="makeOfferForm">
        <form className="md-form">
          <MDBContainer>
            <MDBCard className="makeOfferFormCard">
              <div className="desiredItemContainer">
                <h3 className="sectionTitle">Item you've chosen: </h3>
                <MDBCard className="desiredItem">
                  {this.props.itemDetails.photos &&
                  this.props.itemDetails.photos.length > 0 ? (
                    <div className="desiredItemImage">
                      <img
                        src={this.props.itemDetails.photos[0] || ''}
                        width="60px"
                        height="60px"
                      />
                    </div>
                  ) : (
                    ''
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
                color="warning"
                onClick={this.toggle}
                className="buttonSelectItems"
              >
                Select Item(s) To Offer
              </MDBBtn>
              <MDBModal
                isOpen={this.state.modalOpen}
                toggle={this.toggle}
                size="fluid"
                className="selectionModal"
              >
                <MDBModalHeader>Your Items</MDBModalHeader>
                <MDBModalBody>
                  <ul>
                    {this.state.availableItems.map(
                      (item, index, availableItems) => (
                        <li
                          onClick={this.handleClick}
                          className={
                            item.selected
                              ? index === 0
                                ? 'oneItem selected first'
                                : index === availableItems.length - 1
                                ? 'oneItem selected last'
                                : 'oneItem selected'
                              : index === 0
                              ? 'oneItem first'
                              : index === availableItems.length - 1
                              ? 'oneItem  last'
                              : 'oneItem'
                          }
                          id={item.id}
                          key={index}
                        >
                          <TradeItem
                            data={item}
                            showLoc={false}
                            showDel={false}
                          />
                        </li>
                      )
                    )}
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
                        <h4 className="selectedItemName">
                          {item.product_name}
                        </h4>
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
                color="primary"
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
  let { userInfo, itemDetails, userItems } = state;

  let username = userInfo.username;
  let userId = userInfo.userId;

  return { itemDetails, username, userId, userItems };
};

export default connect(mapStateToProps)(MakeOfferForm);
