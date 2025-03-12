import React, { useState } from "react";

const Forms = () => {
  // State Management for Form Fields
  const [formData, setFormData] = useState({
    propertyName: "",
    propertyType: "",
    numberOfUnits: "",
    propertyAddress: "",
    fileAttachment: null,
  });

  // Handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle File Upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, fileAttachment: e.target.files[0] });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="container">
      <h2>Borrower Company Info</h2>
      <form onSubmit={handleSubmit}>
        {/* Property Name */}
        <div className="form-group">
          <label>Property Name</label>
          <input
            type="text"
            name="propertyName"
            value={formData.propertyName}
            onChange={handleChange}
            placeholder="Enter Property Name"
            required
          />
        </div>

        {/* Property Type */}
        <div className="form-group">
          <label>Property Type</label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            required
          >
            <option value="">Select Property Type</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>

        {/* Number of Units */}
        <div className="form-group">
          <label>Number of Units</label>
          <input
            type="number"
            name="numberOfUnits"
            value={formData.numberOfUnits}
            onChange={handleChange}
            placeholder="Enter Number of Units"
            required
          />
        </div>

        {/* Property Address */}
        <div className="form-group">
          <label>Property Address</label>
          <textarea
            name="propertyAddress"
            value={formData.propertyAddress}
            onChange={handleChange}
            placeholder="Enter Property Address"
            required
          ></textarea>
        </div>

        {/* File Attachment */}
        <div className="form-group">
          <label>File Attachment</label>
          <input
            type="file"
            name="fileAttachment"
            onChange={handleFileChange}
          />
        </div>

        {/* Buttons */}
        <div className="button-group">
          <button type="button" className="back-btn">
            Back
          </button>
          <button type="submit" className="continue-btn">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
