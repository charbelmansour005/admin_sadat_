import React from "react";
import "../../../styles/Digital.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const HeaderMenuItem = ({
    ItemName,
    ItemPrice,
    groupId
}) => {
    return (
        <div className="item-head-Digital-holder">
            <div id={"" + ItemName} className="item-Digital-holder">
                <div className="item-head-Digital-name">
                    <div>
                        {ItemName}
                    </div>
                </div>
            </div>

            <div id={"" + ItemPrice} className="item-Digital-holder">
                <div className="item-head-Digital-name">
                    <div>
                        {ItemPrice}
                    </div>
                </div>
            </div>
            <div id={"" + groupId} className="item-Digital-holder">
                <div className="item-head-Digital-name">
                    <div>
                        {groupId}
                    </div>
                </div>
            </div>
            <div className="item-group1">
                <div></div>
            </div>
            <div className="item-group1">
                <div></div>
            </div>
        </div>
    );
};

export default HeaderMenuItem;
