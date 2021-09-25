import React, { useState, useEffect } from "react";
import "../../styles/Digital.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";

const ModalMenuEdit = ({
    mod,
    mountedStyle,
    toggleClose,
    unmountedStyle,
    downStyle,
    upStyle,
    currentitem,

}) => {
    const [menuName, setMenuName] = useState("");
    const [enName, setEnName] = useState("");
    const [menuDesc, setMenuDesc] = useState("");
    const [enDesc, setEnDescription] = useState("");
    const [sorting, setSorting] = useState("");
    const { QRMenu } = useSelector(
        (state) => state.postReducer
    );
    let updateItem = (groupId) => {
        if (QRMenu.length > 0) {
            QRMenu.map((item) => {
                if (item.groupId === groupId) {

                    if (menuName === '') {
                        item.menuName = currentitem.menuName
                    }
                    else {
                        item.menuName = menuName
                    }
                    if (enName === '') {
                        item.enName = currentitem.enName
                    }
                    else {
                        item.enName = enName
                    }

                    if (menuDesc === '') {
                        item.menuDesc = currentitem.menuDesc
                    }
                    else {
                        item.menuDesc = menuDesc
                    }
                    if (enDesc === '') {
                        item.enDesc = currentitem.enDesc
                    }
                    else {
                        item.enDesc = enDesc
                    }
                    if (sorting === '') {
                        item.sorting = currentitem.sorting
                    }
                    else {
                        item.sorting = sorting
                    }
                }
            })
        }


        toggleClose()


    }
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
                    type="submit">
                    <div className="modal-item-Digital-header">
                        Add New Menu
                        <div onClick={() => resetForm()}>
                            <CloseIcon className="modal-item-Digital-close" />
                        </div>
                    </div>
                    <div className="modal-item-Digital-body">

                        <div className="modal-item-Digital-desc">
                            Menu Name*
                            <input
                                id="desc"
                                defaultValue={currentitem.menuName}
                                onChange={(e) => setMenuName(e.target.value)}
                                required
                                placeholder="Menu Name"
                                className="modal-item-desc-input"
                            />
                        </div>

                        <div className="modal-item-Digital-desc">
                            EN Name*
                            <input
                                defaultValue={currentitem.enName}
                                onChange={(e) => setEnName(e.target.value)}
                                required
                                placeholder="EN Name"
                                className="modal-item-desc-input"
                            />
                        </div>

                        <div className="modal-item-Digital-desc">
                            Menu Description
                            <input
                                defaultValue={currentitem.menuDesc}
                                onChange={(e) => setMenuDesc(e.target.value)}
                                placeholder="Menu description"
                                className="modal-item-desc-Digital-input"
                            />
                        </div>
                        <div className="modal-item-Digital-desc">
                            EN Description
                            <input
                                defaultValue={currentitem.enDesc}
                                onChange={(e) => setEnDescription(e.target.value)}
                                placeholder="EN Description"
                                className="modal-item-desc-Digital-input"
                            />

                        </div>

                        <div className="modal-item-Digital-desc">
                            sorting
                            <input
                                defaultValue={currentitem.sorting}
                                type="number"
                                onChange={(e) => setSorting(e.target.value)}
                                placeholder="sorting"
                                className="modal-item-price-Digital-input"
                            />

                        </div>

                        <div className="modal-spacer"></div>


                    </div>
                    <div className="modal-item-Digital-footer">
                        <input
                            type="submit"
                            value="Edit"
                            onClick={() => updateItem(currentitem.groupId)}
                            className="modal-item-save"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalMenuEdit;
