import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import "../../../styles/PaymentTypes.css";

const TablePaymentType = ({ name, type, accountNumber, handleDelete }) => {
  return (
    <div className="pay-table-holder">
      <div id={"" + name} className="pay-holder">
        <div className="pay-name">{name}</div>
        <div className="pay-price">{type}</div>
        <div className="pay-group">{accountNumber}</div>
      </div>
      <div className="pay-group1">
        <div>
          <CreateIcon className="pay-modify-icon" />
        </div>
      </div>
      <div className="pay-group1">
        <div>
          <DeleteIcon
            onClick={() => handleDelete(name)}
            className="pay-delete-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default TablePaymentType;
