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
                            <div>
                                <input type="checkbox"></input>
                                <label  style={{ marginLeft: 5 }} >Monday</label>
                            </div>
                            <div style={{ marginTop: 25 }}>
                                <input type="checkbox"></input>
                                <label style={{ marginLeft: 5 }} >Tuesday</label>
                            </div>
                            <div style={{ marginTop: 25 }} >
                                <input type="checkbox"></input>
                                <label style={{ marginLeft: 5 }} >Wednesday</label>
                            </div>
                            <div style={{ marginTop: 25 }}>
                                <input type="checkbox"></input>
                                <label style={{ marginLeft: 5 }}>Thursday</label>
                            </div>
                            <div style={{ marginTop: 25 }}>
                                <input type="checkbox"></input>
                                <label style={{ marginLeft: 5 }} >Friday</label>
                            </div>
                            <div style={{ marginTop: 25 }}>
                                <input type="checkbox"></input>
                                <label style={{ marginLeft: 5 }} >Saturday</label>
                            </div>
                            <div style={{ marginTop: 25 }}>
                                <input type="checkbox"></input>
                                <label style={{ marginLeft: 5 }} >Sunday</label>
                            </div>

                        </div>
                        <div className="sub-time">
                            <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'center' }}>
                                <div style={{width:'35%'}}>
                                    <input onChange={(e)=>console.log(e.target.value)} className="labelTime" defaultValue={"08:00:00"} type="time"></input>
                                </div>
                                <div style={{width:'35%'}}   >
                                    <input className="labelTime" defaultValue={"22:00:00"} type="time"></input>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'center' }}>
                                <div style={{width:'35%'}}>
                                    <input className="labelTime" defaultValue={"08:00:00"} type="time"></input>
                                </div>
                                <div style={{width:'35%'}}   >
                                    <input className="labelTime" defaultValue={"22:00:00"} type="time"></input>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'center' }}>
                                <div style={{width:'35%'}}>
                                    <input className="labelTime" defaultValue={"08:00:00"} type="time"></input>
                                </div>
                                <div style={{width:'35%'}}   >
                                    <input className="labelTime" defaultValue={"22:00:00"} type="time"></input>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'center' }}>
                                <div style={{width:'35%'}}>
                                    <input className="labelTime" defaultValue={"08:00:00"} type="time"></input>
                                </div>
                                <div style={{width:'35%'}}   >
                                    <input className="labelTime" defaultValue={"22:00:00"} type="time"></input>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'center' }}>
                                <div style={{width:'35%'}}>
                                    <input className="labelTime" defaultValue={"08:00:00"} type="time"></input>
                                </div>
                                <div style={{width:'35%'}}   >
                                    <input className="labelTime" defaultValue={"22:00:00"} type="time"></input>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'center' }}>
                                <div style={{width:'35%'}}>
                                    <input className="labelTime" defaultValue={"08:00:00"} type="time"></input>
                                </div>
                                <div style={{width:'35%'}}   >
                                    <input className="labelTime" defaultValue={"22:00:00"} type="time"></input>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'center' }}>
                                <div style={{width:'35%'}}>
                                    <input className="labelTime" defaultValue={"08:00:00"} type="time"></input>
                                </div>
                                <div style={{width:'35%'}}   >
                                    <input className="labelTime" defaultValue={"22:00:00"} type="time"></input>
                                </div>
                            </div>



                        </div>




                    </div>
                </div>
            </div>
        </div>
    )
}
export default EmpScheduleEdit;