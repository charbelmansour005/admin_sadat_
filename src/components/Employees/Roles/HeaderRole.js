import React from "react";
import "../../../styles/Roles.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const HeaderRole = ({
  name,
  role,
  func,
  sortName,
  sortRole,
  sortFunc,
  sortBy,
}) => {
  return (
    <div className="role-head-holder">
      <div id={"" + name} className="role-holder">
        <div className="role-head-name">
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
      <div className="role-group1">
        <div></div>
      </div>
      <div className="role-group1">
        <div></div>
      </div>
    </div>
  );
};

export default HeaderRole;
