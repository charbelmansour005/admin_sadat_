import React, { useState } from "react";
import "../../styles/Hm.css";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from "@material-ui/icons/Settings";
import PersonIcon from "@material-ui/icons/Person";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

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
  return (
    <div>
      <div className="top-bar">
        <div className="rest">RestoWeb</div>
        <div className="back">Back Office</div>
        <div className="icons">
          <HomeIcon />
          <NotificationsIcon />
          <SettingsIcon />
          <PersonIcon />
          <div className="user-holder">
            Charbel
            <ArrowDropDownIcon />
          </div>
        </div>
      </div>
      <div className="side-bar">
        <div className="index">
          <div
            onClick={() => {
              setIndex01((prev) => !prev);
              console.log(index01);
            }}
            className="index0"
          >
            Back Office <ArrowRightIcon style={index01 ? open : closed} />
          </div>
          <div className="index1" style={index01 ? slideOpen : slideClosed}>
            Dashboard
          </div>
        </div>
        <div className="index">
          <div
            onClick={() => {
              setIndex02((prev) => !prev);
            }}
            className="index0"
          >
            Stock Managment <ArrowRightIcon style={index02 ? open : closed} />
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
        </div>
      </div>
    </div>
  );
};

export default Hm;
