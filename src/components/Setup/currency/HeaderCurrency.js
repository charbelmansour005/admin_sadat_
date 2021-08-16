import React from "react";
import "../../../styles/Currency.css";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const HeaderCurrency = ({
  name,
  sortName,
  sortBy
}) => {
  return (
    <div className="pay-head-holder">
      <div id={"" + name} className="pay-holder">
        <div className="pay-head-name">
          <div onClick={() => sortBy("name")} className="pay-sort">
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
      <div className="pay-group1">
        <div></div>
      </div>
      <div className="pay-group1">
        <div></div>
      </div>
    </div>
  );
};

export default HeaderCurrency;
