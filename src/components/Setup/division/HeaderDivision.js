import React from "react";
import "../../../styles/Divisions.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const HeaderDivision = ({
  name,
  creationDate,
  lastModificationDate,
  category,
  sortName,
  sortCreationDate,
  sortLastModificationDate,
  sortGrp,
  
  sortBy,
}) => {
  return (
    <div className="division-head-holder">
      <div id={"" + name} className="division-holder">
        <div className="division-head-name">
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
        <div className="division-div">
          <div onClick={() => sortBy("category")} className="item-sort">
            {category}
          </div>
          {sortGrp === "1" && (
            <ArrowDropUpIcon style={{ alignSelf: "center" }} />
          )}
          {sortGrp === "2" && (
            <ArrowDropDownIcon style={{ alignSelf: "center" }} />
          )}
        </div>
        <div className="division-creation-date">
          <div onClick={() => sortBy("creationDate")} className="item-sort">
            {creationDate}
          </div>
          {sortCreationDate === "1" && (
            <ArrowDropUpIcon style={{ alignSelf: "center" }} />
          )}
          {sortCreationDate === "2" && (
            <ArrowDropDownIcon style={{ alignSelf: "center" }} />
          )}
        </div>
        <div className="division-mod-date">
          <div onClick={() => sortBy("lastModDate")} className="item-sort">
            {lastModificationDate}
          </div>
          {sortLastModificationDate === "1" && (
            <ArrowDropUpIcon style={{ alignSelf: "center" }} />
          )}
          {sortLastModificationDate === "2" && (
            <ArrowDropDownIcon style={{ alignSelf: "center" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderDivision;
