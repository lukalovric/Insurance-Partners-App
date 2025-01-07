import React from 'react';
import './Modal.css';

function PartnerModal({ partner, onClose }) {
  if (!partner) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Partner Details</h2>
        <table>
          <tbody>
            <tr>
              <td><strong>First Name:</strong></td>
              <td>{partner.firstName}</td>
            </tr>
            <tr>
              <td><strong>Last Name:</strong></td>
              <td>{partner.lastName}</td>
            </tr>
            <tr>
              <td><strong>Address:</strong></td>
              <td>{partner.address}</td>
            </tr>
            <tr>
              <td><strong>Partner Number:</strong></td>
              <td>{partner.partnerNumber}</td>
            </tr>
            <tr>
              <td><strong>Croatian PIN:</strong></td>
              <td>{partner.croatianPIN || 'N/A'}</td>
            </tr>
            <tr>
              <td><strong>Partner Type:</strong></td>
              <td>{partner.partnerTypeId === 1 ? 'Personal' : 'Legal'}</td>
            </tr>
            <tr>
              <td><strong>Created By:</strong></td>
              <td>{partner.createByUser}</td>
            </tr>
            <tr>
              <td><strong>Is Foreign:</strong></td>
              <td>{partner.isForeign ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <td><strong>External Code:</strong></td>
              <td>{partner.externalCode}</td>
            </tr>
            <tr>
              <td><strong>Gender:</strong></td>
              <td>{partner.gender}</td>
            </tr>
            <tr>
              <td><strong>Created At:</strong></td>
              <td>{new Date(partner.createdAtUtc).toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PartnerModal;
