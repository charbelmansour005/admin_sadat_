import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import "../../../styles/Currency.css";

const TableCurrency = ({ name, handleDelete }) => {
  return (
    <div className="cur-table-holder">
      <div id={"" + name} className="cur-holder">
        <div className="cur-name">{name}</div>
      </div>
      <div className="cur-group1">
        <div>
          <CreateIcon className="cur-modify-icon" />
        </div>
      </div>
      <div className="cur-group1">
        <div>
          <DeleteIcon
            onClick={() => handleDelete(name)}
            className="cur-delete-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default TableCurrency;
