import React from "react";
import "../../../styles/VoidReason.css";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const HeaderVoid = ({ name, sortName, sortBy }) => {
  return (
    <div className="void-head-holder">
      <div id={"" + name} className="void-holder">
        <div className="void-head-name">
          <div onClick={() => sortBy("name")} className="void-sort">
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
      <div className="void-group1">
        <div></div>
      </div>
      <div className="void-group1">
        <div></div>
      </div>
    </div>
  );
};

export default HeaderVoid;
