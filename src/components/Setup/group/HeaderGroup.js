import React from "react";
import "../../../styles/Groups.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const HeaderGroup = ({
  name,
  creationDate,
  lastModificationDate,
  div,
  sortName,
  sortCreationDate,
  sortLastModificationDate,
  sortDiv,
  sortBy,
}) => {
  return (
    <div className="grp-head-holder">
      <div id={"" + name} className="grp-holder">
        <div className="grp-head-name">
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
        <div className="grp-div">
          <div onClick={() => sortBy("div")} className="item-sort">
            {div}
          </div>
          {sortDiv === "1" && (
            <ArrowDropUpIcon style={{ alignSelf: "center" }} />
          )}
          {sortDiv === "2" && (
            <ArrowDropDownIcon style={{ alignSelf: "center" }} />
          )}
        </div>
        <div className="grp-creation-date">
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
        <div className="grp-mod-date">
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

export default HeaderGroup;
