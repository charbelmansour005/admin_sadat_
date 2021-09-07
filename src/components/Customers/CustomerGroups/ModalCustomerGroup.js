import React, { useState, useEffect } from "react";
import "../../../styles/Currency.css";
import CloseIcon from "@material-ui/icons/Close";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

const ModalCustomerGroup = ({
    mod,
    mountedStyle,
    toggleClose,
    downStyle,
    handleSubmit,
    unmountedStyle,
    upStyle,
}) => {
    const { customerGroup } = useSelector(
        (state) => state.postReducer
    );
    const [groupName, setGroupName] = useState('')
    const [category, setCategory] = useState('')
    const [isMaxTicketAllow, setMaxTicketAllowed] = useState('')
    const [member, setMember] = useState('')
    useEffect(() => {

    }, []);


    let resetForm = () => {
        toggleClose()
        document.getElementById("add-customer-group-form").reset()

    }
    const openInNewTab = (url) => {
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
    };

    return (
        <div
            style={mod ? mountedStyle : unmountedStyle}
            className="modal-cur-wrapper"
        >
            <div style={mod ? downStyle : upStyle} style={{ width: '40%', justifyContent: 'space-between', display: 'flex', backgroundColor: 'white', flexDirection: 'column' }}>
                <form id="add-customer-group-form" className="modal-cur-form" type="submit" onSubmit={(e) =>
                    handleSubmit(
                        e,
                        uuidv4(),
                        groupName,
                        category,
                        isMaxTicketAllow,
                        member
                    )
                } >
                    <div className="modal-cur-header">
                        Add New Customer Groups
                        <div onClick={() => resetForm()}>
                            <CloseIcon className="modal-cur-close" />
                        </div>
                    </div>
                    <div className="modal-cur-body">
                        <div className="modal-cur-subtitle">General</div>
                        <div className="modal-cur-price">
                            <div className="modal-cur-desc">
                                Group Name*
                                <input
                                    onChange={(e) => setGroupName(e.target.value)}
                                    required
                                    placeholder="Group description"
                                    className="modal-cur-desc-input"
                                />
                            </div>
                            <div className="modal-cur-desc">
                                Category*
                                <select
                                    onChange={(e) => setCategory(e.target.value)}
                                    required
                                    className="modal-cur-function-input"
                                    defaultValue={""}
                                >
                                    <option value="" disabled>
                                        Select Category
                                    </option>
                                    <option className="modal-cur-function-option" value="1">
                                        1
                                    </option>
                                    <option className="modal-cur-function-option" value="2">
                                        2
                                    </option>
                                    <option className="modal-cur-function-option" value="3">
                                        3
                                    </option>
                                </select>
                            </div>
                            <AddBoxIcon
                                onClick={() => {
                                    openInNewTab("http://localhost:3000/Home#/Categories");
                                }}
                                className="add-box" />
                        </div>
                        <div className="modal-cur-subtitle">Prepaid ticket</div>
                        <div style={{ margin: 7, marginLeft: 10 }}>
                            <input value="isMaxTicket" onChange={(e) => setMaxTicketAllowed(e.target.value)} type="checkbox"></input>
                            <label style={{ marginLeft: 10 }}>Set The maximum Ticket Allowed</label>
                        </div>
                        <div className="modal-cur-subtitle">MemberShip</div>
                        <div style={{ margin: 7, marginLeft: 10 }}>
                            <input onChange={(e) => setMember(e.target.value)} value="isMember" type="checkbox"></input>
                            <label style={{ marginLeft: 10 }}>Member</label>
                        </div>
                    </div>
                    <div className="modal-cur-footer">
                        <input type="submit" value="Save" className="modal-cur-save" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalCustomerGroup;
