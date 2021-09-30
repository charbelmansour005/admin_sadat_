import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import "../../styles/Digital.css";
import { SortByAlphaTwoTone } from "@material-ui/icons";

const TableDigitalMenu = ({
    categoryid,
    nameEN,
    sort,
    handleDelete,
    handleEdit,
    handleMenuName,
}) => {
    return (
        <div className="item-table-Digital-holder">
            <div id={"" + nameEN} className="item-Digital-holder">
                <div className="item-Digital-name">{nameEN}</div>
            </div>
            <div id={"" + sort} className="item-Digital-holder">
                <div className="item-Digital-name">{sort}</div>
            </div>
            <div className="item-Digital-group1">
                <div>
                    <CreateIcon onClick={() => handleEdit(categoryid)} className="item-modify-Digital-icon" />
                </div>
            </div>
            <div className="item-Digital-group1">
                <div>
                    <DeleteIcon
                        onClick={() => handleDelete(categoryid)}
                        className="item-delete-Digital-icon"
                    />
                </div>
            </div>
        </div>
    );
};

export default TableDigitalMenu;
