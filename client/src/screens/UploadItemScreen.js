import React, { PureComponent } from "react";
import "../assets/styles/uploadItem.scss";
import UploadItemForm from "../components/UploadItemForm";

export default class UploadItemScreen extends PureComponent {
  render() {
    return (
      <div id="postItemScreen">
       <h1>Post an Item</h1>
        <UploadItemForm />
      </div>
    );
  }
}
