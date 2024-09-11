import React from 'react';
import { Modal as AntdModal, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';

const UsersTransactionModal = ({ isModalVisible, setIsModalVisible, setSelectedTransaction, selectedTransaction }) => {
  const navigate = useNavigate();

  const handleDownloadPDF = () => {
    if (selectedTransaction) {
      const pdf = new jsPDF();

      // Add title
      pdf.setFontSize(20);
      pdf.text('User Transaction Details', 105, 20, { align: 'center' });

      // Add content
      pdf.setFontSize(12);
      pdf.text(`User Name: ${selectedTransaction.userName}`, 20, 40);
      pdf.text(`Email: ${selectedTransaction.email}`, 20, 50);
      pdf.text(`Subscription Package: ${selectedTransaction.phoneNumber}`, 20, 60);
      pdf.text(`Address: ${selectedTransaction.address}`, 20, 70);
      pdf.text(`Joining Date: ${selectedTransaction.joindate}`, 20, 80);

      // Save PDF
      pdf.save(`transaction_${selectedTransaction.userName}.pdf`);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedTransaction(null);
  };

  return (
    <AntdModal
      title="Users Details"
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={
        <div style={{ display: "flex", justifyContent: 'center', gap: "10px", padding: "20px" }}>
          <Button
            className="download-button"
            style={{
              backgroundColor: 'transparent', 
              color: '#193664', 
              borderRadius: '15px', 
              width: "200px",
              height: "44px",
              fontWeight: "bold",
              border: "2px solid #193664",
            }}
            key="download" onClick={handleDownloadPDF}>
            Download
          </Button>,
        </div>
      }
      className="text-center custom-modal"
    >
      {selectedTransaction && (
        <div id="print-section">
          <p className="transaction-detail">
            <strong>User Name:</strong> {selectedTransaction.fullName}
          </p>
          <p className="transaction-detail">
            <strong>Email:</strong> {selectedTransaction.email}
          </p>
          <p className="transaction-detail">
            <strong>Subscription Package:</strong> {selectedTransaction.phoneNumber}
          </p>
          <p className="transaction-detail">
            <strong>Address:</strong> {selectedTransaction.address}
          </p>
          <p className="transaction-detail">
            <strong>Joining Date:</strong>  <p>{selectedTransaction?.createdAt?.split("T")[0] ? selectedTransaction?.createdAt?.split("T")[0] : "N/A"}</p>
          </p>
        </div>
      )}
    </AntdModal>
  );
};

export default UsersTransactionModal;
