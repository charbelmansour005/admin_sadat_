import React, { useState, useEffect } from "react";
import "../../styles/Digital.css";
import CloseIcon from "@material-ui/icons/Close";
import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';
import Draggable from 'react-draggable'

const ModalMenu = ({
    m,
    mod,
    mountedStyle,
    toggleClose,
    unmountedStyle,
    downStyle,
    upStyle,
    handleSubmit,
}) => {
    const [menuName, setMenuName] = useState("");
    const [enName, setEnName] = useState("");
    const [menuDesc, setMenuDesc] = useState("");
    const [enDesc, setEnDescription] = useState("");
    const [sorting, setSorting] = useState("");
    const [imageSelected, setImageSelected] = useState('')


    useEffect(() => {

    }, []);


    let resetForm = () => {
        document.getElementById("add-item-form").reset();
        toggleClose()
    }
    let postAll = (e) => {

        handleSubmit(e, uuidv4(), menuName, enName, menuDesc, enDesc, sorting)

    }


    const uploadImage = () => {
        const formData = new FormData();

        formData.append("file", imageSelected)
        formData.append("upload_preset", "xw4yrog1")
        Axios.post("http://192.34.109.55/BackEnd/images/", formData)

            .then((response) => {
                console.log(response)
            })
    }

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
                                onChange={(e) => setMenuName(e.target.value)}
                                required
                                placeholder="Menu Name"
                                className="modal-item-desc-input"
                            />
                        </div>

                        <div className="modal-item-Digital-desc">
                            EN Name*
                            <input
                                onChange={(e) => setEnName(e.target.value)}
                                required
                                placeholder="EN Name"
                                className="modal-item-desc-input"
                            />
                        </div>

                        <div className="modal-item-Digital-desc">
                            Menu Description
                            <input
                                onChange={(e) => setMenuDesc(e.target.value)}
                                placeholder="Menu description"
                                className="modal-item-desc-Digital-input"
                            />
                        </div>
                        <div className="modal-item-Digital-desc">
                            EN Description
                            <input
                                onChange={(e) => setEnDescription(e.target.value)}
                                placeholder="EN Description"
                                className="modal-item-desc-Digital-input"
                            />

                        </div>

                        <div className="modal-item-Digital-desc">
                            sorting
                            <input
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
                            value="Save"
                            className="modal-item-save"
                        />
                    </div>
                </form>
                <div className="modal-item-Digital-desc">
                    <input accept="image/*" type="file" onChange={(event) => setImageSelected(event.target.files[0])}  ></input>
                </div>
                <div className="modal-item-Digital-desc">
                    <button onClick={uploadImage}>Upload Image</button>
                </div>
            </div>
        </div>
        // </Draggable>
    );
};

export default ModalMenu;
