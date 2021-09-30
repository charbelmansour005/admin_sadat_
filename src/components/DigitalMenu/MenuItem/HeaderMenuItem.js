import React from "react";
import "../../../styles/Digital.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const HeaderMenuItem = ({
    nameEN,
    price,
    categoryid,
    sort
}) => {
    return (
        <div className="item-head-Digital-holder">
            <div id={"" + nameEN} className="item-Digital-holder">
                <div className="item-head-Digital-name">
                    <div>
                        {nameEN}
                    </div>
                </div>
            </div>

            <div id={"" + price} className="item-Digital-holder">
                <div className="item-head-Digital-name">
                    <div>
                        {price}
                    </div>
                </div>
            </div>
            <div id={"" + categoryid} className="item-Digital-holder">
                <div className="item-head-Digital-name">
                    <div>
                        {categoryid}
                    </div>
                </div>
            </div>
            <div id={"" + sort} className="item-Digital-holder">
                <div className="item-head-Digital-name">
                    <div>
                        {sort}
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
