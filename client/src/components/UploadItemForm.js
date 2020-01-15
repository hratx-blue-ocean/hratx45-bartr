import React, { PureComponent } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBFileInput
} from "mdbreact";
import axios from "axios";

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

    this.handleNameInput = this.handleNameInput.bind(this);
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

    data.append("date", new Date());
    data.append("name", this.state.name);
    data.append("value", this.state.value);
    data.append("description", this.state.description);
    data.append("desiredTrade", this.state.desiredTrade);
    data.append("timeConstraints", this.state.timeConstraints);
    this.state.fileList.forEach(file => data.append("image", file, file.name));

    axios.post("/");
  }

  render() {
    return (
      <div>
        <form className="md-form">
          <MDBInput
            label="Item Name*"
            onChange={this.handleNameInput}
            value={this.state.name}
            outline
            size="lg"
          />
          <MDBInput
            label="Item Value*"
            onChange={this.handleValueInput}
            value={this.state.value}
            outline
            size="lg"
          />
          <MDBInput
            type="textarea"
            label="Description"
            onChange={this.handleDescriptionInput}
            value={this.state.description}
            outline
            size="lg"
          />
          <MDBInput
            label="Desired Trade(s)"
            onChange={this.handleDesiredTradeInput}
            value={this.state.desiredTrade}
            outline
            size="lg"
          />
          <MDBInput
            label="Time Constraints"
            onChange={this.handleTimeConstraintInput}
            value={this.state.timeConstraints}
            outline
            size="lg"
          />
          <MDBFileInput
            getValue={this.handleFileInput}
            btnTitle="Choose File(s)"
            textFieldTitle="Upload Images"
            btnColor="danger"
            multiple
          />
          <MDBBtn onClick={this.submit}>Upload Item</MDBBtn>
        </form>
      </div>
    );
  }
}
