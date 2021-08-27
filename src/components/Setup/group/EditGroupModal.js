import React, { useState, useEffect } from "react";
import "../../../styles/Groups.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
const EditGroupModal = ({
    mod,
    mountedStyle,
    toggleClose,
    downStyle,
    currentitem,
    unmountedStyle,
    upStyle,
}) => {

    const [groupName, setGroupName] = useState('')
    const [othername, setOtherName] = useState('')
    const [division, setDivision] = useState('')
    const [tax1, setTax1] = useState('')
    const [tax2, setTax2] = useState('')
    const [tax3, setTax3] = useState('')
    const [tax4, setTax4] = useState('')
    const [tax5, setTax5] = useState('')
    const [service, setService] = useState('')
    const [discount, setDiscount] = useState('')
    const [revenue, setRevenue] = useState('')
    const [expense, setExpense] = useState('')
    const [pdaDesc, setPdaDesc] = useState('')
    const [pdaSorting, setPdaSorting] = useState('')
    const [modDate, setModDate] = useState('')
    const [groupRemark, setGroupRemark] = useState('')
    const [pdaHide, setPdaHide] = useState('')

    const { groupItems } = useSelector(
        (state) => state.postReducer
    );
    let updateGroups = (groupId) => {
        if (groupItems.length > 0) {
            groupItems.map((item) => {
                if (item.groupId === groupId) {
                    if (groupName === '') {
                        item.name = currentitem.name
                    }
                    else {
                        item.name = groupName
                    }

                    if (othername === '') {
                        item.othername = currentitem.othername
                    }
                    else {
                        item.othername = othername
                    }
                    if (division === '') {
                        item.division = currentitem.division
                    }
                    else {
                        item.division = division
                    }
                    if (service === '') {
                        item.service = currentitem.service
                    }
                    else {
                        item.service = service
                    }
                    if (discount === '') {
                        item.discount = currentitem.discount
                    }
                    else {
                        item.discount = discount
                    }
                    if (revenue === '') {
                        item.revenue = currentitem.revenue
                    }
                    else {
                        item.revenue = revenue
                    }
                    if (expense === '') {
                        item.expense = currentitem.expense
                    }
                    else {
                        item.expense = expense
                    }
                    if (pdaDesc === '') {
                        item.pdaDesc = currentitem.pdaDesc
                    }
                    else {
                        item.pdaDesc = pdaDesc
                    }
                    if (pdaSorting === '') {
                        item.pdasorting = currentitem.pdasorting
                    }
                    else {
                        item.pdasorting = pdaSorting
                    }
                    if (modDate === '') {
                        item.modDate = currentitem.modDate
                    }
                    else {
                        item.modDate = modDate
                    }

                }
            })
        }


        toggleClose()

    }
    let getModificationDate = () => {

        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var hour = new Date().getHours();
        var minutes = new Date().getMinutes();
        var seconds = new Date().getSeconds();
        var completeDateFormat = date + "/" + month + "/" + year;

        setModDate(completeDateFormat)
    }
    useEffect(() => {

        getModificationDate()
    }, []);
    return (
        <div
            style={mod ? mountedStyle : unmountedStyle}
            className="modal-grp-wrapper"
        >
            <div style={mod ? downStyle : upStyle} className="modal-grp">
                <form className="modal-grp-form" type="submit">
                    <div className="modal-grp-header">
                        Edit Group
                        <div onClick={() => toggleClose()}>
                            <CloseIcon className="modal-grp-close" />
                        </div>
                    </div>
                    <div className="modal-grp-body">
                        <div className="modal-grp-subtitle">General</div>
                        <div className="modal-grp-price">
                            <div className="modal-grp-desc">
                                Group Name*
                                <input
                                    defaultValue={currentitem.name}
                                    onChange={(e) => setGroupName(e.target.value)}
                                    required
                                    placeholder="Group name"
                                    className="modal-grp-desc-input"
                                />
                            </div>
                            <div className="modal-grp-desc">
                                Other Name
                                <input
                                    defaultValue={currentitem.othername}
                                    onChange={(e) => setOtherName(e.target.value)}
                                    placeholder="Other name"
                                    className="modal-grp-desc-input"
                                />
                            </div>
                            <div className="modal-grp-desc">
                                Division*
                                <select
                                    onChange={(e) => setDivision(e.target.value)}
                                    required
                                    className="modal-grp-function-input"
                                    defaultValue={currentitem.division}
                                >
                                    <option value={currentitem.division} disabled selected defaultValue>
                                        {currentitem.division}
                                    </option>
                                    <option className="modal-grp-function-option" value="1">
                                        1
                                    </option>
                                    <option className="modal-grp-function-option" value="2">
                                        2
                                    </option>
                                    <option className="modal-grp-function-option" value="3">
                                        3
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-division-subtitle">Tax + Service</div>
                        <div className="modal-grp-price">
                            <div className="modal-grp-desc-hor">
                                {
                                    !currentitem.tax1 == '' ? <input onChange={() => currentitem.tax1 = ''} defaultChecked type="checkbox" className="modal-check"></input> :
                                        <input onChange={() => currentitem.tax1 = 'tax1'} type="checkbox" className="modal-check"></input>
                                }
                                Tax1
                            </div>
                            <div className="modal-grp-desc-hor">
                                {
                                    !currentitem.tax2 == '' ? <input onChange={() => currentitem.tax2 = ''} defaultChecked type="checkbox" className="modal-check"></input> :
                                        <input onChange={() => currentitem.tax2 = 'tax2'} type="checkbox" className="modal-check"></input>
                                }
                                Tax2
                            </div>
                            <div className="modal-grp-desc-hor">
                                {
                                    !currentitem.tax3 == '' ? <input onChange={() => currentitem.tax3 = ''} defaultChecked type="checkbox" className="modal-check"></input> :
                                        <input onChange={() => currentitem.tax3 = 'tax3'} type="checkbox" className="modal-check"></input>
                                }
                                Tax3
                            </div>
                        </div>
                        <div className="modal-grp-price">
                            <div className="modal-grp-desc-hor">
                                {
                                    !currentitem.tax4 == '' ? <input onChange={() => currentitem.tax4 = ''} defaultChecked type="checkbox" className="modal-check"></input> :
                                        <input onChange={() => currentitem.tax4 = 'tax4'} type="checkbox" className="modal-check"></input>
                                }
                                Tax4
                            </div>
                            <div className="modal-grp-desc-hor">
                                {
                                    !currentitem.tax5 == '' ? <input onChange={() => currentitem.tax5 = ''} defaultChecked type="checkbox" className="modal-check"></input> :
                                        <input onChange={() => currentitem.tax5 = 'tax5'} type="checkbox" className="modal-check"></input>
                                }
                                Tax5
                            </div>
                            <div className="modal-grp-desc-hor">
                                {
                                    !currentitem.service == '' ? <input onChange={() => currentitem.service = ''} defaultChecked type="checkbox" className="modal-check"></input> :
                                        <input onChange={() => currentitem.service = 'service'} type="checkbox" className="modal-check"></input>
                                }
                                Service
                            </div>
                        </div>
                        <div className="modal-grp-subtitle">Accounts</div>
                        <div className="modal-grp-price">
                            <div className="modal-grp-desc">
                                Discount Account
                                <input
                                    defaultValue={currentitem.discount}
                                    onChange={(e) => setDiscount(e.target.value)}
                                    placeholder="Discount account"
                                    className="modal-grp-desc-input"
                                />
                            </div>
                            <div className="modal-grp-desc">
                                Revenue Account
                                <input
                                    defaultValue={currentitem.revenue}
                                    onChange={(e) => setRevenue(e.target.value)}
                                    placeholder="Revenue account"
                                    className="modal-grp-desc-input"
                                />
                            </div>
                            <div className="modal-grp-desc">
                                Expense Account
                                <input
                                    defaultValue={currentitem.expense}
                                    onChange={(e) => setExpense(e.target.value)}
                                    placeholder="Expense account"
                                    className="modal-grp-desc-input"
                                />
                            </div>
                        </div>
                        <div className="modal-grp-subtitle">PDA</div>
                        <div
                            className="modal-grp-price"
                            style={{ marginLeft: "70px", marginRight: "70px" }}
                        >
                            <div className="modal-grp-desc">
                                PDA Menu
                                <select onChange={(e) => setPdaDesc(e.target.value)} className="modal-grp-function-input" defaultValue={currentitem.pdaDesc}>
                                    <option value={currentitem.pdaDesc} disabled selected defaultValue>
                                        {currentitem.pdaDesc}
                                    </option>
                                    <option className="modal-grp-function-option" value="1">
                                        1
                                    </option>
                                    <option className="modal-grp-function-option" value="2">
                                        2
                                    </option>
                                    <option className="modal-grp-function-option" value="3">
                                        3
                                    </option>
                                </select>
                            </div>
                            <div className="modal-grp-desc">
                                Sorting on PDA
                                <input
                                    defaultValue={currentitem.pdasorting}
                                    onChange={(e) => setPdaSorting(e.target.value)}
                                    placeholder="Sorting on PDA"
                                    className="modal-grp-desc-input"
                                />
                            </div>
                        </div>
                        <div className="modal-grp-desc-hor">
                            {
                                !currentitem.pdaHideMenu == '' ? <input onChange={() => currentitem.pdaHideMenu = ''} defaultChecked type="checkbox" className="modal-check"></input> :
                                    <input onChange={() => currentitem.pdaHideMenu = 'pdaHide'} type="checkbox" className="modal-check"></input>
                            }
                            Hide this group on the PDA menu
                        </div>
                        <div className="modal-grp-desc-hor">
                            {
                                !currentitem.groupRemark == '' ? <input onChange={() => currentitem.groupRemark = ''} defaultChecked type="checkbox" className="modal-check"></input> :
                                    <input onChange={() => currentitem.groupRemark = 'isGroupRemark'} type="checkbox" className="modal-check"></input>
                            }
                            This group is a Remark (Modify)
                        </div>
                    </div>
                    <div className="modal-grp-footer">
                        <input type="submit" value="Edit" onClick={() => updateGroups(currentitem.groupId)} className="modal-grp-save" />
                    </div>
                </form>
            </div>
        </div >
    );
};

export default EditGroupModal;
