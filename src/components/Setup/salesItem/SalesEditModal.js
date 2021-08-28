import React, { useState, useEffect } from "react";
import "../../../styles/Items.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
const SalesEditModal = ({
    mod,
    mountedStyle,
    toggleClose,
    unmountedStyle,
    downStyle,
    upStyle,
    currentitem,
 
}) => {
    const [name, setName] = useState('');
    const [menuDesc, setMenuDesc] = useState('');
    const [kitchenDesc, setKitchenDesc] = useState('');
    const [price, setPrice] = useState('');
    const [price2, setPrice2] = useState('');
    const [price3, setPrice3] = useState('');
    const [price4, setPrice4] = useState('');
    const [func, setFunc] = useState('');
    const [group, setGroup] = useState('');
    const [otherDesc, setOtherDesc] = useState('');
    const [pdaDesc, setPdaDesc] = useState('');
    const [comments, setComments] = useState('');
    const [branch, setbranch] = useState("");
    const [modDate, setModDate] = useState('')
    const [print1, setPrint1] = useState('')
    const [print2, setPrint2] = useState('')
    const [print3, setPrint3] = useState('')
    const { salesItems } = useSelector(
        (state) => state.postReducer
    );
    let updateItem = (itemId) => {
        if (salesItems.length > 0) {
            salesItems.map((item) => {
                if (item.itemId === itemId) {

                    if (name === '') {
                        item.name = currentitem.name
                    }
                    else {
                        item.name = name
                    }
                    if (kitchenDesc === '') {
                        item.kitchenDesc = currentitem.kitchenDesc
                    }
                    else {
                        item.kitchenDesc = kitchenDesc
                    }
                    if (price === '') {
                        item.price = currentitem.price
                    }
                    else {
                        item.price = price
                    }
                    if (price2 === '') {
                        item.price2 = currentitem.price2
                    }
                    else {
                        item.price2 = price2
                    }
                    if (price3 === '') {
                        item.price3 = currentitem.price3
                    }
                    else {
                        item.price3 = price3
                    }
                    if (price4 === '') {
                        item.price4 = currentitem.price4
                    }
                    else {
                        item.price4 = price4
                    }
                    if (comments === '') {
                        item.comments = currentitem.comments
                    }
                    else {
                        item.comments = comments
                    }
                    if (func === '') {
                        item.func = currentitem.func
                    }
                    else {
                        item.func = func
                    }
                    if (group === '') {
                        item.group = currentitem.group
                    }
                    else {
                        item.group = group
                    }
                    if (menuDesc === '') {
                        item.menuDesc = currentitem.menuDesc
                    }
                    else {
                        item.menuDesc = menuDesc
                    }
                    if (otherDesc === '') {
                        item.otherDesc = currentitem.otherDesc
                    }
                    else {
                        item.otherDesc = otherDesc
                    }
                    if (pdaDesc === '') {
                        item.pdaDesc = currentitem.pdaDesc
                    }
                    else {
                        item.pdaDesc = pdaDesc
                    }


                    if (modDate === '') {
                        item.lastModificationDate = currentitem.lastModificationDate
                    }
                    else {
                        item.lastModificationDate = modDate
                    }
                    if (branch === '') {
                        item.branch = currentitem.branch
                    }
                    else {
                        item.branch = branch
                    }
                    if (print1 === '') {
                        item.print1 = currentitem.print1
                    }
                    else {
                        item.print1 = print1
                    }
                    if (print2 === '') {
                        item.print2 = currentitem.print2
                    }
                    else {
                        item.print2 = print2
                    }
                    if (print3 === '') {
                        item.print3 = currentitem.print3
                    }
                    else {
                        item.print3 = print3
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
        var completeDateFormat = date + "/" + month + "/" + year;

        setModDate(completeDateFormat)
    }
    useEffect(() => {
    
        getModificationDate()
    }, []);
    return (
        <div
            style={mod ? mountedStyle : unmountedStyle}
            className="modal-item-wrapper"
        >
            <div style={mod ? downStyle : upStyle} className="modal-item">
                <form
                    className="modal-item-form"
                    type="submit"

                >
                    <div className="modal-item-header">
                        Edit Item
                        <div onClick={() => toggleClose()}>
                            <CloseIcon className="modal-item-close" />
                        </div>
                    </div>
                    <div className="modal-item-body">
                        <div className="modal-item-subtitle">General</div>

                        <div className="modal-item-desc">
                            Description*
                            <input
                                defaultValue={currentitem.name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="Item description"
                                className="modal-item-desc-input"
                            />
                        </div>

                        <div className="modal-item-desc">
                            Menu Description*
                            <input
                                defaultValue={currentitem.menuDesc}
                                onChange={(e) => setMenuDesc(e.target.value)}
                                required
                                placeholder="Menu description"
                                className="modal-item-desc-input"
                            />
                        </div>

                        <div className="modal-item-desc">
                            Kitchen Description*
                            <input
                                defaultValue={currentitem.kitchenDesc}
                                onChange={(e) => setKitchenDesc(e.target.value)}
                                required
                                placeholder="Kitchen description"
                                className="modal-item-desc-input"
                            />
                        </div>

                        <div className="modal-spacer"></div>

                        <div className="modal-item-price">
                            <div className="modal-item-desc">
                                Price 1
                                <input
                                    defaultValue={currentitem.price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    placeholder="0"
                                    className="modal-item-price-input"
                                />
                                {/* <input readOnly value={price} className="modal-item-price-input" /> */}


                            </div>
                            <div className="modal-item-desc">
                                Price 2
                                <input
                                    defaultValue={currentitem.price2}
                                    onChange={(e) => setPrice2(e.target.value)} placeholder="0" className="modal-item-price-input" />
                                {/* <input readOnly value={price2} className="modal-item-price-input" /> */}
                            </div>
                            <div className="modal-item-desc">
                                Price 3
                                <input defaultValue={currentitem.price3}
                                    onChange={(e) => setPrice3(e.target.value)} placeholder="0" className="modal-item-price-input" />
                                {/* <input readOnly value={price3} className="modal-item-price-input" /> */}
                            </div>
                            <div className="modal-item-desc">
                                Price 4
                                <input defaultValue={currentitem.price4}
                                    onChange={(e) => setPrice4(e.target.value)} placeholder="0" className="modal-item-price-input" />
                                {/* <input readOnly value={price4} className="modal-item-price-input" /> */}
                            </div>
                        </div>

                        <div className="modal-spacer"></div>
                        <div className="modal-item-function">

                            <div className="modal-item-desc">
                                Function*
                                <select
                                    onChange={(e) => setFunc(e.target.value)}
                                    required
                                    className="modal-item-function-input"

                                >
                                    <option value={currentitem.func} disabled selected defaultValue>
                                        {currentitem.func}
                                    </option>
                                    <option className="modal-item-function-option" value="1">
                                        1
                                    </option>
                                    <option className="modal-item-function-option" value="2">
                                        2
                                    </option>
                                    <option className="modal-item-function-option" value="3">
                                        3
                                    </option>
                                </select>
                            </div>

                            <div className="modal-item-desc">
                                Group*
                                <select
                                    onChange={(e) => setGroup(e.target.value)}
                                    required
                                    className="modal-item-function-input"
                                    defaultValue={currentitem.group}
                                >
                                    <option value={currentitem.group} disabled selected defaultValue >
                                        {currentitem.group}
                                    </option>
                                    <option className="modal-item-function-option" value="1">
                                        1
                                    </option>
                                    <option className="modal-item-function-option" value="2">
                                        2
                                    </option>
                                    <option className="modal-item-function-option" value="3">
                                        3
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className="modal-item-price">

                            <div className="modal-item-desc">
                                Other Description
                                <input
                                    defaultValue={currentitem.otherDesc}
                                    onChange={(e) => setOtherDesc(e.target.value)}
                                    placeholder="Other description"
                                    className="modal-item-desc-input"
                                />
                            </div>

                            <div className="modal-item-desc">
                                PDA Description
                                <input
                                    defaultValue={currentitem.pdaDesc}
                                    onChange={(e) => setPdaDesc(e.target.value)}
                                    placeholder="PDA description"
                                    className="modal-item-desc-input"
                                />
                            </div>

                        </div>

                        <div className="modal-item-desc">
                            Comments On Menu
                            <input
                                defaultValue={currentitem.comments}
                                onChange={(e) => setComments(e.target.value)}
                                placeholder="Comments on menu"
                                className="modal-item-desc-input"
                            />
                        </div>

                        <div className="modal-item-subtitle">branch</div>
                        <div className="modal-item-function">

                            <div className="modal-item-desc">
                                <select
                                    onChange={(e) => setbranch(e.target.value)}
                                    defaultValue={currentitem.branch}
                                    className="modal-item-function-input"
                                >
                                    {
                                        !currentitem.branch == '' ? <option selected defaultValue  disabled>
                                            {currentitem.branch}
                                        </option> : <option selected defaultValue value="Select branch" disabled>
                                            Select branch
                                        </option>
                                    }

                                    <option className="modal-item-function-option" value="1">
                                        1
                                    </option>
                                    <option className="modal-item-function-option" value="2">
                                        2
                                    </option>
                                    <option className="modal-item-function-option" value="3">
                                        3
                                    </option>
                                </select>
                            </div>

                            <div className="modal-item-branch">Copy All Branches</div>
                        </div>

                        <div className="modal-spacer"></div>
                        <div className="modal-item-price">

                            <div className="modal-item-desc">
                                Print Out 1
                                <select onChange={(e) => setPrint1(e.target.value)} className="modal-item-print-input">
                              
                                    <option className="modal-item-function-option" defaultValue={currentitem.print1}>
                                        {currentitem.print1}
                                    </option>
                                    <option className="modal-item-function-option" value="1">
                                        1
                                    </option>
                                    <option className="modal-item-function-option" value="2">
                                        2
                                    </option>
                                    <option className="modal-item-function-option" value="3">
                                        3
                                    </option>
                                </select>
                            </div>
                            <div className="modal-item-desc">
                                Print Out 2
                                <select onChange={(e) => setPrint2(e.target.value)} className="modal-item-print-input">
                                    <option className="modal-item-function-option" defaultValue={currentitem.print2}>
                                        {currentitem.print2}
                                    </option>
                                    <option className="modal-item-function-option" value="1">
                                        1
                                    </option>
                                    <option className="modal-item-function-option" value="2">
                                        2
                                    </option>
                                    <option className="modal-item-function-option" value="3">
                                        3
                                    </option>
                                </select>
                            </div>
                            <div className="modal-item-desc">
                                Print Out 3
                                <select onChange={(e) => setPrint3(e.target.value)} className="modal-item-print-input">
                                    <option className="modal-item-function-option" defaultValue={currentitem.print3}>
                                        {currentitem.print3}
                                    </option>
                                    <option className="modal-item-function-option" value="1">
                                        1
                                    </option>
                                    <option className="modal-item-function-option" value="2">
                                        2
                                    </option>
                                    <option className="modal-item-function-option" value="3">
                                        3
                                    </option>
                                </select>
                            </div>

                        </div>
                        <div className="modal-item-subtitle">Modifiers</div>
                        <div className="modal-item-price">

                            <div className="modal-item-desc" style={{ paddingTop: "7px" }}>
                                Modifier 1
                            </div>

                            <select


                                className="modal-item-function-input"
                            >
                                <option disabled defaultValue selected>
                                    Select Add
                                </option>
                                <option className="modal-item-function-option" value="1">
                                    1
                                </option>
                                <option className="modal-item-function-option" value="2">
                                    2
                                </option>
                                <option className="modal-item-function-option" value="3">
                                    3
                                </option>
                            </select>
                            <input placeholder="0" className="modal-item-price-input" />
                            <div className="modal-item-desc-hor">
                                <input type="checkbox" className="modal-check"></input>


                                Mandatory
                            </div>
                        </div>

                        <div className="modal-item-price">

                            <div className="modal-item-desc" style={{ paddingTop: "7px" }}>
                                Modifier 2
                            </div>
                            <select


                                className="modal-item-function-input"
                            >
                                <option disabled defaultValue selected>
                                    Select Remove
                                </option>
                                <option className="modal-item-function-option" value="1">
                                    1
                                </option>
                                <option className="modal-item-function-option" value="2">
                                    2
                                </option>
                                <option className="modal-item-function-option" value="3">
                                    3
                                </option>
                            </select>
                            <input placeholder="0" className="modal-item-price-input" />
                            <div className="modal-item-desc-hor">
                                <input type="checkbox" className="modal-check"></input>


                                Mandatory
                            </div>
                        </div>

                        <div className="modal-item-price">

                            <div className="modal-item-desc" style={{ paddingTop: "7px" }}>
                                Modifier 3
                            </div>
                            <select


                                className="modal-item-function-input"
                            >
                                <option disabled defaultValue selected>
                                    Select AddOn
                                </option>
                                <option className="modal-item-function-option" value="1">
                                    1
                                </option>
                                <option className="modal-item-function-option" value="2">
                                    2
                                </option>
                                <option className="modal-item-function-option" value="3">
                                    3
                                </option>
                            </select>
                            <input placeholder="0" className="modal-item-price-input" />
                            <div className="modal-item-desc-hor">
                                <input type="checkbox" className="modal-check"></input>


                                Mandatory
                            </div>

                        </div>
                    </div>
                    <div className="modal-item-footer">
                        <input type="submit" value="Edit" onClick={() => updateItem(currentitem.itemId)} className="modal-item-save" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SalesEditModal;
