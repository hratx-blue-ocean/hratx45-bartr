import React, { PureComponent } from "react";
import "../assets/styles/uploadItem.scss";
import UploadItemForm from "../components/UploadItemForm";

export default class UploadItemScreen extends PureComponent {
  render() {
    return (
      <div>
        <h1>Upload an Item</h1>
        <UploadItemForm />
      </div>
    );
  }
}
