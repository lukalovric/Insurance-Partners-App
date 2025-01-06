import React, { useState } from 'react';
import axios from 'axios';
import './AddPartner.css'; // Import CSS file

function AddPartner() {
  const [partner, setPartner] = useState({
    firstName: '',
    lastName: '',
    address: '',
    partnerNumber: '',
    croatianPIN: '',
    partnerTypeId: 1,
    createByUser: '',
    isForeign: false,
    externalCode: '',
    gender: 'M',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPartner({ ...partner, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:7022/api/Partner', partner);
      alert('Partner added successfully!');
      window.location.href = '/';
    } catch (error) {
      console.error('Error adding partner:', error);
      alert('Failed to add partner.');
    }
  };

  return (
    <div className="add-partner-container">
      <h1>Add Partner</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={partner.firstName}
            onChange={handleChange}
            required
            minLength="2"
            maxLength="255"
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={partner.lastName}
            onChange={handleChange}
            required
            minLength="2"
            maxLength="255"
          />
        </label>

        <label>
          Address:
          <input
            type="text"
            name="address"
            value={partner.address}
            onChange={handleChange}
          />
        </label>

        <label>
          Partner Number:
          <input
            type="text"
            name="partnerNumber"
            value={partner.partnerNumber}
            onChange={handleChange}
            required
            minLength="20"
            maxLength="20"
          />
        </label>

        <label>
          Croatian PIN (optional):
          <input
            type="text"
            name="croatianPIN"
            value={partner.croatianPIN}
            onChange={handleChange}
            maxLength="11"
          />
        </label>

        <label>
          Partner Type:
          <select
            name="partnerTypeId"
            value={partner.partnerTypeId}
            onChange={handleChange}
            required
          >
            <option value={1}>Personal</option>
            <option value={2}>Legal</option>
          </select>
        </label>

        <label>
          Created By (Email):
          <input
            type="email"
            name="createByUser"
            value={partner.createByUser}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Is Foreign:
          <input
            type="checkbox"
            name="isForeign"
            checked={partner.isForeign}
            onChange={handleChange}
          />
        </label>

        <label>
          External Code:
          <input
            type="text"
            name="externalCode"
            value={partner.externalCode}
            onChange={handleChange}
            required
            minLength="10"
            maxLength="20"
          />
        </label>

        <label>
          Gender:
          <select
            name="gender"
            value={partner.gender}
            onChange={handleChange}
            required
          >
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="N">Non-binary</option>
          </select>
        </label>

        <button type="submit">Add Partner</button>
      </form>
    </div>
  );
}

export default AddPartner;
