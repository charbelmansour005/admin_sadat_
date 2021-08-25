import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import "../../../styles/Categories.css";

const TableCategory = ({
  key,
  catId,
  name,
  creationDate,
  lastModificationDate,
  handleDelete,
  handleEdit
}) => {
  return (
    <div className="cat-table-holder">
      <div  id={"" + name} className="cat-holder">
     
        <div className="cat-name">{name}</div>
        <div className="cat-creation-date">{creationDate}</div>
        <div className="cat-mod-date">{lastModificationDate}</div>
      </div>
      <div  className="cat-group1">
        <div>
          <CreateIcon onClick={() => handleEdit(catId)} className="cat-modify-icon" />
        </div>
      </div>
      <div className="cat-group1">
        <div>
          <DeleteIcon
            onClick={() => handleDelete(catId)}
            className="cat-delete-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default TableCategory;
