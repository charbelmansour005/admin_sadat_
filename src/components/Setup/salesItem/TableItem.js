import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import "../../../styles/Items.css";

const TableItem = ({
  key,
  name,
  price,
  group,
  creationDate,
  lastModificationDate,
  handleDelete,
}) => {
  return (
    <div className="item-table-holder">
      <div id={"" + name} className="item-holder">
        <div className="item-name">{name}</div>
        <div className="item-price">{price}</div>
        <div className="item-group">{group}</div>
        <div className="item-creation-date">{creationDate}</div>
        <div className="item-mod-date">{lastModificationDate}</div>
      </div>
      <div className="item-group1">
        <div>
          <CreateIcon className="item-modify-icon" />
        </div>
      </div>
      <div className="item-group1">
        <div>
          <DeleteIcon
            onClick={() => handleDelete(name)}
            className="item-delete-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default TableItem;
