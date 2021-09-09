import React, { useState, useEffect } from "react";
import "../../../styles/Currency.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import AddBoxIcon from "@material-ui/icons/AddBox";
const EditCustomerGroup = ({
    mod,
    mountedStyle,
    toggleClose,
    downStyle,
    unmountedStyle,
    currentitem,
    upStyle,
}) => {
    const [groupName, setGroupName] = useState('')
    const [category, setCategory] = useState('')
    const [isMaxTicketAllow, setMaxTicketAllowed] = useState('')
    const [member, setMember] = useState('')
    const { customerGroup } = useSelector(
        (state) => state.postReducer
    );
    let updateCurrency = (customerGroupId) => {
        if (customerGroup.length > 0) {
            customerGroup.map((item) => {
                if (item.customerGroupId === customerGroupId) {
                    if (groupName === '') {
                        item.name = currentitem.name
                    }
                    else {
                        item.name = groupName
                    }
                    if (category === '') {
                        item.category = currentitem.category
                    }
                    else {
                        item.category = category
                    }

                }
            })
        }


        toggleClose()

    }
    const openInNewTab = (url) => {
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
    };
    let resetForm = () => {
        toggleClose()
        document.getElementById("edit-customer-group-form").reset()

    }
    return (
        <div
            style={mod ? mountedStyle : unmountedStyle}
            className="modal-cur-wrapper"
        >
            <div style={mod ? downStyle : upStyle} style={{  justifyContent: 'space-between', display: 'flex', backgroundColor: 'white', flexDirection: 'column' }}>
                <form id="edit-customer-group-form" className="modal-cur-form" type="submit" onSubmit={() => updateCurrency(currentitem.customerGroupId)}
                >
                    <div className="modal-cur-header">
                        Edit Customer Group
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
                                    defaultValue={currentitem.name}
                                    onChange={(e) => setGroupName(e.target.value)}
                                    required
                                    placeholder="Group description"
                                    className="modal-cur-desc-input"
                                />
                            </div>
                            <div className="modal-cur-desc">
                                Category*
                                <select
                                    defaultValue={currentitem.category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    required
                                    className="modal-cur-function-input"

                                >
                                    <option value={currentitem.category} disabled selected defaultValue>
                                        {currentitem.category}
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
                            {
                                currentitem.maxTicketAllowed === '' ?
                                    <input value="isMaxTicket" onChange={(e) => currentitem.maxTicketAllowed = e.target.value} type="checkbox"></input> :
                                    <input defaultChecked value="isMaxTicket" onChange={() => currentitem.maxTicketAllowed = ''} type="checkbox"></input>
                            }

                            <label style={{ marginLeft: 10 }}>Set The maximum Ticket Allowed</label>
                        </div>
                        <div className="modal-cur-subtitle">MemberShip</div>
                        <div style={{ margin: 7, marginLeft: 10 }}>
                            {
                                currentitem.isMember === '' ?
                                    <input onChange={(e) => currentitem.isMember = e.target.value} value="isMember" type="checkbox"></input> :
                                    <input defaultChecked onChange={(e) => currentitem.isMember = ''} value="isMember" type="checkbox"></input>
                            }

                            <label style={{ marginLeft: 10 }}>Member</label>
                        </div>
                    </div>
                    <div className="modal-cur-footer">
                        <input type="submit" value="Edit" className="modal-cur-save" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditCustomerGroup;
