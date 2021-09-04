import React from "react";
import "../../../styles/EmpSchedule.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";


const HeaderEmpSchedule = ({ name,
    sortName,
    sortBy }) => {
    return (
        <div className="emp-head-holder">
            <div id={"" + name} className="emp-holder">
                <div className="emp-head-name">
                    <div onClick={() => sortBy("name")} className="item-sort">
                        {name}
                    </div>
                    {sortName === "1" && (
                        <ArrowDropUpIcon style={{ alignSelf: "center" }} />
                    )}
                    {sortName === "2" && (
                        <ArrowDropDownIcon style={{ alignSelf: "center" }} />
                    )}
                </div>
            </div>
            <div className="emp-group1">
                <div></div>
            </div>
            <div className="emp-group1">
                <div></div>
            </div>
        </div>
    );
}

export default HeaderEmpSchedule;