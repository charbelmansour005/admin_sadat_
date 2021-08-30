import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import "../../styles/Customers.css";

const TableCustomer = ({
  key,
  custId,
  firstName,
  lastName,
  company,
  phone,
  handleDelete,
  handleEdit,
}) => {
  return (
    <div className="cust-table-holder">
      <div id={"" + firstName} className="cust-holder">
        <div className="cust-name">{firstName}</div>
        <div className="cust-name">{lastName}</div>
        <div className="cust-mod-date">{company}</div>
        <div className="cust-mod-date">{phone}</div>
      </div>
      <div className="cust-group1">
        <div>
          <CreateIcon
            onClick={() => handleEdit(custId)}
            className="cust-modify-icon"
          />
        </div>
      </div>
      <div className="cust-group1">
        <div>
          <DeleteIcon
            onClick={() => handleDelete(custId)}
            className="cust-delete-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default TableCustomer;
