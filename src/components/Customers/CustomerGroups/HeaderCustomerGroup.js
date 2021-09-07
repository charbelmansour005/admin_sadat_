import React from "react";
import "../../../styles/CustomerGroup.css";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const HeaderCustomerGroup = ({ name, sortName, sortBy }) => {
  return (
    <div className="cur-head-holder">
      <div id={"" + name} className="cur-holder">
        <div className="cur-head-name">
          <div onClick={() => sortBy("name")} className="cur-sort">
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
      <div className="cur-group1">
        <div></div>
      </div>
      <div className="cur-group1">
        <div></div>
      </div>
    </div>
  );
};

export default HeaderCustomerGroup;
