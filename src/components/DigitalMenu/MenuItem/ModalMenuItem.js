import React, { useState, useEffect } from "react";
import "../../../styles/Digital.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
// import { itemAdd, itemRemove, itemAddOn, modifier } from '../../../data/modules'
// import { addModifier, removeModifier, addOnModifier, clearAddMod, clearRemoveMod, clearAddOnMod, addMandModifier, clearMandModifier } from "../../../redux/actions";
import { v4 as uuidv4 } from 'uuid';
import Draggable from 'react-draggable'

const ModalMenuItem = ({
    m,
    mod,
    mountedStyle,
    toggleClose,
    unmountedStyle,
    downStyle,
    upStyle,
    handleSubmit,
}) => {
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [groupId, setGroupId] = useState("");
    const { QRMenu } = useSelector((state) => state.postReducer);


    useEffect(() => {

    }, []);


    let resetForm = () => {
        document.getElementById("add-item-form").reset();
        toggleClose()
    }
    let postAll = (e) => {

        handleSubmit(e, uuidv4(), itemName, itemPrice, ingredients, groupId)

    }

    const options = QRMenu.map(option =>
        <option key={option.groupId} value={option.menuName}>{option.menuName}</option>
    )


    return (

        <div
            style={mod ? mountedStyle : unmountedStyle}
            className="modal-item-Digital-wrapper">
            <div style={mod ? downStyle : upStyle} className="modal-Digital-item">
                <form
                    id="add-item-form"
                    className="modal-item-form"
                    type="submit"
                    onSubmit={(e) =>
                        postAll(e)
                    }
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
                                onChange={(e) => setItemPrice(e.target.value)}
                                required
                                placeholder="price"
                                className="modal-item-desc-input"
                            />
                        </div>

                        <div className="modal-item-Digital-desc">
                            Ingredients
                            <input
                                onChange={(e) => setIngredients(e.target.value)}
                                placeholder="ingredients"
                                className="modal-item-desc-Digital-input"
                            />
                        </div>
                        <div className="modal-item-Digital-desc">
                            Group Name*
                         
                            <select
                                onChange={(e) => setGroupId(e.target.value)}
                                required
                                className="modal-item-function-input"
                                defaultValue={""}
                            >
                                <option value="" disabled>
                                    Select Group Name
                                </option>
                                {options}
                            </select>
                        </div>



                        <div className="modal-spacer"></div>


                    </div>
                    <div className="modal-item-Digital-footer">
                        <input
                            type="submit"
                            value="Save"
                            className="modal-item-save"
                        />
                    </div>
                </form>
            </div>
        </div>
        // </Draggable>
    );
};

export default ModalMenuItem;
