import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import "../../../styles/PaymentTypes.css";

const TableVoid = ({ name, handleDelete }) => {
  return (
    <div className="void-table-holder">
      <div id={"" + name} className="void-holder">
        <div className="void-name">{name}</div>
      </div>
      <div className="void-group1">
        <div>
          <CreateIcon className="void-modify-icon" />
        </div>
      </div>
      <div className="void-group1">
        <div>
          <DeleteIcon
            onClick={() => handleDelete(name)}
            className="void-delete-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default TableVoid;
