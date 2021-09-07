import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import "../../../styles/CustomerCategory.css";

const TableCustomerCategory = ({

  name,
  customerCategoryId,
  handleDelete,
  handleEdit }) => {
  return (
    <div className="cur-table-holder">
      <div id={"" + name} className="cur-holder">
        <div className="cur-name">{name}</div>
       
      
      </div>
      <div className="cur-group1">
        <div>
          <CreateIcon onClick={() => handleEdit(customerCategoryId)} className="cur-modify-icon" />
        </div>
      </div>

      <div className="cur-group1">
        <div>
          <DeleteIcon
            onClick={() => handleDelete(customerCategoryId)}
            className="cur-delete-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default TableCustomerCategory;
