import React, { useState } from 'react';
import { Modal as AntdModal, Button } from "antd";
import './manager.css';

const TransactionTableModal = ({ isModalVisible, setIsModalVisible, setSelectedTransaction, selectedTransaction }) => {
    const handleDownload = () => {
        if (selectedTransaction) {
            const element = document.createElement("a");
            const file = new Blob(
                [JSON.stringify(selectedTransaction, null, 2)],
                { type: "text/plain" }
            );
            element.href = URL.createObjectURL(file);
            element.download = `transaction_${selectedTransaction.taxId}.txt`;
            document.body.appendChild(element);
            element.click();
        }
    };

    const handlePrint = () => {
        if (selectedTransaction) {
            const printContent = document.getElementById("print-section").innerHTML;
            const originalContent = document.body.innerHTML;
            document.body.innerHTML = printContent;
            window.print();
            document.body.innerHTML = originalContent;
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedTransaction(null);
    };

    return (
        <AntdModal
            title="Transaction Details"
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
                    key="download" onClick={handleDownload}>
                    Download
                </Button>,
                <Button 
                    style={{
                        backgroundColor: '#193664', 
                        color: 'white', 
                        borderRadius: '15px', 
                        width: "200px",
                        height: "44px"
                    }}
                    key="print" onClick={handlePrint}>
                    Print
                </Button>,
               </div>
            }
            className="custom-modal rounded-lg"
        >
            {selectedTransaction && (
                <div className='transaction-details' id="print-section">
                    <p className="transaction-detail">
                        <strong>Transaction ID:</strong> {selectedTransaction.taxId}
                    </p>
                    <p className="transaction-detail">
                        <strong>Date:</strong> {selectedTransaction.name}
                    </p>
                    <p className="transaction-detail">
                        <strong>User name:</strong> {selectedTransaction.subPackage}
                    </p>
                    <p className="transaction-detail">
                        <strong>A/C number:</strong> {selectedTransaction.amount}
                    </p>
                    <p className="transaction-detail">
                        <strong>A/C holder name:</strong> {selectedTransaction.amount}
                    </p>
                    <p className="transaction-detail">
                        <strong>Transaction amount:</strong> {selectedTransaction.date}
                    </p>
                </div>
            )}
        </AntdModal>
    );
};

export default TransactionTableModal;
