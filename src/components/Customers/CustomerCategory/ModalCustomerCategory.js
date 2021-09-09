import React, { useState, useEffect } from "react";
import "../../../styles/CustomerCategory.css";
import CloseIcon from "@material-ui/icons/Close";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

const ModalCustomerGroup = ({
    mod,
    mountedStyle,
    toggleClose,
    downStyle,
    handleSubmit,
    unmountedStyle,
    upStyle,
}) => {
    const { customerCategory } = useSelector(
        (state) => state.postReducer
    );

    const [category, setCategory] = useState('')

    useEffect(() => {

    }, []);


    let resetForm = () => {
        toggleClose()
        document.getElementById("add-customer-category-form").reset()

    }
    const openInNewTab = (url) => {
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
    };

    return (
        <div
            style={mod ? mountedStyle : unmountedStyle}
            className="modal-cur-wrapper"
        >
            <div style={mod ? downStyle : upStyle} style={{ justifyContent: 'space-between', display: 'flex', backgroundColor: 'white', flexDirection: 'column' }}>
                <form id="add-customer-category-form" className="modal-cur-form" type="submit" onSubmit={(e) =>
                    handleSubmit(
                        e,
                        uuidv4(),
                        category,

                    )
                } >
                    <div className="modal-cur-header">
                        Add New Customer Category
                        <div onClick={() => resetForm()}>
                            <CloseIcon className="modal-cur-close" />
                        </div>
                    </div>
                    <div className="modal-cur-body">
                        <div className="modal-cur-subtitle">General</div>
                        <div className="modal-cur-price">
                            <div className="modal-cur-desc">
                                Category Name*
                                <input
                                    onChange={(e) => setCategory(e.target.value)}
                                    required
                                    placeholder="Group description"
                                    className="modal-cur-desc-input"
                                />
                            </div>


                        </div>


                    </div>
                    <div className="modal-cur-footer">
                        <input type="submit" value="Save" className="modal-cur-save" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalCustomerGroup;
