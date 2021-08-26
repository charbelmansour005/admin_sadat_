import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import "../../../styles/Divisions.css";

const TableDivision = ({
  name,
  category,
  divisionId,
  creationDate,
  lastModificationDate,
  handleDelete,
  handleEdit
}) => {
  return (
    <div className="division-table-holder">
      <div id={"" + name} className="division-holder">
        <div className="division-name">{name}</div>
        <div className="division-div">{category}</div>
        <div className="division-creation-date">{creationDate}</div>
        <div className="division-mod-date">{lastModificationDate}</div>
      </div>
      <div className="division-group1">
        <div>
          <CreateIcon onClick={()=>handleEdit(divisionId)} className="division-modify-icon" />
        </div>
      </div>
      <div className="division-group1">
        <div>
          <DeleteIcon
            onClick={() => handleDelete(divisionId)}
            className="division-delete-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default TableDivision;
