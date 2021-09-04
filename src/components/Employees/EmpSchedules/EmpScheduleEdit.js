import React, { useEffect, useState } from "react";
import "../../../styles/EmpSchedule.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";

const EmpScheduleEdit = ({
    mod,
    mountedStyle,
    toggleClose,
    downStyle,
    unmountedStyle,
    upStyle,
    currentitem }) => {
    return (
        <div
            style={mod ? mountedStyle : unmountedStyle}
            className="modal-emp-wrapper"
        >
            <div style={mod ? downStyle : upStyle} className="modal-emp">
                <div className="modal-emp-header">
                    Working Days and Time
                    <div onClick={() => toggleClose()}>
                        <CloseIcon className="modal-emp-close" />
                    </div>
                </div>

                <div className="modal-emp-body">

                    <div className="fromTo">
                        <div className="from">
                            <label >
                                From
                            </label>
                        </div>
                        <div className="To">
                            <label  >
                                To
                            </label>
                        </div>

                    </div>

                    <div className="schedule">
                        <div className="days">
                            <div classname="sub-day">
                                <input type="checkbox"></input>
                                <label style={{ marginLeft: 10 }}>Monday</label>
                            </div>

                            <div className="sub-time1">
                                <input defaultValue={"08:00:00"} type="time"></input>
                            </div>
                            <div>
                                <input defaultValue={"22:00:00"} type="time"></input>
                            </div>

                        </div>
                        <div className="days">
                            <div>
                                <input type="checkbox"></input>
                                <label style={{ marginLeft: 10 }}>Tuesday</label>
                            </div>
                            <div>
                                <input defaultValue={"08:00:00"} type="time"></input>
                            </div>
                            <div>
                                <input defaultValue={"22:00:00"} type="time"></input>
                            </div>
                        </div>
                        <div className="days">
                            <div>
                                <input type="checkbox"></input>
                                <label style={{ marginLeft: 10 }}>Wednesday</label>
                            </div>

                            <div>
                                <input defaultValue={"08:00:00"} type="time"></input>
                            </div>
                            <div>
                                <input defaultValue={"22:00:00"} type="time"></input>
                            </div>
                        </div>
                        <div className="days">
                            <div>
                                <input type="checkbox"></input>
                                <label style={{ marginLeft: 10 }}>Thursday</label>
                            </div>
                            <div>
                                <input defaultValue={"08:00:00"} type="time"></input>
                            </div>
                            <div>
                                <input defaultValue={"22:00:00"} type="time"></input>
                            </div>
                        </div>
                        <div className="days">
                            <div>
                                <input type="checkbox"></input>
                                <label style={{ marginLeft: 10 }}>Friday</label>
                            </div>

                            <div>
                                <input defaultValue={"08:00:00"} type="time"></input>
                            </div>
                            <div>
                                <input defaultValue={"22:00:00"} type="time"></input>
                            </div>
                        </div>
                        <div className="days">
                            <div>
                                <input type="checkbox"></input>
                                <label style={{ marginLeft: 10 }}>Saturday</label>
                            </div>

                            <div>
                                <input defaultValue={"08:00:00"} type="time"></input>
                            </div>
                            <div>
                                <input defaultValue={"22:00:00"} type="time"></input>
                            </div>
                        </div>
                        <div className="days">
                            <div>
                                <input type="checkbox"></input>
                                <label style={{ marginLeft: 10 }}>Sunday</label>
                            </div>

                            <div>
                                <input defaultValue={"08:00:00"} type="time"></input>
                            </div>
                            <div>
                                <input defaultValue={"22:00:00"} type="time"></input>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}
export default EmpScheduleEdit;