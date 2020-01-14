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
            "https://a.1stdibscdn.com/tiffany-co-paper-clip-14k-yellow-gold-vintage-fine-jewelry-money-mens-jewelry-for-sale/1121189/j_71011511563797289160/7101151_master.jpg"
        },
        {
          id: 2,
          name: "Rare antique cute baby doll",
          value: 3,
          image:
            "http://crazysven.com/wp/wp-content/uploads/yapb_cache/weird_antiques_kewpie_lamp.bsn7luzlsw004wkc4cc0sw8co.6ylu316ao144c8c4woosog48w.th.JPG"
        },
        {
          id: 3,
          name: "Nicholas Cage Christmas ornament",
          value: 10000,
          image:
            "https://i.etsystatic.com/18008672/r/il/5dd61b/2089294108/il_1588xN.2089294108_m951.jpg"
        }
      ],
      selectedItems: []
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  selectItem(item) {
    let { selectedItems } = this.state;
    selectedItems.push(item);
    this.setState({ selectedItems });
  }

  deselectItem(itemId) {
    let { selectedItems } = this.state;
    selectedItems = selectedItems.filter(item => item.id !== itemId);
    this.setState({ selectedItems });
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
                  <li className="oneItem" id={1}>
                    <div className="itemSelector">
                      <MDBInput type="checkbox" />
                    </div>
                    <div className="itemContainer">
                      <div className="itemImage">
                        <img
                          width="100px"
                          src="https://a.1stdibscdn.com/tiffany-co-paper-clip-14k-yellow-gold-vintage-fine-jewelry-money-mens-jewelry-for-sale/1121189/j_71011511563797289160/7101151_master.jpg"
                        />
                      </div>
                      <div className="itemInfo">
                        <h3>One paperclip</h3>
                        <p>Value: <span>936</span></p>
                      </div>
                    </div>
                  </li>
                  <li className="oneItem" id={2}>
                    <div className="itemSelector">
                      <MDBInput type="checkbox" />
                    </div>
                    <div className="itemContainer">
                      <div className="itemImage">
                        <img
                          width="100px"
                          src="http://crazysven.com/wp/wp-content/uploads/yapb_cache/weird_antiques_kewpie_lamp.bsn7luzlsw004wkc4cc0sw8co.6ylu316ao144c8c4woosog48w.th.JPG"
                        />
                      </div>
                      <div className="itemInfo">
                        <h3>Rare antique cute baby doll</h3>
                        <p>Value: <span>3</span></p>
                      </div>
                    </div>
                  </li>
                  <li className="oneItem" id={3}>
                    <div className="itemSelector">
                      <MDBInput type="checkbox" />
                    </div>
                    <div className="itemContainer">
                      <div className="itemImage">
                        <img
                          width="100px"
                          src="https://i.etsystatic.com/18008672/r/il/5dd61b/2089294108/il_1588xN.2089294108_m951.jpg"
                        />
                      </div>
                      <div className="itemInfo">
                        <h3>Nicholas Cage Christmas ornament</h3>
                        <p>Value: <span>10000</span></p>
                      </div>
                    </div>
                  </li>
                </ul>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="warning" onClick={this.toggle}>
                  Add to Offer
                </MDBBtn>
              </MDBModalFooter>
            </MDBModal>
            <MDBInput
              type="textarea"
              label="Send a message with your offer?"
              outline
            />
            <MDBBtn color="danger">Send Your Offer!</MDBBtn>
          </MDBContainer>
        </form>
      </div>
    );
  }
}
