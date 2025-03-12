import React from "react";
import { CiCircleInfo } from "react-icons/ci";

export default function Form() {
  return (
    <div className="form-parent">
      <h2>Borrower Company Info</h2>
      <div className="parent-input">
        <div className="first-row">
          <div className="one-field">
            <label className="label-name">
              Property Name
              <CiCircleInfo />
            </label>
            <input type="text" placeholder="Property Name" className="input" />
          </div>
          <div className="one-field">
            <label className="label-name">Property Type</label>
            <select className="input-select">
              <option value="Own House">Own House</option>
              <option value="Rented">Rented</option>
            </select>
          </div>
          <div className="one-field">
            <label className="label-name">Number of Units</label>
            <select className="input-select">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
        <div className="second-row">
          <div className="property">
            <label className="label-property">Property Address</label>
            <textarea className="text-area" placeholder="Enter Borrower Name" />
          </div>
          <div className="property">
            <label className="label-property">File Attachment</label>
            <input type="file" className="file" />
          </div>
        </div>
      </div>
    </div>
  );
}
