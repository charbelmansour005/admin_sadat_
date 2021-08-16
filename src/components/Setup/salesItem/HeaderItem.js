import React from "react";
import "../../../styles/Items.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const HeaderItem = ({
  name,
  price,
  group,
  creationDate,
  lastModificationDate,
  sortName,
  sortPrice,
  sortGroup,
  sortCreationDate,
  sortLastModificationDate,
  sortBy,
}) => {
  return (
    <div className="item-head-holder">
      <div id={"" + name} className="item-holder">
        <div className="item-head-name">
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
        <div className="item-price">
          <div onClick={() => sortBy("price")} className="item-sort">
            {price}
          </div>
          {sortPrice === "1" && (
            <ArrowDropUpIcon style={{ alignSelf: "center" }} />
          )}
          {sortPrice === "2" && (
            <ArrowDropDownIcon style={{ alignSelf: "center" }} />
          )}
        </div>
        <div className="item-group">
          <div onClick={() => sortBy("group")} className="item-sort">
            {group}
          </div>
          {sortGroup === "1" && (
            <ArrowDropUpIcon style={{ alignSelf: "center" }} />
          )}
          {sortGroup === "2" && (
            <ArrowDropDownIcon style={{ alignSelf: "center" }} />
          )}
        </div>
        <div className="item-creation-date">
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
        <div className="item-mod-date">
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
      <div className="item-group1">
        <div></div>
      </div>
      <div className="item-group1">
        <div></div>
      </div>
    </div>
  );
};

export default HeaderItem;
