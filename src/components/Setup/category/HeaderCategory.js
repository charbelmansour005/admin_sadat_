import React from "react";
import "../../../styles/Categories.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const HeaderCategory = ({
  name,
  creationDate,
  lastModificationDate,
  sortName,
  sortCreationDate,
  sortLastModificationDate,
  sortBy,
}) => {
  return (
    <div className="cat-head-holder">
      <div id={"" + name} className="cat-holder">
        <div className="cat-head-name">
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
        <div className="cat-creation-date">
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
        <div className="cat-mod-date">
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
      <div className="cat-group1">
        <div></div>
      </div>
      <div className="cat-group1">
        <div></div>
      </div>
    </div>
  );
};

export default HeaderCategory;
