import React, { useEffect, useState } from "react";
import "../../../styles/EmpSchedule.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { empSchedule, daySchedule } from '../../../data/modules'

const EditScheduleModal = ({
    mod,
    mountedStyle,
    toggleClose,
    downStyle,
    unmountedStyle,
    upStyle,
    currentEmpSchedule
}) => {

    const { employeeSchedule } = useSelector((state) => state.postReducer);
    const [day1, setDay1] = useState('')
    const [day2, setDay2] = useState('')
    const [day3, setDay3] = useState('')
    const [day4, setDay4] = useState('')
    const [day5, setDay5] = useState('')
    const [day6, setDay6] = useState('')
    const [day7, setDay7] = useState('')
    const [fromDay1, setFromDay1] = useState('')
    const [fromDay2, setFromDay2] = useState('')
    const [fromDay3, setFromDay3] = useState('')
    const [fromDay4, setFromDay4] = useState('')
    const [fromDay5, setFromDay5] = useState('')
    const [fromDay6, setFromDay6] = useState('')
    const [fromDay7, setFromDay7] = useState('')
    const [toDay1, setToDay1] = useState('')
    const [toDay2, setToDay2] = useState('')
    const [toDay3, setToDay3] = useState('')
    const [toDay4, setToDay4] = useState('')
    const [toDay5, setToDay5] = useState('')
    const [toDay6, setToDay6] = useState('')
    const [toDay7, setToDay7] = useState('')
    const [mondOff, setMondOff] = useState('')
    const [tuesOff, setTuesOff] = useState('')
    const [wedOff, setWedOff] = useState('')
    const [thursOff, setThursOff] = useState('')
    const [fridOff, setFridOff] = useState('')
    const [saturdOff, setSaturdOff] = useState('')
    const [sundOff, setSundOff] = useState('')


    useEffect(() => {
        console.log(currentEmpSchedule)
    }, []);

    const handleSubmitEdit = (e) => {
        e.preventDefault()
        if (employeeSchedule.length > 0) {
            employeeSchedule.map((item) => {
                if (item.employeeId === currentEmpSchedule.employeeId) {
                    if (day1 === '') {
                        item.weeklySchedule[0].day = currentEmpSchedule.weeklySchedule[0].day
                    }
                    else {
                        item.weeklySchedule[0].day = currentEmpSchedule.weeklySchedule[0].day
                    }
                    if (fromDay1 === '') {
                        item.weeklySchedule[0].from = currentEmpSchedule.weeklySchedule[0].from
                    }
                    else {
                        item.weeklySchedule[0].from = fromDay1
                    }
                    if (toDay1 === '') {
                        item.weeklySchedule[0].To = currentEmpSchedule.weeklySchedule[0].To
                    }
                    else {
                        item.weeklySchedule[0].To = toDay1
                    }
                    if (day2 === '') {
                        item.weeklySchedule[1].day = currentEmpSchedule.weeklySchedule[1].day
                    }
                    else {
                        item.weeklySchedule[1].day = currentEmpSchedule.weeklySchedule[1].day
                    }
                    if (fromDay2 === '') {
                        item.weeklySchedule[1].from = currentEmpSchedule.weeklySchedule[1].from
                    }
                    else {
                        item.weeklySchedule[1].from = fromDay2
                    }
                    if (toDay2 === '') {
                        item.weeklySchedule[1].To = currentEmpSchedule.weeklySchedule[1].To
                    }
                    else {
                        item.weeklySchedule[1].To = toDay2
                    }
                    if (day3 === '') {
                        item.weeklySchedule[2].day = currentEmpSchedule.weeklySchedule[2].day
                    }
                    else {
                        item.weeklySchedule[2].day = currentEmpSchedule.weeklySchedule[2].day
                    }
                    if (fromDay3 === '') {
                        item.weeklySchedule[2].from = currentEmpSchedule.weeklySchedule[2].from
                    }
                    else {
                        item.weeklySchedule[2].from = fromDay3
                    }
                    if (toDay3 === '') {
                        item.weeklySchedule[2].To = currentEmpSchedule.weeklySchedule[2].To
                    }
                    else {
                        item.weeklySchedule[2].To = toDay3
                    }
                    if (day4 === '') {
                        item.weeklySchedule[3].day = currentEmpSchedule.weeklySchedule[3].day
                    }
                    else {
                        item.weeklySchedule[3].day = currentEmpSchedule.weeklySchedule[3].day
                    }
                    if (fromDay4 === '') {
                        item.weeklySchedule[3].from = currentEmpSchedule.weeklySchedule[3].from
                    }
                    else {
                        item.weeklySchedule[3].from = fromDay4
                    }
                    if (toDay4 === '') {
                        item.weeklySchedule[3].To = currentEmpSchedule.weeklySchedule[3].To
                    }
                    else {
                        item.weeklySchedule[3].To = toDay4
                    }
                    if (day5 === '') {
                        item.weeklySchedule[4].day = currentEmpSchedule.weeklySchedule[4].day
                    }
                    else {
                        item.weeklySchedule[4].day = currentEmpSchedule.weeklySchedule[4].day
                    }
                    if (fromDay5 === '') {
                        item.weeklySchedule[4].from = currentEmpSchedule.weeklySchedule[4].from
                    }
                    else {
                        item.weeklySchedule[4].from = fromDay5
                    }
                    if (toDay5 === '') {
                        item.weeklySchedule[4].To = currentEmpSchedule.weeklySchedule[4].To
                    }
                    else {
                        item.weeklySchedule[4].To = toDay5
                    }
                    if (day6 === '') {
                        item.weeklySchedule[5].day = currentEmpSchedule.weeklySchedule[5].day
                    }
                    else {
                        item.weeklySchedule[5].day = currentEmpSchedule.weeklySchedule[5].day
                    }
                    if (fromDay6 === '') {
                        item.weeklySchedule[5].from = currentEmpSchedule.weeklySchedule[5].from
                    }
                    else {
                        item.weeklySchedule[5].from = fromDay6
                    }
                    if (toDay6 === '') {
                        item.weeklySchedule[5].To = currentEmpSchedule.weeklySchedule[5].To
                    }
                    else {
                        item.weeklySchedule[5].To = toDay6
                    }
                    if (day7 === '') {
                        item.weeklySchedule[6].day = currentEmpSchedule.weeklySchedule[6].day
                    }
                    else {
                        item.weeklySchedule[6].day = currentEmpSchedule.weeklySchedule[6].day
                    }
                    if (fromDay7 === '') {
                        item.weeklySchedule[6].from = currentEmpSchedule.weeklySchedule[6].from
                    }
                    else {
                        item.weeklySchedule[6].from = fromDay7
                    }
                    if (toDay7 === '') {
                        item.weeklySchedule[6].To = currentEmpSchedule.weeklySchedule[6].To
                    }
                    else {
                        item.weeklySchedule[6].To = toDay7
                    }
                }
            })
            toggleClose()
            console.log(employeeSchedule)
        }
    }




    return (
        <div
            style={mod ? mountedStyle : unmountedStyle}
            className="modal-emp-wrapper">
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

                    <form type="submit" onSubmit={(e) => handleSubmitEdit(e)}>
                        <div className="schedule">
                            <div className="days">
                                <div>
                                  
                                   

                                    <label style={{ marginLeft: 5 }} >Monday</label>
                                </div>
                                <div style={{ marginTop: 25 }}>
                                   

                                    <label style={{ marginLeft: 5 }} >Tuesday</label>
                                </div>
                                <div style={{ marginTop: 25 }}>
                                    

                                    <label style={{ marginLeft: 5 }} >Wednesday</label>
                                </div>
                                <div style={{ marginTop: 25 }}>
                                   

                                    <label style={{ marginLeft: 5 }}>Thursday</label>
                                </div>
                                <div style={{ marginTop: 25 }}>
                                    

                                    <label style={{ marginLeft: 5 }} >Friday</label>
                                </div>
                                <div style={{ marginTop: 25 }}>
                                    

                                    <label style={{ marginLeft: 5 }} >Saturday</label>
                                </div>
                                <div style={{ marginTop: 25 }}>
                                    

                                    <label style={{ marginLeft: 5 }} >Sunday</label>
                                </div>

                            </div>
                            <div className="sub-time">
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <div style={{ width: '30%' }}>
                                        <input required onChange={(e) => setFromDay1(e.target.value)} className="labelTime" defaultValue={currentEmpSchedule.weeklySchedule[0].from} type="time"></input>
                                    </div>
                                    <div style={{ width: '30%' }}>
                                        <input onChange={(e) => setToDay1(e.target.value)} className="labelTime" defaultValue={currentEmpSchedule.weeklySchedule[0].To} type="time"></input>
                                    </div>
                                    <div className="dayOff">
                                        {
                                            currentEmpSchedule.weeklySchedule[0].isOff === '' ? <input value="off" onChange={() => currentEmpSchedule.weeklySchedule[0].isOff = 'isOff'} className="labelTime" type="checkbox"></input> :
                                                <input defaultChecked value="off" onChange={() => currentEmpSchedule.weeklySchedule[0].isOff = ''} className="labelTime" type="checkbox"></input>
                                        }

                                        <label style={{ marginLeft: 10 }}>Off</label>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <div style={{ width: '30%' }}>
                                        <input onChange={(e) => setFromDay2(e.target.value)} className="labelTime" defaultValue={currentEmpSchedule.weeklySchedule[1].from} type="time"></input>
                                    </div>
                                    <div style={{ width: '30%' }}>
                                        <input onChange={(e) => setToDay2(e.target.value)} className="labelTime" defaultValue={currentEmpSchedule.weeklySchedule[1].To} type="time"></input>
                                    </div>
                                    <div className="dayOff">
                                        {
                                            currentEmpSchedule.weeklySchedule[1].isOff === '' ? <input value="off" onChange={() => currentEmpSchedule.weeklySchedule[1].isOff = 'isOff'} className="labelTime" type="checkbox"></input> :
                                                <input defaultChecked value="off" onChange={() => currentEmpSchedule.weeklySchedule[1].isOff = ''} className="labelTime" type="checkbox"></input>
                                        }
                                        <label style={{ marginLeft: 10 }}>Off</label>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <div style={{ width: '30%' }}>
                                        <input onChange={(e) => setFromDay3(e.target.value)} className="labelTime" defaultValue={currentEmpSchedule.weeklySchedule[2].from} type="time"></input>
                                    </div>
                                    <div style={{ width: '30%' }}>
                                        <input onChange={(e) => setToDay3(e.target.value)} className="labelTime" defaultValue={currentEmpSchedule.weeklySchedule[2].To} type="time"></input>
                                    </div>
                                    <div className="dayOff">
                                        {
                                            currentEmpSchedule.weeklySchedule[2].isOff === '' ? <input value="off" onChange={() => currentEmpSchedule.weeklySchedule[2].isOff = 'isOff'} className="labelTime" type="checkbox"></input> :
                                                <input defaultChecked value="off" onChange={() => currentEmpSchedule.weeklySchedule[2].isOff = ''} className="labelTime" type="checkbox"></input>
                                        }
                                        <label style={{ marginLeft: 10 }}>Off</label>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <div style={{ width: '30%' }}>
                                        <input onChange={(e) => setFromDay4(e.target.value)} className="labelTime" defaultValue={currentEmpSchedule.weeklySchedule[3].from} type="time"></input>
                                    </div>
                                    <div style={{ width: '30%' }}   >
                                        <input onChange={(e) => setToDay4(e.target.value)} className="labelTime" defaultValue={currentEmpSchedule.weeklySchedule[3].To} type="time"></input>
                                    </div>
                                    <div className="dayOff">
                                        {
                                            currentEmpSchedule.weeklySchedule[3].isOff === '' ? <input value="off" onChange={() => currentEmpSchedule.weeklySchedule[3].isOff = 'isOff'} className="labelTime" type="checkbox"></input> :
                                                <input defaultChecked value="off" onChange={() => currentEmpSchedule.weeklySchedule[3].isOff = ''} className="labelTime" type="checkbox"></input>
                                        }
                                        <label style={{ marginLeft: 10 }}>Off</label>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <div style={{ width: '30%' }}>
                                        <input onChange={(e) => setFromDay5(e.target.value)} className="labelTime" defaultValue={currentEmpSchedule.weeklySchedule[4].from} type="time"></input>
                                    </div>
                                    <div style={{ width: '30%' }}>
                                        <input onChange={(e) => setToDay5(e.target.value)} className="labelTime" defaultValue={currentEmpSchedule.weeklySchedule[4].To} type="time"></input>
                                    </div>
                                    <div className="dayOff">
                                        {
                                            currentEmpSchedule.weeklySchedule[4].isOff === '' ? <input value="off" onChange={() => currentEmpSchedule.weeklySchedule[4].isOff = 'isOff'} className="labelTime" type="checkbox"></input> :
                                                <input defaultChecked value="off" onChange={() => currentEmpSchedule.weeklySchedule[4].isOff = ''} className="labelTime" type="checkbox"></input>
                                        }
                                        <label style={{ marginLeft: 10 }}>Off</label>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <div style={{ width: '30%' }}>
                                        <input onChange={(e) => setFromDay6(e.target.value)} className="labelTime" defaultValue={currentEmpSchedule.weeklySchedule[5].from} type="time"></input>
                                    </div>
                                    <div style={{ width: '30%' }}>
                                        <input onChange={(e) => setToDay6(e.target.value)} className="labelTime" defaultValue={currentEmpSchedule.weeklySchedule[5].To} type="time"></input>
                                    </div>
                                    <div className="dayOff">
                                        {
                                            currentEmpSchedule.weeklySchedule[5].isOff === '' ? <input value="off" onChange={() => currentEmpSchedule.weeklySchedule[5].isOff = 'isOff'} className="labelTime" type="checkbox"></input> :
                                                <input defaultChecked value="off" onChange={() => currentEmpSchedule.weeklySchedule[5].isOff = ''} className="labelTime" type="checkbox"></input>
                                        }
                                        <label style={{ marginLeft: 10 }}>Off</label>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <div style={{ width: '30%' }}>
                                        <input onChange={(e) => setFromDay7(e.target.value)} className="labelTime" defaultValue={currentEmpSchedule.weeklySchedule[6].from} type="time"></input>
                                    </div>
                                    <div style={{ width: '30%' }}>
                                        <input onChange={(e) => setToDay7(e.target.value)} className="labelTime" defaultValue={currentEmpSchedule.weeklySchedule[6].To} type="time"></input>
                                    </div>
                                    <div className="dayOff">
                                        {
                                            currentEmpSchedule.weeklySchedule[6].isOff === '' ? <input value="off" onChange={() => currentEmpSchedule.weeklySchedule[6].isOff = 'isOff'} className="labelTime" type="checkbox"></input> :
                                                <input defaultChecked value="off" onChange={() => currentEmpSchedule.weeklySchedule[6].isOff = ''} className="labelTime" type="checkbox"></input>
                                        }
                                        <label style={{ marginLeft: 10 }}>Off</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: "flex-start", alignItems: 'center', height: '50%', marginLeft: 10 }}>
                            <input type="submit" value="Edit" className="modal-emp-save" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default EditScheduleModal;