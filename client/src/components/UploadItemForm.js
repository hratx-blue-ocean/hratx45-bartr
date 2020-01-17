import React, { PureComponent } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBFileInput,
  MDBCard,
  MDBCardTitle,
  MDBCardBody
} from "mdbreact";
import axios from "axios";

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

export default class UploadItemForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      value: "",
      description: "",
      desiredTrade: "",
      timeConstraints: "",
      fileList: []
    };

    this.id = this.handleNameInput = this.handleNameInput.bind(this);
    this.handleValueInput = this.handleValueInput.bind(this);
    this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
    this.handleDesiredTradeInput = this.handleDesiredTradeInput.bind(this);
    this.handleTimeConstraintInput = this.handleTimeConstraintInput.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleNameInput(e) {
    e.persist();
    this.setState({ name: e.target.value });
  }

  handleValueInput(e) {
    e.persist();
    this.setState({ value: e.target.value });
  }

  handleDescriptionInput(e) {
    e.persist();
    this.setState({ description: e.target.value });
  }

  handleDesiredTradeInput(e) {
    e.persist();
    this.setState({ desiredTrade: e.target.value });
  }

  handleTimeConstraintInput(e) {
    e.persist();
    this.setState({ timeConstraints: e.target.value });
  }

  handleFileInput(e) {
    this.setState({ fileList: [...e] });
  }

  submit() {
    let data = new FormData();

    data.append("date", getDate());
    data.append("name", this.state.name);
    data.append("value", this.state.value);
    data.append("description", this.state.description);
    data.append("desired_trade", this.state.desiredTrade);
    data.append("time_constraints", this.state.timeConstraints);
    data.append("owner_username", "collin");
    data.append("owner_id", 26);
    this.state.fileList.forEach(file => data.append("image", file, file.name));

    axios
      .post("http://localhost:3000/api/productsNew/product", data, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <MDBCard className="postItemFormCard">
          {/* <MDBCardTitle>
            <h1>Post an Item</h1>
          </MDBCardTitle> */}
          <MDBCardBody>
            <form className="md-form postItemForm">
              <MDBInput
                label="Item Name*"
                onChange={this.handleNameInput}
                value={this.state.name}
                size="lg"
              />
              <MDBInput
                label="Item Value*"
                onChange={this.handleValueInput}
                value={this.state.value}
                size="lg"
              />
              <MDBInput
                type="textarea"
                label="Description"
                onChange={this.handleDescriptionInput}
                value={this.state.description}
                size="lg"
              />
              <MDBInput
                label="Desired Trade(s)"
                onChange={this.handleDesiredTradeInput}
                value={this.state.desiredTrade}
                size="lg"
              />
              <MDBInput
                label="Time Constraints"
                onChange={this.handleTimeConstraintInput}
                value={this.state.timeConstraints}
                size="lg"
              />
              <MDBFileInput
                getValue={this.handleFileInput}
                className="imageInput"
                btnTitle="Choose File(s)"
                textFieldTitle="Upload Images"
                btnColor="danger"
                multiple
              />
              <MDBBtn onClick={this.submit}>Upload Item</MDBBtn>
              <p>* = required</p>
            </form>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}
