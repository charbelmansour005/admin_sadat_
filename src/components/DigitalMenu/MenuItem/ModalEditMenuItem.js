import React, { useState, useEffect } from "react";
import "../../../styles/Digital.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../../global/globalvars";
import Items from "../../../models/Items";

const ModalEditMenuItem = ({
    mod,
    mountedStyle,
    toggleClose,
    unmountedStyle,
    downStyle,
    upStyle,
    currentitem,
    handleSubmit

}) => {
    const [itemName, setItemName] = useState("");
    const [enName, setEnName] = useState('');
    const [arName, setArName] = useState('');
    const [itemPrice, setItemPrice] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [groupId, setGroupId] = useState("");
    const [sorting, setSorting] = useState('')
    const { QRMenu, menuItems } = useSelector((state) => state.postReducer);
    var db = require('../../../global/globalfunctions')
    let updateItem = (itemId) => {
        if (Menu.groupItems.length > 0) {
            Menu.groupItems.map((item) => {
                if (item.itemid === itemId) {

                    if (enName === '') {
                        item.nameEN[1] = currentitem.nameEN[1]
                    }
                    else {
                        item.nameEN[1] = enName
                    }
                    if (arName === '') {
                        item.nameAR = currentitem.nameAR
                    }
                    else {
                        item.nameAR = arName
                    }
                    if (itemPrice === '') {
                        item.price = currentitem.price
                    }
                    else {
                        item.price = itemPrice
                    }

                    if (ingredients === '') {
                        item.description = currentitem.description
                    }
                    else {
                        item.description = ingredients
                    }
                    if (groupId === '') {
                        item.categoryid = currentitem.categoryid
                    }
                    else {
                        item.categoryid = groupId
                    }

                }
            })
        }


        toggleClose()


    }


    const options = Menu.groupCategory.map(option =>
        <option key={option.categoryid} value={option.categoryid}>{option.nameEN}</option>
    )
    let resetForm = () => {
        document.getElementById("add-item-form").reset();
        toggleClose()
    }

    let updateAll = (e) => {
        sendUpdatedItem();
        handleSubmit(e)
        resetForm()

    }
    let sendUpdatedItem = () => {
        const apiUrl = "http://localhost:3002/api/DigitalMenu/sendItem"
        var item = Object.create(Items)
        item.mode = "w";
        item.Itemid = currentitem.itemid;
        item.cusotmerid = currentitem.cusotmerid;
        item.branchid = "1";
        if (groupId === "") {
            item.categoryid = currentitem.categoryid;
        }
        else {
            item.categoryid = groupId;
        }
        if (enName === "") {
            item.nameEN = currentitem.nameEN[1];
        }
        else {
            item.nameEN = enName;
        }
        if (arName === "") {
            item.nameAR = currentitem.nameAR;
        }
        else {
            item.nameAR = arName;
        }
        if (ingredients === "") {
            item.descpt = currentitem.description;
        }
        else {
            item.descpt = ingredients;
        }
        if (sorting === "") {
            item.sort = currentitem.sort
        }
        else {
            item.sort = sorting;
        }
        if (itemPrice === "") {
            item.prices = currentitem.price
        }
        else {
            item.prices = itemPrice;
        }
        item.images = "";
        item.search = ""
        fetch(apiUrl, {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((res) => res.json()).then((resJson) => {
            console.log(resJson)
        })
    }
    useEffect(() => {

    }, []);
    return (
        <div
            style={mod ? mountedStyle : unmountedStyle}
            className="modal-item-Digital-wrapper">
            <div style={mod ? downStyle : upStyle} className="modal-Digital-item">
                <form
                    id="add-item-form"
                    className="modal-item-form"
                    type="submit"
                    onSubmit={(e) => updateAll(e)}>
                    <div className="modal-item-Digital-header">
                        Add New Menu Item
                        <div onClick={() => resetForm()}>
                            <CloseIcon className="modal-item-Digital-close" />
                        </div>
                    </div>
                    <div className="modal-item-Digital-body">

                        <div className="modal-item-Digital-desc">
                            EN Name*
                            <input
                                id="desc"
                                defaultValue={currentitem.nameEN[1]}
                                onChange={(e) => setEnName(e.target.value)}
                                required
                                placeholder="EN Name"
                                className="modal-item-desc-input"
                            />
                        </div>
                        <div className="modal-item-Digital-desc">
                            AR Name
                            <input
                                id="desc"
                                defaultValue={currentitem.nameAR}
                                onChange={(e) => setArName(e.target.value)}

                                placeholder="AR Name"
                                className="modal-item-desc-input"
                            />
                        </div>

                        <div className="modal-item-Digital-desc">
                            Price*
                            <input
                                type="number"
                                defaultValue={currentitem.price}
                                onChange={(e) => setItemPrice(e.target.value)}
                                required
                                placeholder="price"
                                className="modal-item-desc-input"
                            />
                        </div>

                        <div className="modal-item-Digital-desc">
                            Ingredients
                            <input
                                defaultValue={currentitem.description}
                                onChange={(e) => setIngredients(e.target.value)}
                                placeholder="ingredients"
                                className="modal-item-desc-Digital-input"
                            />
                        </div>
                        <div className="modal-item-Digital-desc">
                            sorting
                            <input
                                type="number"
                                defaultValue={currentitem.sort}
                                onChange={(e) => setSorting(e.target.value)}
                                placeholder="sorting"
                                className="modal-item-price-Digital-input"
                            />

                        </div>
                        <div className="modal-item-Digital-desc">
                            Group Name*

                            <select
                                onChange={(e) => setGroupId(e.target.value)}
                                required
                                className="modal-item-function-input"
                                defaultValue={currentitem.groupId}
                            >
                                {
                                    currentitem.categoryid === '' ? <option value="">Select Group Name</option> :
                                        <option defaultValue disabled selected >{currentitem.nameEN[0]}</option>
                                }

                                {options}
                            </select>
                        </div>



                        <div className="modal-spacer"></div>


                    </div>
                    <div className="modal-item-Digital-footer">
                        <input
                            type="submit"
                            value="Edit"
                            className="modal-item-save"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalEditMenuItem;
