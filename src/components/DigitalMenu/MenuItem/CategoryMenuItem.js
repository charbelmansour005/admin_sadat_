import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import "../../../styles/Digital.css";

const CategoryMenuItem = ({
    indexe,
    name,
    handleDelete,
    handleEdit,
    itemid
}) => {
    return (
        <div className="item-table-Digital-holder">
            <div id={"" + name} className="item-Digital-holder">
                <div className="item-Digital-name">{name}</div>
            </div>
            <div id={"" + indexe} className="item-Digital-holder">
                <div className="item-Digital-name">{indexe}</div>
            </div>
            <div className="item-Digital-group1">
                <div>
                    <CreateIcon onClick={() => handleEdit(itemid)} className="item-modify-Digital-icon" />
                </div>
            </div>
            <div className="item-Digital-group1">
                <div>
                    <DeleteIcon
                        onClick={() => handleDelete(itemid)}
                        className="item-delete-Digital-icon"
                    />
                </div>
            </div>
        </div>
    );
};

export default CategoryMenuItem;
