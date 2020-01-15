import React, { PureComponent } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

import "../assets/styles/makeOfferForm.scss";

export default class MakeOfferForm extends PureComponent {
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
      selectedItems: []
    };

    this.toggle = this.toggle.bind(this);
    this.addToOffer = this.addToOffer.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  submit() {
    let data = new FormData();

    // Offer: {id: 1, offerer: 43, offeree: 27, desiredItem: 7, offeredItem: 1, offeredItem: 2, date: new Date(), message: "Hi! When are you free to meet up and exchange?" }

    data.append("date", new Date());
    data.append("desiredItem", this.state.name);
    data.append("value", this.state.value);
    data.append("description", this.state.description);
    data.append("desiredTrade", this.state.desiredTrade);
    data.append("timeConstraints", this.state.timeConstraints);
    this.state.fileList.forEach(file => data.append("file", file, file.name));
  }

  render() {
    return (
      <div id="makeOfferForm">
        <form className="md-form">
          <MDBContainer>
            <MDBBtn color="default" onClick={this.toggle}>
              Select Item(s) To Offer
            </MDBBtn>
            <MDBModal isOpen={this.state.modalOpen} toggle={this.toggle}>
              <MDBModalHeader>Your Items</MDBModalHeader>
              <MDBModalBody>
                <ul>
                  {this.state.availableItems.map((item, index) => (
                    <li
                      onClick={this.handleClick}
                      className={item.selected ? "oneItem selected" : "oneItem"}
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
            <div className="selectedItemsContainer">
              {this.state.selectedItems.map(item => (
                <div className="selectedItem">
                  <img src={item.image} width="50px" />
                  <h4 className="selectedItemName">{item.name}</h4>
                </div>
              ))}
            </div>
            <MDBInput
              type="textarea"
              label="Send a message with your offer?"
              outline
            />
            <MDBBtn color="danger" onClick={this.submit}>
              Send Your Offer!
            </MDBBtn>
          </MDBContainer>
        </form>
      </div>
    );
  }
}
