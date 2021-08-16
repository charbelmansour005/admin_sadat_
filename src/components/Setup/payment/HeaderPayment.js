import React from "react";
import "../../../styles/PaymentTypes.css";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const HeaderPaymentType = ({
  name,
  type,
  accountNumber,
  sortName,
  sortType,
  sortAccountNumber,
  sortBy,
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
        <div className="pay-price">
          <div onClick={() => sortBy("type")} className="pay-sort">
            {type}
          </div>
          {sortType === "1" && (
            <ArrowDropUpIcon style={{ alignSelf: "center" }} />
          )}
          {sortType === "2" && (
            <ArrowDropDownIcon style={{ alignSelf: "center" }} />
          )}
        </div>
        <div className="pay-group">
          <div onClick={() => sortBy("acc")} className="pay-sort">
            {accountNumber}
          </div>
          {sortAccountNumber === "1" && (
            <ArrowDropUpIcon style={{ alignSelf: "center" }} />
          )}
          {sortAccountNumber === "2" && (
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

export default HeaderPaymentType;
