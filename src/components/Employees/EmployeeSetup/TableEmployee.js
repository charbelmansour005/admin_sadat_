import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import "../../../styles/Employees.css";

const TableEmployee = ({
  key,
  catId,
  name,
  role,
  lastModificationDate,
  handleDelete,
  handleEdit,
}) => {
  return (
    <div className="emp-table-holder">
      <div id={"" + name} className="emp-holder">
        <div className="emp-name">{name}</div>
        <div className="emp-creation-date">{role}</div>
        <div className="emp-mod-date">{lastModificationDate}</div>
      </div>
      <div className="emp-group1">
        <div>
          <CreateIcon
            onClick={() => handleEdit(catId)}
            className="emp-modify-icon"
          />
        </div>
      </div>
      <div className="emp-group1">
        <div>
          <DeleteIcon
            onClick={() => handleDelete(catId)}
            className="emp-delete-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default TableEmployee;
