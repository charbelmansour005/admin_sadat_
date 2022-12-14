import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import "../../../styles/PaymentTypes.css";

const TablePaymentType = ({ name, paymentType,paymentId, accountNumber,paymentStatus, handleDelete,  handleEdit }) => {
  return (
    <div className="pay-table-holder">
      <div id={"" + name} className="pay-holder">
        <div className="pay-name">{name}</div>
        <div className="pay-price">{paymentType}</div>
        <div className="pay-group">{accountNumber}</div>
        <div className="pay-group">{paymentStatus}</div>
      </div>
      <div className="pay-group1">
        <div>
          <CreateIcon onClick={() => handleEdit(paymentId)} className="pay-modify-icon" />
        </div>
      </div>
      <div className="pay-group1">
        <div>
          <DeleteIcon
            onClick={() => handleDelete(paymentId)}
            className="pay-delete-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default TablePaymentType;
