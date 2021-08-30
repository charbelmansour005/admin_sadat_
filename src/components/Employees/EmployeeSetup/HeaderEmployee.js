import React from "react";
import "../../../styles/Employees.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const HeaderEmployee = ({
  name,
  role,
  func,
  sortName,
  sortRole,
  sortFunc,
  sortBy,
}) => {
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
        <div className="emp-creation-date">
          <div onClick={() => sortBy("role")} className="item-sort">
            {role}
          </div>
          {sortRole === "1" && (
            <ArrowDropUpIcon style={{ alignSelf: "center" }} />
          )}
          {sortRole === "2" && (
            <ArrowDropDownIcon style={{ alignSelf: "center" }} />
          )}
        </div>
        <div className="emp-mod-date">
          <div onClick={() => sortBy("lastModDate")} className="item-sort">
            {func}
          </div>
          {sortFunc === "1" && (
            <ArrowDropUpIcon style={{ alignSelf: "center" }} />
          )}
          {sortFunc === "2" && (
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
};

export default HeaderEmployee;
