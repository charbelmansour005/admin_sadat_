import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import "../../../styles/Roles.css";

const TableRole = ({ roleId, name, handleDelete, handleEdit }) => {
  return (
    <div className="role-table-holder">
      <div id={"" + name} className="role-holder">
        <div className="role-name">{name}</div>
      </div>
      <div className="role-group1">
        <div>
          <CreateIcon
            onClick={() => handleEdit(roleId)}
            className="role-modify-icon"
          />
        </div>
      </div>
      <div className="role-group1">
        <div>
          <DeleteIcon
            onClick={() => handleDelete(roleId)}
            className="role-delete-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default TableRole;
