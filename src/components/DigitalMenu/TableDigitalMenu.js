import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import "../../styles/Digital.css";

const TableDigitalMenu = ({
    groupId,
    menuName,
    handleDelete,
    handleEdit,
    handleMenuName,
}) => {
    return (
        <div  className="item-table-Digital-holder">
            <div id={"" + menuName} className="item-Digital-holder">
                <div className="item-Digital-name">{menuName}</div>
            </div>
            <div className="item-Digital-group1">
                <div>
                    <CreateIcon onClick={() => handleEdit(groupId)} className="item-modify-Digital-icon" />
                </div>
            </div>
            <div className="item-Digital-group1">
                <div>
                    <DeleteIcon
                        onClick={() => handleDelete(groupId)}
                        className="item-delete-Digital-icon"
                    />
                </div>
            </div>
        </div>
    );
};

export default TableDigitalMenu;
