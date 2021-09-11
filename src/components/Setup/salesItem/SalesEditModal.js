import React, { useState, useEffect } from "react";
import "../../../styles/Items.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { itemAdd, itemRemove, itemAddOn, modifier } from '../../../data/modules'
import { addModifier, removeModifier, addOnModifier, clearAddMod, clearRemoveMod, clearAddOnMod } from "../../../redux/actions";
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
    const [addDescption, setAddDescption] = useState('')
    const [addPrice, setAddPrice] = useState('')
    const [isAddMand, setAddMand] = useState('')
    const [isRemoveMand, setRemoveMand] = useState('')
    const [removeDescption, setRemoveDescption] = useState('')
    const [removePrice, setRemovePrice] = useState('')
    const [addOnDescption, setAddOnDescption] = useState('')
    const [addOnPrice, setAddOnPrice] = useState('')
    const [isAddOnMand, setAddOnMand] = useState('')
    const [mandMod1, setMandMod1] = useState('')
    const [mandMod2, setMandMod2] = useState('')
    const [mandMod3, setMandMod3] = useState('')
    const [mandPrice1, setMandPrice1] = useState('')
    const [mandPrice2, setMandPrice2] = useState('')
    const [mandPrice3, setMandPrice3] = useState('')
    const [isMandMod1, setIsMand1] = useState('')
    const [isMandMod2, setIsMand2] = useState('')
    const [isMandMod3, setIsMand3] = useState('')
    const { salesItems, ItemAdd, ItemRemove, ItemAddOn } = useSelector(
        (state) => state.postReducer
    );
    const dispatch = useDispatch();

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


                    if (currentitem.ItemAdd === '[object Object]') {

                    }
                    else {
                        if (Object.keys(currentitem.ItemAdd).length === 0) {

                            if (addDescption === '') {

                            }
                            else {
                                var modAdd = Object.create(itemAdd)
                                modAdd.specs = addDescption
                                modAdd.categ = "ADD"
                                modAdd.descption = addDescption
                                modAdd.cmt = ''
                                modAdd.price = addPrice
                                modAdd.isMand = isAddMand
                                currentitem.ItemAdd = modAdd
                            }
                        }
                        else {
                            if (addDescption === '') {
                                item.ItemAdd.descption = currentitem.ItemAdd.descption
                            }
                            else {
                                item.ItemAdd.descption = addDescption
                            }
                            if (addPrice === '') {
                                item.ItemAdd.price = currentitem.ItemAdd.price
                            }
                            else {
                                item.ItemAdd.price = addPrice
                            }
                        }
                    }



                    if (currentitem.ItemRemove === '[object Object]') {

                    } else {
                        if (Object.keys(currentitem.ItemRemove).length === 0) {

                            if (removeDescption === '') {

                            }
                            else {
                                var modRemove = Object.create(itemRemove)
                                modRemove.specs = removeDescption
                                modRemove.categ = "REMOVE"
                                modRemove.descption = removeDescption
                                modRemove.cmt = ''
                                modRemove.price = removePrice
                                modRemove.isMand = isRemoveMand
                                currentitem.ItemRemove = modRemove
                            }
                        }
                        else {
                            if (removeDescption === '') {
                                item.ItemRemove.descption = currentitem.ItemRemove.descption
                            }
                            else {
                                item.ItemRemove.descption = removeDescption
                            }
                            if (removePrice === '') {
                                item.ItemRemove.price = currentitem.ItemRemove.price
                            }
                            else {
                                item.ItemRemove.price = removePrice
                            }
                        }
                    }

                    if (currentitem.ItemAddOn === '[object Object]') {

                    }
                    else {
                        if (Object.keys(currentitem.ItemAddOn).length === 0) {
                            if (addOnDescption === '') {

                            }
                            else {
                                var modAddOn = Object.create(itemAddOn)
                                modAddOn.specs = addOnDescption
                                modAddOn.categ = "ADDON"
                                modAddOn.descption = addOnDescption
                                modAddOn.cmt = ''
                                modAddOn.price = addOnPrice
                                modAddOn.isMand = isAddOnMand
                                currentitem.ItemAddOn = modAddOn
                            }
                        }
                        else {
                            if (addOnDescption === '') {
                                item.ItemAddOn.descption = currentitem.ItemAddOn.descption
                            }
                            else {
                                item.ItemAddOn.descption = addOnDescption
                            }
                            if (addOnPrice === '') {
                                item.ItemAddOn.price = currentitem.ItemAddOn.price
                            }
                            else {
                                item.ItemAddOn.price = addOnPrice
                            }
                        }
                    }



                    if (currentitem.modifiers === '[object Object]') {

                    }
                    else {
                        if (Object.keys(currentitem.modifiers.mod1).length === 0) {
                            if (mandMod1 === '') {

                            }
                            else {
                                var modMand1 = Object.create(modifier)
                                modMand1.descption = mandMod1
                                modMand1.price = mandPrice1
                                modMand1.isMand = isMandMod1
                                currentitem.modifiers.mod1 = modMand1
                            }
                        }
                        else {
                            if (mandMod1 === '') {
                                item.modifiers.mod1.descption = currentitem.modifiers.mod1.descption
                            }
                            else {
                                item.modifiers.mod1.descption = mandMod1
                            }
                            if (mandPrice1 === '') {
                                item.modifiers.mod1.price = currentitem.modifiers.mod1.price
                            }
                            else {
                                item.modifiers.mod1.price = mandPrice1
                            }
                        }
                        if (Object.keys(currentitem.modifiers.mod2).length === 0) {
                            if (mandMod2 === '') {

                            }
                            else {
                                var modMand2 = Object.create(modifier)
                                modMand2.descption = mandMod2
                                modMand2.price = mandPrice2
                                modMand2.isMand = isMandMod2
                                currentitem.modifiers.mod2 = modMand2
                            }
                        }
                        else {
                            if (mandMod2 === '') {
                                item.modifiers.mod2.descption = currentitem.modifiers.mod2.descption
                            }
                            else {
                                item.modifiers.mod2.descption = mandMod2
                            }
                            if (mandPrice2 === '') {
                                item.modifiers.mod2.price = currentitem.modifiers.mod2.price
                            }
                            else {
                                item.modifiers.mod2.price = mandPrice2
                            }
                        }

                        if (Object.keys(currentitem.modifiers.mod3).length === 0) {
                            if (mandMod3 === '') {

                            }
                            else {
                                var modMand3 = Object.create(modifier)
                                modMand3.descption = mandMod3
                                modMand3.price = mandPrice3
                                modMand3.isMand = isMandMod3
                                currentitem.modifiers.mod3 = modMand3
                            }
                        }
                        else {
                            if (mandMod3 === '') {
                                item.modifiers.mod3.descption = currentitem.modifiers.mod3.descption
                            }
                            else {
                                item.modifiers.mod3.descption = mandMod3
                            }
                            if (mandPrice3 === '') {
                                item.modifiers.mod3.price = currentitem.modifiers.mod3.price
                            }
                            else {
                                item.modifiers.mod3.price = mandPrice3
                            }
                        }
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



        console.log(currentitem)

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
                                    type="number"
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
                                    type="number"
                                    defaultValue={currentitem.price2}
                                    onChange={(e) => setPrice2(e.target.value)} placeholder="0" className="modal-item-price-input" />
                                {/* <input readOnly value={price2} className="modal-item-price-input" /> */}
                            </div>
                            <div className="modal-item-desc">
                                Price 3
                                <input
                                    type="number"
                                    defaultValue={currentitem.price3}
                                    onChange={(e) => setPrice3(e.target.value)} placeholder="0" className="modal-item-price-input" />
                                {/* <input readOnly value={price3} className="modal-item-price-input" /> */}
                            </div>
                            <div className="modal-item-desc">
                                Price 4
                                <input
                                    type="number"
                                    defaultValue={currentitem.price4}
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
                                        !currentitem.branch == '' ? <option selected defaultValue disabled>
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
                                    {
                                        currentitem.print1 === '' || currentitem.print1 === null ? <option className="modal-item-function-option" defaultValue selected disabled>
                                            Select Print 1
                                        </option> : <option className="modal-item-function-option" defaultValue={currentitem.print1}>
                                            {currentitem.print1}
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
                            <div className="modal-item-desc">
                                Print Out 2
                                <select onChange={(e) => setPrint2(e.target.value)} className="modal-item-print-input">
                                    {
                                        currentitem.print2 === '' || currentitem.print2 === null ? <option className="modal-item-function-option" defaultValue selected disabled>
                                            Select Print 2
                                        </option> : <option className="modal-item-function-option" defaultValue={currentitem.print2}>
                                            {currentitem.print2}
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
                            <div className="modal-item-desc">
                                Print Out 3
                                <select onChange={(e) => setPrint3(e.target.value)} className="modal-item-print-input">
                                    {
                                        currentitem.print3 === '' || currentitem.print3 === null ? <option className="modal-item-function-option" defaultValue selected disabled>
                                            Select Print 3
                                        </option> : <option className="modal-item-function-option" defaultValue={currentitem.print3}>
                                            {currentitem.print3}
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

                        </div>
                        {
                            currentitem.ItemAdd === '[object Object]' ? null : <div className="modal-item-subtitle">Modifiers Type</div>
                        }

                        {
                            currentitem.ItemAdd === '[object Object]' ? null : <div className="modal-item-price">

                                <div className="modal-item-desc" style={{ paddingTop: "7px" }}>
                                    Modifier 1
                                </div>


                                <select
                                    onChange={(e) => setAddDescption(e.target.value)}
                                    className="modal-item-function-input"
                                >
                                    {
                                        Object.keys(currentitem.ItemAdd).length === 0 ? <option disabled defaultValue selected>
                                            Select Add
                                        </option> : <option disabled defaultValue selected>
                                            {currentitem.ItemAdd.descption}
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




                                <div>
                                    {
                                        Object.keys(currentitem.ItemAdd).length === 0 ? <input type="number" placeholder="0" onChange={(e) => setAddPrice(e.target.value)} className="modal-item-price-input" /> :
                                            <input type="number" placeholder="0" defaultValue={currentitem.ItemAdd.price} onChange={(e) => setAddPrice(e.target.value)} className="modal-item-price-input" />
                                    }

                                </div>





                                <div className="modal-item-desc-hor">
                                    {
                                        Object.keys(currentitem.ItemAdd).length === 0 ? <input value="isMandantory" onChange={(e) => setAddMand(e.target.value)} type="checkbox" className="modal-check"></input> :
                                            currentitem.ItemAdd.isMand === '' ? <input value="isMandantory" onChange={(e) => currentitem.ItemAdd.isMand = e.target.value} type="checkbox" className="modal-check"></input> :
                                                <input defaultChecked onChange={() => currentitem.ItemAdd.isMand = ''} type="checkbox" className="modal-check"></input>

                                    }

                                    Mandatory
                                </div>
                            </div>
                        }


                        {
                            currentitem.ItemRemove === '[object Object]' ? null : <div className="modal-item-price">

                                <div className="modal-item-desc" style={{ paddingTop: "7px" }}>
                                    Modifier 2
                                </div>
                                <select
                                    onChange={(e) => setRemoveDescption(e.target.value)}
                                    className="modal-item-function-input"
                                >
                                    {
                                        Object.keys(currentitem.ItemRemove).length === 0 ? <option disabled defaultValue selected>
                                            Select Remove
                                        </option> : <option disabled defaultValue selected>
                                            {currentitem.ItemRemove.descption}
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


                                {
                                    Object.keys(currentitem.ItemRemove).length === 0 ? <input type="number" placeholder="0" onChange={(e) => setRemovePrice(e.target.value)} className="modal-item-price-input" /> :
                                        <input type="number" placeholder="0" defaultValue={currentitem.ItemRemove.price} onChange={(e) => setRemovePrice(e.target.value)} className="modal-item-price-input" />
                                }

                                <div className="modal-item-desc-hor">
                                    {
                                        Object.keys(currentitem.ItemRemove).length === 0 ? <input onChange={(e) => setRemoveMand(e.target.value)} type="checkbox" className="modal-check"></input> :
                                            currentitem.ItemRemove.isMand === '' ? <input value="isMandantory" onChange={(e) => currentitem.ItemRemove.isMand = e.target.value} type="checkbox" className="modal-check"></input> :
                                                <input defaultChecked onChange={() => currentitem.ItemRemove.isMand = ''} type="checkbox" className="modal-check"></input>

                                    }


                                    Mandatory
                                </div>
                            </div>
                        }



                        {
                            currentitem.ItemAddOn === '[object Object]' ? null : <div className="modal-item-price">

                                <div className="modal-item-desc" style={{ paddingTop: "7px" }}>
                                    Modifier 3
                                </div>
                                <select

                                    onChange={(e) => setAddOnDescption(e.target.value)}
                                    className="modal-item-function-input"
                                >
                                    {
                                        Object.keys(currentitem.ItemAddOn).length === 0 ? <option disabled defaultValue selected>
                                            Select AddOn
                                        </option> : <option disabled defaultValue selected>
                                            {currentitem.ItemAddOn.descption}
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

                                {
                                    Object.keys(currentitem.ItemAddOn).length === 0 ? <input type="number" placeholder="0" onChange={(e) => setAddOnPrice(e.target.value)} className="modal-item-price-input" /> :
                                        <input type="number" placeholder="0" defaultValue={currentitem.ItemAddOn.price} onChange={(e) => setAddOnPrice(e.target.value)} className="modal-item-price-input" />
                                }
                                <div className="modal-item-desc-hor">
                                    {
                                        Object.keys(currentitem.ItemAddOn).length === 0 ? <input onChange={(e) => setAddOnMand(e.target.value)} type="checkbox" className="modal-check"></input> :
                                            currentitem.ItemAddOn.isMand === '' ? <input value="isMandantory" onChange={(e) => currentitem.ItemAddOn.isMand = e.target.value} type="checkbox" className="modal-check"></input> :
                                                <input defaultChecked onChange={() => currentitem.ItemAddOn.isMand = ''} type="checkbox" className="modal-check"></input>

                                    }

                                    Mandatory
                                </div>

                            </div>
                        }

                        {
                            currentitem.modifiers === '[object Object]' ? null : <div className="modal-item-subtitle">Modifiers  </div>
                        }

                        {
                            currentitem.modifiers === '[object Object]' ? null : <div className="modal-item-price">

                                <div className="modal-item-desc" style={{ paddingTop: "7px" }}>
                                    Modifier 1
                                </div>

                                <select
                                    onChange={(e) => setMandMod1(e.target.value)}
                                    className="modal-item-function-input">
                                    {
                                        Object.keys(currentitem.modifiers.mod1).length === 0 ? <option value="" defaultValue selected disabled  >

                                        </option> : <option defaultValue={currentitem.modifiers.mod1.descption} disabled defaultValue selected>
                                            {currentitem.modifiers.mod1.descption}
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
                                {
                                    Object.keys(currentitem.modifiers.mod1).length === 0 ? <input type="number" onChange={(e) => setMandPrice1(e.target.value)} placeholder="0" className="modal-item-price-input" /> :
                                        <input type="number" defaultValue={currentitem.modifiers.mod1.price} onChange={(e) => setMandPrice1(e.target.value)} placeholder="0" className="modal-item-price-input" />
                                }

                                <div className="modal-item-desc-hor">
                                    {
                                        Object.keys(currentitem.modifiers.mod1).length === 0 ? <input value="isMandantory" onChange={(e) => setIsMand1(e.target.value)} type="checkbox" className="modal-check"></input> :
                                            currentitem.modifiers.mod1.isMand === '' ? <input value="isMandantory" onChange={(e) => currentitem.modifiers.mod1.isMand = e.target.value} type="checkbox" className="modal-check"></input> :
                                                <input defaultChecked onChange={() => currentitem.modifiers.mod1.isMand = ''} type="checkbox" className="modal-check"></input>

                                    }

                                    Mandatory
                                </div>
                            </div>
                        }
                        {
                            currentitem.modifiers === '[object Object]' ? null : <div className="modal-item-price">

                                <div className="modal-item-desc" style={{ paddingTop: "7px" }}>
                                    Modifier 2
                                </div>
                                <select
                                    onChange={(e) => setMandMod2(e.target.value)}
                                    defaultValue={""}
                                    className="modal-item-function-input"
                                >
                                    {
                                        Object.keys(currentitem.modifiers.mod2).length === 0 ? <option value="" disabled defaultValue selected>

                                        </option> : <option value="" disabled defaultValue selected>
                                            {currentitem.modifiers.mod2.descption}
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
                                {
                                    Object.keys(currentitem.modifiers.mod2).length === 0 ? <input type="number" onChange={(e) => setMandPrice2(e.target.value)} placeholder="0" className="modal-item-price-input" /> :
                                        <input type="number" defaultValue={currentitem.modifiers.mod2.price} onChange={(e) => setMandPrice2(e.target.value)} placeholder="0" className="modal-item-price-input" />
                                }
                                <div className="modal-item-desc-hor">
                                    {
                                        Object.keys(currentitem.modifiers.mod2).length === 0 ? <input value="isMandantory" onChange={(e) => setIsMand2(e.target.value)} type="checkbox" className="modal-check"></input> :
                                            currentitem.modifiers.mod2.isMand === '' ? <input value="isMandantory" onChange={(e) => currentitem.modifiers.mod2.isMand = e.target.value} type="checkbox" className="modal-check"></input> :
                                                <input defaultChecked onChange={() => currentitem.modifiers.mod2.isMand = ''} type="checkbox" className="modal-check"></input>

                                    }
                                    Mandatory
                                </div>
                            </div>
                        }
                        {
                            currentitem.modifiers === '[object Object]' ? null : <div className="modal-item-price">

                                <div className="modal-item-desc" style={{ paddingTop: "7px" }}>
                                    Modifier 3
                                </div>
                                <select
                                    onChange={(e) => setMandMod3(e.target.value)}
                                    defaultValue={""}
                                    className="modal-item-function-input"
                                >
                                    {
                                        Object.keys(currentitem.modifiers.mod3).length === 0 ? <option value="" disabled defaultValue selected>

                                        </option> : <option value="" disabled defaultValue selected>
                                            {currentitem.modifiers.mod3.descption}
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
                                {
                                    Object.keys(currentitem.modifiers.mod3).length === 0 ? <input type="number" onChange={(e) => setMandPrice3(e.target.value)} placeholder="0" className="modal-item-price-input" /> :
                                        <input type="number" defaultValue={currentitem.modifiers.mod3.price} onChange={(e) => setMandPrice3(e.target.value)} placeholder="0" className="modal-item-price-input" />
                                }
                                <div className="modal-item-desc-hor">
                                    {
                                        Object.keys(currentitem.modifiers.mod3).length === 0 ? <input value="isMandantory" onChange={(e) => setIsMand3(e.target.value)} type="checkbox" className="modal-check"></input> :
                                            currentitem.modifiers.mod3.isMand === '' ? <input value="isMandantory" onChange={(e) => currentitem.modifiers.mod3.isMand = e.target.value} type="checkbox" className="modal-check"></input> :
                                                <input defaultChecked onChange={() => currentitem.modifiers.mod3.isMand = ''} type="checkbox" className="modal-check"></input>

                                    }
                                    Mandatory
                                </div>

                            </div>
                        }


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
