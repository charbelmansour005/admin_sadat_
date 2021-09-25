import React, { useState, useEffect } from "react";
import "../../../styles/Digital.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";

const ModalEditMenuItem = ({
    mod,
    mountedStyle,
    toggleClose,
    unmountedStyle,
    downStyle,
    upStyle,
    currentitem,

}) => {
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [groupId, setGroupId] = useState("");
    const { QRMenu, menuItems } = useSelector((state) => state.postReducer);
    let updateItem = (itemId) => {
        if (menuItems.length > 0) {
            menuItems.map((item) => {
                if (item.itemId === itemId) {

                    if (itemName === '') {
                        item.ItemName = currentitem.ItemName
                    }
                    else {
                        item.ItemName = itemName
                    }
                    if (itemPrice === '') {
                        item.ItemPrice = currentitem.ItemPrice
                    }
                    else {
                        item.ItemPrice = itemPrice
                    }

                    if (ingredients === '') {
                        item.Ingredients = currentitem.Ingredients
                    }
                    else {
                        item.Ingredients = ingredients
                    }
                    if (groupId === '') {
                        item.groupId = currentitem.groupId
                    }
                    else {
                        item.groupId = groupId
                    }

                }
            })
        }


        toggleClose()


    }


    const options = QRMenu.map(option =>
        <option key={option.groupId} value={option.menuName}>{option.menuName}</option>
    )
    let resetForm = () => {
        document.getElementById("add-item-form").reset();
        toggleClose()
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

                >
                    <div className="modal-item-Digital-header">
                        Add New Menu Item
                        <div onClick={() => resetForm()}>
                            <CloseIcon className="modal-item-Digital-close" />
                        </div>
                    </div>
                    <div className="modal-item-Digital-body">

                        <div className="modal-item-Digital-desc">
                            Item Name*
                            <input
                                id="desc"
                                defaultValue={currentitem.ItemName}
                                onChange={(e) => setItemName(e.target.value)}
                                required
                                placeholder="Item Name"
                                className="modal-item-desc-input"
                            />
                        </div>

                        <div className="modal-item-Digital-desc">
                            Price*
                            <input
                                type="number"
                                defaultValue={currentitem.ItemPrice}
                                onChange={(e) => setItemPrice(e.target.value)}
                                required
                                placeholder="price"
                                className="modal-item-desc-input"
                            />
                        </div>

                        <div className="modal-item-Digital-desc">
                            Ingredients
                            <input
                                defaultValue={currentitem.Ingredients}
                                onChange={(e) => setIngredients(e.target.value)}
                                placeholder="ingredients"
                                className="modal-item-desc-Digital-input"
                            />
                        </div>
                        {/* <div className="modal-emp-desc">
                            Role*
                            <select
                                onChange={(e) => setRole(e.target.value)}
                                required
                                className="modal-emp-function-input"
                                defaultValue={currentitem.role}
                            >
                                {
                                    currentitem.role === '' ? <option value="">Select Role</option> :
                                        <option defaultValue disabled selected >{currentitem.role}</option>
                                }
                                {options}

                            </select>
                        </div> */}
                        <div className="modal-item-Digital-desc">
                            Group Name*

                            <select
                                onChange={(e) => setGroupId(e.target.value)}
                                required
                                className="modal-item-function-input"
                                defaultValue={currentitem.groupId}
                            >
                                {
                                    currentitem.groupId === '' ? <option value="">Select Role</option> :
                                        <option defaultValue disabled selected >{currentitem.groupId}</option>
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
                            onClick={() => updateItem(currentitem.itemId)}
                            className="modal-item-save"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalEditMenuItem;
