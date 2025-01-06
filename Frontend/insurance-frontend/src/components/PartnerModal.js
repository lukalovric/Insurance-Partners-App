import React from 'react';
import './Modal.css';


function PartnerModal({ partner, onClose }) {
  if (!partner) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Partner Details</h2>
        <p><strong>Full Name:</strong> {partner.firstName} {partner.lastName}</p>
        <p><strong>Address:</strong> {partner.address}</p>
        <p><strong>Created By:</strong> {partner.createByUser}</p>
        <p><strong>External Code:</strong> {partner.externalCode}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PartnerModal;
