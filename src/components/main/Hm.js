import React, { useState, useEffect } from "react";
import "../../styles/Hm.css";
import { Switch, Route, Link, HashRouter } from "react-router-dom";
import history from "../history";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from "@material-ui/icons/Settings";
import PersonIcon from "@material-ui/icons/Person";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Currency from "../Setup/currency/Currency";
import Categories from "../Setup/category/Categories";
import SalesItem from "../Setup/salesItem/SalesItem";
import Payment from "../Setup/payment/Payment";
import VoidReason from "../Setup/voidreason/VoidReason";
import Groups from "../Setup/group/Groups";
import Divisions from "../Setup/division/Divisions";
import Employees from "../Employees/EmployeeSetup/Employees";
import Customers from "../Customers/Customers";
import CustomerGroup from "../Customers/CustomerGroups/CustomerGroup";
import Roles from "../Employees/Roles/Roles";
import EmployeeSchedule from "../Employees/EmpSchedules/EmployeeSchedule";
import CustomerCategory from "../Customers/CustomerCategory/CustomerCategory";
import Dashboard from "../BackOffice/Dashboard";

const Hm = () => {
  const closed = { animation: "closeAnimation 300ms ease-in" };
  const open = {
    animation: "openAnimation 300ms ease-in ",
    animationFillMode: "forwards",
  };
  const slideClosed = { animation: "slideCloseAnimation 300ms ease-in" };
  const slideOpen = {
    animation: "slideOpenAnimation 300ms ease-in ",
    animationFillMode: "forwards",
  };
  const [index01, setIndex01] = useState(false);
  const [index02, setIndex02] = useState(false);
  const [index03, setIndex03] = useState(false);
  const [index04, setIndex04] = useState(false);
  const [index05, setIndex05] = useState(false);
  const [index11, setIndex11] = useState(false);
  const [index12, setIndex12] = useState(false);
  const [index13, setIndex13] = useState(false);
  const [index14, setIndex14] = useState(false);
  return (
    <HashRouter history={history}>
      <div className="cont">
        <div className="top-bar">
          <div className="icons">
            <div style={{ minWidth: 35, height: 25 }}>
              <HomeIcon />
            </div>
            <div style={{ minWidth: 35, height: 25 }}>
              <NotificationsIcon />
            </div>
            <div style={{ minWidth: 35, height: 25 }}>
              <SettingsIcon />
            </div>
            <div style={{ minWidth: 35, height: 25 }}>
              <PersonIcon />
            </div>

            <div className="user-holder">
              Charbel
              <div style={{ minWidth: 35, height: 25 }}>
                <ArrowDropDownIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="hm">
          <div className="side-bar">
            <div className="index">
              <div
                onClick={() => {
                  setIndex01((prev) => !prev);
                }}
                className="index0"
              >
                Back Office <ArrowRightIcon style={index01 ? open : closed} />
              </div>
              <Link to="/" className="index2" style={index01 ? slideOpen : slideClosed}>Dashboard</Link>
              <Link to="/Reports" className="index2" style={index01 ? slideOpen : slideClosed}>Reports</Link>
              <Link to="/EndOfDay" className="index2" style={index01 ? slideOpen : slideClosed}>End Of Day</Link>
              <div className="index">
                <div
                  onClick={() => {
                    setIndex11((prev) => !prev);
                  }}
                  className="index1"
                  style={index01 ? slideOpen : slideClosed}
                >
                  Setup <ArrowRightIcon style={index11 ? open : closed} />
                </div>
                <Link
                  to="/SalesItem"
                  className="index2"
                  style={index11 && index01 ? slideOpen : slideClosed}
                >
                  Sales Item
                </Link>
                <Link
                  to="/Groups"
                  className="index2"
                  style={index11 && index01 ? slideOpen : slideClosed}
                >
                  Groups
                </Link>
                <Link
                  to="/Divisions"
                  className="index2"
                  style={index11 && index01 ? slideOpen : slideClosed}
                >
                  Divisions
                </Link>
                <Link
                  to="/Categories"
                  className="index2"
                  style={index11 && index01 ? slideOpen : slideClosed}
                >
                  Categories
                </Link>
                <Link
                  to="/Payment"
                  className="index2"
                  style={index11 && index01 ? slideOpen : slideClosed}
                >
                  Payment Types
                </Link>
                <Link
                  to="/Void"
                  className="index2"
                  style={index11 && index01 ? slideOpen : slideClosed}
                >
                  Void Reasons
                </Link>
                <Link
                  to="/Currency"
                  className="index2"
                  style={index11 && index01 ? slideOpen : slideClosed}
                >
                  Currencies
                </Link>
              </div>

              <div
                onClick={() => {
                  setIndex12((prev) => !prev);
                }}
                className="index1"
                style={index01 ? slideOpen : slideClosed}
              >
                Employees <ArrowRightIcon style={index12 ? open : closed} />
              </div>
              <Link
                to="/Employees"
                className="index2"
                style={index12 && index01 ? slideOpen : slideClosed}
              >
                Employee Setup
              </Link>
              <Link
                to="/Roles"
                className="index2"
                style={index12 && index01 ? slideOpen : slideClosed}
              >
                Roles
              </Link>
              <Link to="/Schedule" className="index2" style={index12 && index01 ? slideOpen : slideClosed}>
                Schedules
              </Link>
              <div onClick={() => {
                setIndex13((prev) => !prev)
              }} className="index1" style={index01 ? slideOpen : slideClosed}>
                Customers<ArrowRightIcon style={index13 ? open : closed} />
              </div>
              <Link
                to="/Customers"
                className="index2"
                style={index13 && index01 ? slideOpen : slideClosed}
              >
                Customers
              </Link>
              <Link
                to="/CustomerGroups"
                className="index2"
                style={index13 && index01 ? slideOpen : slideClosed}
              >
                CustomerGroups
              </Link>
              <Link
                to="/CustomerCategory"
                className="index2"
                style={index13 && index01 ? slideOpen : slideClosed}
              >
                CustomerCategory
              </Link>
              <div className="index">
                <div
                  onClick={() => {
                    setIndex14((prev) => !prev);
                  }}
                  className="index1"
                  style={index01 ? slideOpen : slideClosed}
                >
                  Calendars <ArrowRightIcon style={index14 ? open : closed} />
                </div>
              </div>
            </div>
            <div className="index">
              <div
                onClick={() => {
                  setIndex02((prev) => !prev);
                }}
                className="index0"
              >
                Stock Managment{" "}
                <ArrowRightIcon style={index02 ? open : closed} />
              </div>
              <div className="index1" style={index02 ? slideOpen : slideClosed}>
                Supplies
              </div>
              <div className="index1" style={index02 ? slideOpen : slideClosed}>
                Clients
              </div>
              <div className="index1" style={index02 ? slideOpen : slideClosed}>
                Employees
              </div>
              <div className="index1" style={index02 ? slideOpen : slideClosed}>
                Users
              </div>
            </div>
            <div className="index">
              <div
                onClick={() => {
                  setIndex03((prev) => !prev);
                }}
                className="index0"
              >
                Accounting <ArrowRightIcon style={index03 ? open : closed} />
              </div>
              <div className="index1" style={index03 ? slideOpen : slideClosed}>
                Journal Voucher
              </div>
              <div className="index1" style={index03 ? slideOpen : slideClosed}>
                Receipt Voucher
              </div>
              <div className="index1" style={index03 ? slideOpen : slideClosed}>
                Payment Voucher
              </div>
            </div>
            <div className="index">
              <div
                onClick={() => {
                  setIndex04((prev) => !prev);
                }}
                className="index0"
              >
                Reservation <ArrowRightIcon style={index04 ? open : closed} />
              </div>
            </div>
            <div className="index">
              <div
                onClick={() => {
                  setIndex05((prev) => !prev);
                }}
                className="index0"
              >
                Digital Menu <ArrowRightIcon style={index05 ? open : closed} />
              </div>
              <div className="index1" style={index05 ? slideOpen : slideClosed}>
                Journal Voucher
              </div>
              <div className="index1" style={index05 ? slideOpen : slideClosed}>
                Receipt Voucher
              </div>
              <div className="index1" style={index05 ? slideOpen : slideClosed}>
                Payment Voucher
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <Switch>
              <Route  path="/SalesItem" component={SalesItem} />
              <Route path="/Categories" component={Categories} />
              <Route path="/Payment" component={Payment} />
              <Route path="/Void" component={VoidReason} />
              <Route path="/Currency" component={Currency} />
              <Route path="/Groups" component={Groups} />
              <Route path="/Divisions" component={Divisions} />
              <Route path="/Employees" component={Employees} />
              <Route path="/Customers" component={Customers} />
              <Route path="/CustomerGroups" component={CustomerGroup} />
              <Route path="/CustomerCategory" component={CustomerCategory} />
              <Route path="/Roles" component={Roles} />
              <Route path="/Schedule" component={EmployeeSchedule} />
              <Route exact path="/" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </div>
    </HashRouter>
  );
};

export default Hm;
