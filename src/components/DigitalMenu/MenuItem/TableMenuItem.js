import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import "../../../styles/Digital.css";

const TableMenuItem = ({
    itemid,
    nameEN,
    price,
    categoryid,
    sort,
    handleDelete,
    handleEdit,
}) => {
    return (
        <div className="item-table-Digital-holder">
            <div id={"" + nameEN} className="item-Digital-holder">
                <div className="item-Digital-name">{nameEN[1]}</div>
            </div>
            <div id={"" + price} className="item-Digital-holder">
                <div className="item-Digital-name">{price}</div>
            </div>
            <div id={"" + categoryid} className="item-Digital-holder">
                <div className="item-Digital-name">{nameEN[0]}</div>
            </div>
            <div id={"" + sort} className="item-Digital-holder">
                <div className="item-Digital-name">{sort}</div>
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

export default TableMenuItem;
