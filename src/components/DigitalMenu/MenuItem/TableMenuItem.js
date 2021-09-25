import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import "../../../styles/Digital.css";

const TableMenuItem = ({
    itemId,
    ItemName,
    ItemPrice,
    groupId,
    handleDelete,
    handleEdit,
}) => {
    return (
        <div className="item-table-Digital-holder">
            <div id={"" + ItemName} className="item-Digital-holder">
                <div className="item-Digital-name">{ItemName}</div>
            </div>
            <div id={"" + ItemPrice} className="item-Digital-holder">
                <div className="item-Digital-name">{ItemPrice}</div>
            </div>
            <div id={"" + groupId} className="item-Digital-holder">
                <div className="item-Digital-name">{groupId}</div>
            </div>
            <div className="item-Digital-group1">
                <div>
                    <CreateIcon onClick={() => handleEdit(itemId)} className="item-modify-Digital-icon" />
                </div>
            </div>
            <div className="item-Digital-group1">
                <div>
                    <DeleteIcon
                        onClick={() => handleDelete(itemId)}
                        className="item-delete-Digital-icon"
                    />
                </div>
            </div>
        </div>
    );
};

export default TableMenuItem;
