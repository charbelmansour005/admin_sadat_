import React from "react";
import "../../styles/Digital.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const HeaderDigital = ({
    indexe,
    name
}) => {
    return (
        <div className="item-head-Digital-holder">
            <div id={"" + indexe} className="item-Digital-holder">
                <div className="item-head-Digital-name">
                    <div>
                        {indexe}
                    </div>
                </div>
            </div>
            <div id={"" + name} className="item-Digital-holder">
                <div className="item-head-Digital-name">
                    <div>
                        {name}
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

export default HeaderDigital;
