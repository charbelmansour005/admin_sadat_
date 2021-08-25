import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import "../../../styles/Groups.css";

const TableGroup = ({
  name,
  div,
  creationDate,
  lastModificationDate,
  handleDelete,
}) => {
  return (
    <div className="grp-table-holder">
      <div id={"" + name} className="grp-holder">
        <div className="grp-name">{name}</div>
        <div className="grp-div">{div}</div>
        <div className="grp-creation-date">{creationDate}</div>
        <div className="grp-mod-date">{lastModificationDate}</div>
      </div>
      <div className="grp-group1">
        <div>
          <CreateIcon className="grp-modify-icon" />
        </div>
      </div>
      <div className="grp-group1">
        <div>
          <DeleteIcon
            onClick={() => handleDelete(name)}
            className="grp-delete-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default TableGroup;
