import React, { useState, useEffect } from "react";
import "../../styles/Digital.css";
import CloseIcon from "@material-ui/icons/Close";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Draggable from 'react-draggable'
import { useDispatch, useSelector } from "react-redux";
import { getAllGroups } from '../../redux/actions'
import Groups from "../../models/Groups";
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
    const [imageSelected, setImageSelected] = useState(null)
    const [file, setFile] = useState(null);
    const [branch, setBranch] = useState('')
    const { userInfo, groupCategory } = useSelector(
        (state) => state.postReducer
    );
    var dispatch = useDispatch();
    const getGroups = (item) => dispatch(getAllGroups(item));
    axios.defaults.withCredentials = true;
    var db = require('../../global/globalfunctions')
    useEffect(() => {
        console.log(userInfo)
    }, []);

    let resetForm = () => {
        document.getElementById("add-item-form").reset();
        setFile(null)
        toggleClose()
    }
    let postAll = (e) => {
        sendGroups();
        uploadImage()
        handleSubmit(e)


    }

    const handleChange = (event) => {
        setImageSelected(event.target.files[0])
        setFile(URL.createObjectURL(event.target.files[0]))
       
    }


    let uploadImage = () => {
        if (imageSelected !== null) {
            const formData = new FormData();
            formData.append("file", imageSelected)
            fetch("http://localhost:5000/upload", {
                mode: "cors",
                method: "POST",
                body: formData
            }).then((response) => {
                console.log(response)
            })
        }

    }
    let sendGroups = () => {
        const apiUrl = "http://localhost:3002/api/DigitalMenu/sendGroup"
        var group = Object.create(Groups)
        group.mode = "w";
        group.cusotmerid = userInfo.userid;
        group.branchid = "1";
        group.categoryid = "0";
        group.nameEN = enName;
        group.nameAR = enDesc;
        group.descpt = menuDesc;
        group.sort = sorting;
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
                    }>
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
                            AR Name
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
                        <div className="modal-item-Digital-desc">
                            branch *
                            <select
                                onChange={(e) => setBranch(e.target.value)}
                                required
                                className="modal-item-function-input"
                                defaultValue={""}
                            >
                                <option value="" disabled>
                                    Select Branch
                                </option>
                                <option value="1">
                                    kousba
                                </option>
                                <option value="Amioun">
                                    Amioun
                                </option>
                                <option value="beirut">
                                    beirut
                                </option>
                            </select>
                        </div>
                        <div className="item-right">
                            <label className="item-file-input">
                                Choose Image
                                <input
                                    name="file" type="file" accept="image/*" onChange={handleChange}
                                />
                            </label>
                        </div>

                        {
                            file !== null ? <div style={{ display: 'flex', marginLeft: 10, marginTop: 10 }}>
                                <img width={300} height={300} src={file}></img>
                            </div> : null
                        }


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

export default ModalMenu;
