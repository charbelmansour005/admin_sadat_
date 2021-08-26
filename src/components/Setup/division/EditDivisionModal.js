import React, { useState, useEffect } from "react";
import "../../../styles/Divisions.css";
import CloseIcon from "@material-ui/icons/Close";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useDispatch, useSelector } from "react-redux";
const EditDivisionModal = ({
    mod,
    mountedStyle,
    toggleClose,
    downStyle,
    currentitem,
    unmountedStyle,
    upStyle,
}) => {

    const [divisionName, setDivisionName] = useState('')
    const [categoryName, setCategoryName] = useState('')
    const [divId, setDivId] = useState('')

    const { divisionItems } = useSelector(
        (state) => state.postReducer
    );
    let updateDivision = (divisionId) => {
        if (divisionItems.length > 0) {
            divisionItems.map((item) => {
                if (item.divisionId === divisionId) {
                    if (divisionName === '') {
                        item.name = currentitem.name
                    }
                    else {
                        item.name = divisionName
                    }

                    if (categoryName === '') {
                        item.category = currentitem.category
                    }
                    else {
                        item.category = categoryName
                    }
                    if (divId === '') {
                        item.divId = currentitem.divId
                    }
                    else {
                        item.divId = divId
                    }

                }

            })
        }


        toggleClose()

    }
    return (
        <div
            style={mod ? mountedStyle : unmountedStyle}
            className="modal-division-wrapper"
        >
            <div style={mod ? downStyle : upStyle} className="modal-division">
                <form className="modal-division-form" type="submit">
                    <div className="modal-division-header">
                        Edit Division
                        <div onClick={() => toggleClose()}>
                            <CloseIcon className="modal-division-close" />
                        </div>
                    </div>
                    <div className="modal-division-body">
                        <div className="modal-division-subtitle">General</div>
                        <div className="modal-division-price">
                            <div className="modal-division-desc">
                                Division ID*
                                <input
                                    defaultValue={currentitem.divId}
                                    onChange={(e) => setDivId(e.target.value)}
                                    required
                                    type="number"
                                    placeholder="0"
                                    className="modal-division-price-input"
                                />
                            </div>
                            <div className="modal-division-desc">
                                Division Name*
                                <input
                                    defaultValue={currentitem.name}
                                    onChange={(e) => setDivisionName(e.target.value)}
                                    required
                                    placeholder="Division name"
                                    className="modal-division-desc-input"
                                />
                            </div>
                            <div className="modal-division-desc">
                                Category*
                                <select
                                    defaultValue={currentitem.category}
                                    required
                                    className="modal-division-function-input"
                                    onChange={(e) => setCategoryName(e.target.value)}
                                >
                                    <option value={currentitem.category} disabled selected defaultValue >
                                        {currentitem.category}
                                    </option>
                                    <option className="modal-division-function-option" value="1">
                                        1
                                    </option>
                                    <option className="modal-division-function-option" value="2">
                                        2
                                    </option>
                                    <option className="modal-division-function-option" value="3">
                                        3
                                    </option>
                                </select>
                            </div>
                            <AddBoxIcon className="add-box" />
                        </div>
                    </div>
                    <div className="modal-division-footer">
                        <input type="submit" value="Edit" onClick={() => updateDivision(currentitem.divisionId)} className="modal-division-save" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditDivisionModal;
