import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import PartnerModal from './PartnerModal';
import PolicyDialog from './PolicyDialog';
import './PartnerList.css';

function PartnerList() {
  const [partners, setPartners] = useState([]);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showPolicyDialog, setShowPolicyDialog] = useState(false);
  const [highlightedPartnerId, setHighlightedPartnerId] = useState(null);
  const policyDialogRef = useRef(null);
  const [specialMarks, setSpecialMarks] = useState({});

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await axios.get('https://localhost:7022/api/Partner');
        setPartners(response.data);

        const marks = {};
        for (const partner of response.data) {
          const markResponse = await axios.get(
            `https://localhost:7022/api/Policy/HasSpecialMark/${partner.id}`
          );
          marks[partner.id] = markResponse.data;
        }
        setSpecialMarks(marks);

        const urlParams = new URLSearchParams(window.location.search);
        const newPartnerId = urlParams.get('newPartnerId');
        if (newPartnerId) {
          setHighlightedPartnerId(parseInt(newPartnerId));
        }
      } catch (error) {
        console.error('Error fetching partners:', error);
      }
    };

    fetchPartners();
  }, []);

  const clearHighlight = () => {
    const url = new URL(window.location);
    url.searchParams.delete('newPartnerId');
    window.history.replaceState({}, '', url);
    setHighlightedPartnerId(null);
  };

  const openModal = (partner) => {
    setSelectedPartner(partner);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const openPolicyDialog = (partner) => {
    setSelectedPartner(partner);
    setShowPolicyDialog(true);

    setTimeout(() => {
      policyDialogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);  
  };

  const closePolicyDialog = () => setShowPolicyDialog(false);

  return (
    <div className="partner-list-container" onClick={clearHighlight}>
      <h1>Partner List</h1>
      <button onClick={() => window.location.href = '/add-partner'}>Add Partner</button>

      <table className="partner-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Partner Number</th>
            <th>Partner Type</th>
            <th>Is Foreign</th>
            <th>Gender</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {partners.map(partner => (
            <tr
              key={partner.id}
              onClick={() => openModal(partner)}
              className={`partner-row ${
                highlightedPartnerId === partner.id ? 'highlighted' : ''
              }`}
            >
              <td>                {specialMarks[partner.id] ? '*' : ''} {partner.firstName} {partner.lastName}
              </td>
              <td>{partner.partnerNumber}</td>
              <td>{partner.partnerTypeId === 1 ? 'Personal' : 'Legal'}</td>
              <td>{partner.isForeign ? 'Yes' : 'No'}</td>
              <td>{partner.gender}</td>
              <td>{new Date(partner.createdAtUtc).toLocaleString()}</td>
              <td>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openPolicyDialog(partner);
                  }}
                >
                  Add Policy
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <PartnerModal partner={selectedPartner} onClose={closeModal} />
      )}

      <div ref={policyDialogRef}>
        {showPolicyDialog && (
          <PolicyDialog partner={selectedPartner} onClose={closePolicyDialog} />
        )}
      </div>
    </div>
  );
}

export default PartnerList;
