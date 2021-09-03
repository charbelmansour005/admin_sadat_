import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import "../../../styles/Employees.css";

const TableEmployee = ({
  employeeId,
  name,
  role,
  func,
  handleDelete,
  handleEdit,
}) => {
  return (
    <div className="emp-table-holder">
      <div id={"" + name} className="emp-holder">
        <div className="emp-name">{name}</div>
        <div className="emp-creation-date">{role}</div>
        <div className="emp-mod-date">{func}</div>
      </div>
      <div className="emp-group1">
        <div>
          <CreateIcon
            onClick={() => handleEdit(employeeId)}
            className="emp-modify-icon"
          />
        </div>
      </div>
      <div className="emp-group1">
        <div>
          <DeleteIcon
            onClick={() => handleDelete(employeeId)}
            className="emp-delete-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default TableEmployee;
