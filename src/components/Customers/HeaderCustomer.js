import React from "react";
import "../../styles/Customers.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const HeaderCustomer = ({
  firstName,
  lastName,
  company,
  phone,
  sortFirstName,
  sortLastName,
  sortCompany,
  sortPhone,
  sortBy,
}) => {
  return (
    <div className="cust-head-holder">
      <div id={"" + firstName} className="cust-holder">
        <div className="cust-head-name">
          <div onClick={() => sortBy("firstName")} className="item-sort">
            {firstName}
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
          <div onClick={() => sortBy("phone")} className="item-sort">
            {phone}
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
