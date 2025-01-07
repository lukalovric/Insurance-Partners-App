import React, { useState } from 'react';

function PolicyDialog({ partner, onClose }) {
  const [policy, setPolicy] = useState({
    policyNumber: '',
    amount: '',
    partnerId: partner.id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPolicy({ ...policy, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://localhost:7022/api/Policy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(policy),
      });
      console.log('Policy submitted:', policy);
      onClose();
    } catch (error) {
      console.error('Error submitting policy:', error);
    }
  };

  return (
    <div className="dialog">
      <div className="dialog-content">
        <h2>Add Policy for {partner.firstName} {partner.lastName}</h2>
        <form onSubmit={handleSubmit}>
          <label>Policy Number:</label>
          <input
            type="text"
            name="policyNumber"
            value={policy.policyNumber}
            onChange={handleChange}
            required
          />
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={policy.amount}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PolicyDialog;
