import React from "react";
import "../../../styles/Digital.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const HeaderMenuItem = ({
    code,
    nameEN,
    nameAR,
    description,
    price,
    cur,
    category,
    image
}) => {

    return (
        <div className="item-head-Digital-holder">
            <div id={"" + code} className="item-Digital-holder">
                <div className="item-head-Digital-name">
                    <div>
                        {code}
                    </div>
                </div>
            </div>

            <div id={"" + nameEN} className="item-Digital-holder">
                <div className="item-head-Digital-name">
                    <div>
                        {nameEN}
                    </div>
                </div>
            </div>
            <div id={"" + nameAR} className="item-Digital-holder">
                <div className="item-head-Digital-name">
                    <div>
                        {nameAR}
                    </div>
                </div>
            </div>
            <div id={"" + description} className="item-Digital-holder">
                <div className="item-head-Digital-name">
                    <div>
                        {description}
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
            <div id={"" + cur} className="item-Digital-holder">
                <div className="item-head-Digital-name">
                    <div>
                        {cur}
                    </div>
                </div>
            </div>
            <div id={"" + category} className="item-Digital-holder">
                <div className="item-head-Digital-name">
                    <div>
                        {category}
                    </div>
                </div>
            </div>
            <div id={"" + image} className="item-Digital-holder">
                <div className="item-head-Digital-name">
                    <div>
                        {image}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default HeaderMenuItem;
