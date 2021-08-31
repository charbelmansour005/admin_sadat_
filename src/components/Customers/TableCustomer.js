import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import "../../styles/Customers.css";

const TableCustomer = ({

  customerId,
  name,
  lastName,
  company,
  phoneNumber,
  handleDelete,
  handleEdit,
}) => {
  return (
    <div className="cust-table-holder">
      <div id={"" + name} className="cust-holder">
        <div className="cust-name">{name}</div>
        <div className="cust-name">{lastName}</div>
        <div className="cust-mod-date">{company}</div>
        <div className="cust-mod-date">{phoneNumber}</div>
      </div>
      <div className="cust-group1">
        <div>
          <CreateIcon
            onClick={() => handleEdit(customerId)}
            className="cust-modify-icon"
          />
        </div>
      </div>
      <div className="cust-group1">
        <div>
          <DeleteIcon
            onClick={() => handleDelete(customerId)}
            className="cust-delete-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default TableCustomer;
