import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import "../../../styles/Digital.css";

const TableMenuItem = ({
    code,
    nameEN,
    nameAR,
    description,
    price,
    cur,
    category,
    image,


    handleDelete,
    handleEdit,


    indexe,
    name,

//MAIN WORKS
}) => {
    return (
        <div className="item-table-Digital-holder">
            <div id={"" + code} className="item-Digital-holder">
                <div className="item-Digital-name">{code}</div>
            </div>
            <div id={"" + nameEN} className="item-Digital-holder">
                <div className="item-Digital-name">{nameEN}</div>
            </div>
            <div id={"" + nameAR} className="item-Digital-holder">
                <div className="item-Digital-name">{nameAR}</div>
            </div>
            <div id={"" + description} className="item-Digital-holder">
                <div className="item-Digital-name">{description}</div>
            </div>
            <div id={"" + price} className="item-Digital-holder">
                <div className="item-Digital-name">{price}</div>
            </div>
            <div id={"" + cur} className="item-Digital-holder">
                <div className="item-Digital-name">{cur}</div>
            </div>
            <div id={"" + category} className="item-Digital-holder">
                <div className="item-Digital-name">{category}</div>
            </div>
            <div id={"" + image} className="item-Digital-holder">
                <div className="item-Digital-name">{image}</div>
            </div>
            {/* <div className="item-Digital-holder">
                <div className="item-Digital-name"></div>
            </div> */}
            {/* <div className="item-Digital-holder">
                <div className="item-Digital-name"></div>
            </div> */}

{/* 

            <div id={indexe} className="item-Digital-holder">
                <div className="item-Digital-name">{indexe}</div>
            </div>
            <div id={name} className="item-Digital-holder">
                <div className="item-Digital-name">{name}</div>
            </div>
             */}


            <div className="item-Digital-group1">
                <div>
                    <CreateIcon onClick={() => handleEdit(code)} className="item-modify-Digital-icon" />
                </div>
            </div>
            <div className="item-Digital-group1">
                <div>
                    <DeleteIcon
                        onClick={() => handleDelete(code)}
                        className="item-delete-Digital-icon"
                    />
                </div>
            </div>
        </div>
    );
};

export default TableMenuItem;
