import React, { useEffect, useState } from "react";
import "../../../styles/EmpSchedule.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { empSchedule, daySchedule } from '../../../data/modules'

const EmpScheduleEdit = ({
    mod,
    mountedStyle,
    toggleClose,
    downStyle,
    unmountedStyle,
    upStyle,
    currentEmployeeId
}) => {

    const { employeeSchedule } = useSelector((state) => state.postReducer);
    const [day1, setDay1] = useState('')
    const [day2, setDay2] = useState('')
    const [day3, setDay3] = useState('')
    const [day4, setDay4] = useState('')
    const [day5, setDay5] = useState('')
    const [day6, setDay6] = useState('')
    const [day7, setDay7] = useState('')
    const [fromDay1, setFromDay1] = useState('08:00:00')
    const [fromDay2, setFromDay2] = useState('08:00:00')
    const [fromDay3, setFromDay3] = useState('08:00:00')
    const [fromDay4, setFromDay4] = useState('08:00:00')
    const [fromDay5, setFromDay5] = useState('08:00:00')
    const [fromDay6, setFromDay6] = useState('08:00:00')
    const [fromDay7, setFromDay7] = useState('08:00:00')
    const [toDay1, setToDay1] = useState('22:00:00')
    const [toDay2, setToDay2] = useState('22:00:00')
    const [toDay3, setToDay3] = useState('22:00:00')
    const [toDay4, setToDay4] = useState('22:00:00')
    const [toDay5, setToDay5] = useState('22:00:00')
    const [toDay6, setToDay6] = useState('22:00:00')
    const [toDay7, setToDay7] = useState('22:00:00')
    const [mondOff, setMondOff] = useState('')
    const [tuesOff, setTuesOff] = useState('')
    const [wedOff, setWedOff] = useState('')
    const [thursOff, setThursOff] = useState('')
    const [fridOff, setFridOff] = useState('')
    const [saturdOff, setSaturdOff] = useState('')
    const [sundOff, setSundOff] = useState('')
    const [schedule, setSchedule] = useState([])



    useEffect(() => {

    }, []);

    const handleScheduleSubmit = (e) => {
        e.preventDefault();
        var weekDay1 = Object.create(daySchedule)
        weekDay1.day = day1
        weekDay1.from = fromDay1
        weekDay1.To = toDay1
        weekDay1.isOff = mondOff

        var weekDay2 = Object.create(daySchedule)
        weekDay2.day = day2
        weekDay2.from = fromDay2
        weekDay2.To = toDay2
        weekDay2.isOff = tuesOff

        var weekDay3 = Object.create(daySchedule)
        weekDay3.day = day3
        weekDay3.from = fromDay3
        weekDay3.To = toDay3
        weekDay3.isOff = wedOff

        var weekDay4 = Object.create(daySchedule)
        weekDay4.day = day4
        weekDay4.from = fromDay4
        weekDay4.To = toDay4
        weekDay4.isOff = thursOff

        var weekDay5 = Object.create(daySchedule)
        weekDay5.day = day5
        weekDay5.from = fromDay5
        weekDay5.To = toDay5
        weekDay5.isOff = fridOff

        var weekDay6 = Object.create(daySchedule)
        weekDay6.day = day6
        weekDay6.from = fromDay6
        weekDay6.To = toDay6
        weekDay6.isOff = saturdOff

        var weekDay7 = Object.create(daySchedule)
        weekDay7.day = day7
        weekDay7.from = fromDay7
        weekDay7.To = toDay7
        weekDay7.isOff = sundOff


        var weekSchedule = Object.create(empSchedule)
        weekSchedule.employeeId = currentEmployeeId

        schedule.push(weekDay1, weekDay2, weekDay3, weekDay4, weekDay5, weekDay6, weekDay7)
        weekSchedule.weeklySchedule = schedule

        employeeSchedule.push(weekSchedule)
        console.log(employeeSchedule)
        toggleClose()


    }

    let resetForm = () => {
       
        document.getElementById("add-schedule-emp").reset()
        toggleClose()
    }


    return (
        <div
            style={mod ? mountedStyle : unmountedStyle}
            className="modal-emp-wrapper">
            <div style={mod ? downStyle : upStyle} className="modal-emp">
                <div className="modal-emp-header">
                    Working Days and Time
                    <div onClick={() => resetForm()}>
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

                    <form id="add-schedule-emp" type="submit" onSubmit={(e) => handleScheduleSubmit(e)}>
                        <div className="schedule">
                            <div className="days">
                                <div>
                                    <input value="Monday" onChange={(e) => setDay1(e.target.value)} required type="checkbox"></input>
                                    <label style={{ marginLeft: 5 }} >Monday</label>
                                </div>
                                <div style={{ marginTop: 25 }}>
                                    <input required value="Tuesday" onChange={(e) => setDay2(e.target.value)} type="checkbox"></input>
                                    <label style={{ marginLeft: 5 }} >Tuesday</label>
                                </div>
                                <div style={{ marginTop: 25 }}>
                                    <input required value="Wednesday" onChange={(e) => setDay3(e.target.value)} type="checkbox"></input>
                                    <label style={{ marginLeft: 5 }} >Wednesday</label>
                                </div>
                                <div style={{ marginTop: 25 }}>
                                    <input required value="Thursday" onChange={(e) => setDay4(e.target.value)} type="checkbox"></input>
                                    <label style={{ marginLeft: 5 }}>Thursday</label>
                                </div>
                                <div style={{ marginTop: 25 }}>
                                    <input required value="Friday" onChange={(e) => setDay5(e.target.value)} type="checkbox"></input>
                                    <label style={{ marginLeft: 5 }} >Friday</label>
                                </div>
                                <div style={{ marginTop: 25 }}>
                                    <input required value="Saturday" onChange={(e) => setDay6(e.target.value)} type="checkbox"></input>
                                    <label style={{ marginLeft: 5 }} >Saturday</label>
                                </div>
                                <div style={{ marginTop: 25 }}>
                                    <input required value="Sunday" onChange={(e) => setDay7(e.target.value)} type="checkbox"></input>
                                    <label style={{ marginLeft: 5 }} >Sunday</label>
                                </div>

                            </div>
                            <div className="sub-time">
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <div style={{ width: '30%' }}>
                                        <input required onChange={(e) => setFromDay1(e.target.value)} className="labelTime" defaultValue="08:00:00" type="time"></input>
                                    </div>
                                    <div style={{ width: '30%' }}>
                                        <input onChange={(e) => setToDay1(e.target.value)} className="labelTime" defaultValue="22:00:00" type="time"></input>
                                    </div>
                                    <div className="dayOff">
                                        <input value="off" onChange={(e) => setMondOff(e.target.value)} className="labelTime" type="checkbox"></input>
                                        <label style={{ marginLeft: 10 }}>Off</label>
                                    </div>

                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <div style={{ width: '30%' }}>
                                        <input onChange={(e) => setFromDay2(e.target.value)} className="labelTime" defaultValue="08:00:00" type="time"></input>
                                    </div>
                                    <div style={{ width: '30%' }}>
                                        <input onChange={(e) => setToDay2(e.target.value)} className="labelTime" defaultValue="22:00:00" type="time"></input>
                                    </div>
                                    <div className="dayOff">
                                        <input value="off" onChange={(e) => setTuesOff(e.target.value)} className="labelTime" type="checkbox"></input>
                                        <label style={{ marginLeft: 10 }}>Off</label>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <div style={{ width: '30%' }}>
                                        <input onChange={(e) => setFromDay3(e.target.value)} className="labelTime" defaultValue="08:00:00" type="time"></input>
                                    </div>
                                    <div style={{ width: '30%' }}>
                                        <input onChange={(e) => setToDay3(e.target.value)} className="labelTime" defaultValue="22:00:00" type="time"></input>
                                    </div>
                                    <div className="dayOff">
                                        <input value="off" onChange={(e) => setWedOff(e.target.value)} className="labelTime" type="checkbox"></input>
                                        <label style={{ marginLeft: 10 }}>Off</label>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <div style={{ width: '30%' }}>
                                        <input onChange={(e) => setFromDay4(e.target.value)} className="labelTime" defaultValue="08:00:00" type="time"></input>
                                    </div>
                                    <div style={{ width: '30%' }}   >
                                        <input onChange={(e) => setToDay4(e.target.value)} className="labelTime" defaultValue="22:00:00" type="time"></input>
                                    </div>
                                    <div className="dayOff">
                                        <input value="off" onChange={(e) => setThursOff(e.target.value)} className="labelTime" type="checkbox"></input>
                                        <label style={{ marginLeft: 10 }}>Off</label>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <div style={{ width: '30%' }}>
                                        <input onChange={(e) => setFromDay5(e.target.value)} className="labelTime" defaultValue="08:00:00" type="time"></input>
                                    </div>
                                    <div style={{ width: '30%' }}>
                                        <input onChange={(e) => setToDay5(e.target.value)} className="labelTime" defaultValue="22:00:00" type="time"></input>
                                    </div>
                                    <div className="dayOff">
                                        <input value="off" onChange={(e) => setFridOff(e.target.value)} className="labelTime" type="checkbox"></input>
                                        <label style={{ marginLeft: 10 }}>Off</label>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <div style={{ width: '30%' }}>
                                        <input onChange={(e) => setFromDay6(e.target.value)} className="labelTime" defaultValue="08:00:00" type="time"></input>
                                    </div>
                                    <div style={{ width: '30%' }}>
                                        <input onChange={(e) => setToDay6(e.target.value)} className="labelTime" defaultValue="22:00:00" type="time"></input>
                                    </div>
                                    <div className="dayOff">
                                        <input value="off" onChange={(e) => setSaturdOff(e.target.value)} className="labelTime" type="checkbox"></input>
                                        <label style={{ marginLeft: 10 }}>Off</label>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <div style={{ width: '30%' }}>
                                        <input onChange={(e) => setFromDay7(e.target.value)} className="labelTime" defaultValue="08:00:00" type="time"></input>
                                    </div>
                                    <div style={{ width: '30%' }}   >
                                        <input onChange={(e) => setToDay7(e.target.value)} className="labelTime" defaultValue="22:00:00" type="time"></input>
                                    </div>
                                    <div className="dayOff">
                                        <input value="off" onChange={(e) => setSundOff(e.target.value)} className="labelTime" type="checkbox"></input>
                                        <label style={{ marginLeft: 10 }}>Off</label>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div style={{ display: 'flex', justifyContent: "flex-start", alignItems: 'center', height: '50%', marginLeft: 10 }}>
                            <input type="submit" value="Save" className="modal-emp-save" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default EmpScheduleEdit;