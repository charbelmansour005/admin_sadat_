import React from "react";
import "../../styles/Customers.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const HeaderCustomer = ({
  name,
  lastName,
  company,
  phoneNumber,
  sortFirstName,
  sortLastName,
  sortCompany,
  sortPhone,
  sortBy,
}) => {
  return (
    <div className="cust-head-holder">
      <div id={"" + name} className="cust-holder">
        <div className="cust-head-name">
          <div onClick={() => sortBy("name")} className="item-sort">
            {name}
          </div>
          {sortFirstName === "1" && (
            <ArrowDropUpIcon style={{ alignSelf: "center" }} />
          )}
          {sortFirstName === "2" && (
            <ArrowDropDownIcon style={{ alignSelf: "center" }} />
          )}
        </div>
        <div className="cust-name">
          <div onClick={() => sortBy("lastName")} className="item-sort">
            {lastName}
          </div>
          {sortLastName === "1" && (
            <ArrowDropUpIcon style={{ alignSelf: "center" }} />
          )}
          {sortLastName === "2" && (
            <ArrowDropDownIcon style={{ alignSelf: "center" }} />
          )}
        </div>
        <div className="cust-mod-date">
          <div onClick={() => sortBy("company")} className="item-sort">
            {company}
          </div>
          {sortCompany === "1" && (
            <ArrowDropUpIcon style={{ alignSelf: "center" }} />
          )}
          {sortCompany === "2" && (
            <ArrowDropDownIcon style={{ alignSelf: "center" }} />
          )}
        </div>
        <div className="cust-mod-date">
          <div onClick={() => sortBy("phoneNumber")} className="item-sort">
            {phoneNumber}
          </div>
          {sortPhone === "1" && (
            <ArrowDropUpIcon style={{ alignSelf: "center" }} />
          )}
          {sortPhone === "2" && (
            <ArrowDropDownIcon style={{ alignSelf: "center" }} />
          )}
        </div>
      </div>
      <div className="cust-group1">
        <div></div>
      </div>
      <div className="cust-group1">
        <div></div>
      </div>
    </div>
  );
};

export default HeaderCustomer;
