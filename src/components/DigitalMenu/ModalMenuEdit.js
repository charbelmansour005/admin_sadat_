import React, { useState, useEffect } from "react";
import "../../styles/Digital.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../global/globalvars";
import Groups from "../../models/Groups";

const ModalMenuEdit = ({
    mod,
    mountedStyle,
    toggleClose,
    unmountedStyle,
    downStyle,
    upStyle,
    currentitem,
    handleSubmit

}) => {
    const [menuName, setMenuName] = useState("");
    const [enName, setEnName] = useState("");
    const [menuDesc, setMenuDesc] = useState("");
    const [enDesc, setEnDescription] = useState("");
    const [sorting, setSorting] = useState("");
    const { QRMenu } = useSelector(
        (state) => state.postReducer
    );

    var db = require('../../global/globalfunctions')
    let updateItem = (groupId) => {
        if (Menu.groupCategory.length > 0) {
            Menu.groupCategory.map((item) => {
                if (item.categoryid === groupId) {
                    if (enName === '') {
                        item.nameEN = currentitem.nameEN
                    }
                    else {
                        item.nameEN = enName
                    }

                    if (menuDesc === '') {
                        item.description = currentitem.description
                    }
                    else {
                        item.description = menuDesc
                    }

                    if (sorting === '') {
                        item.sort = currentitem.sort
                    }
                    else {
                        item.sort = sorting
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

    let updateAll = (e) => {
        sendUpdatedGroup();
        handleSubmit(e);
        resetForm()
    }
    let sendUpdatedGroup = () => {
        const apiUrl = "http://localhost:3002/api/DigitalMenu/sendGroup"
        var group = Object.create(Groups)
        group.mode = "w";
        group.cusotmerid = currentitem.cusotmerid;
        group.branchid = "1";

        group.categoryid = currentitem.categoryid;
        if (enName === "") {
            group.nameEN = currentitem.nameEN
        }
        else {
            group.nameEN = enName
        }
        group.nameAR = "";
        if (menuDesc === "") {
            group.descpt = currentitem.description
        }
        else {
            group.descpt = menuDesc;
        }
        if (sorting === "") {
            group.sort = currentitem.sort
        }
        else {
            group.sort = sorting;
        }

        group.images = "";
        group.search = ""
        fetch(apiUrl, {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(group)
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
                    onSubmit={(e)=>updateAll(e)}
                    type="submit">
                    <div className="modal-item-Digital-header">
                        Add New Menu
                        <div onClick={() => resetForm()}>
                            <CloseIcon className="modal-item-Digital-close" />
                        </div>
                    </div>
                    <div className="modal-item-Digital-body">

                      

                        <div className="modal-item-Digital-desc">
                            EN Name*
                            <input
                                defaultValue={currentitem.nameEN}
                                onChange={(e) => setEnName(e.target.value)}
                                required
                                placeholder="EN Name"
                                className="modal-item-desc-input"
                            />
                        </div>

                        <div className="modal-item-Digital-desc">
                            Menu Description
                            <input
                                defaultValue={currentitem.description}
                                onChange={(e) => setMenuDesc(e.target.value)}
                                placeholder="Menu description"
                                className="modal-item-desc-Digital-input"
                            />
                        </div>
                        <div className="modal-item-Digital-desc">
                            AR Name
                            <input
                                // defaultValue={currentitem.enDesc}
                                onChange={(e) => setEnDescription(e.target.value)}
                                placeholder="EN Description"
                                className="modal-item-desc-Digital-input"
                            />

                        </div>

                        <div className="modal-item-Digital-desc">
                            sorting
                            <input
                                defaultValue={currentitem.sort}
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
                            className="modal-item-save"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalMenuEdit;
