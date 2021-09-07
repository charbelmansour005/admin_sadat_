import React, { useState, useEffect } from "react";
import "../../../styles/Currency.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import AddBoxIcon from "@material-ui/icons/AddBox";
const EditCustomerCategory = ({
    mod,
    mountedStyle,
    toggleClose,
    downStyle,
    unmountedStyle,
    currentitem,
    upStyle,
}) => {

    const [category, setCategory] = useState('')

    const { customerCategory } = useSelector(
        (state) => state.postReducer
    );
    let updateCurrency = (customerCategoryId) => {
        if (customerCategory.length > 0) {
            customerCategory.map((item) => {
                if (item.customerCategoryId === customerCategoryId) {
                    if (category === '') {
                        item.name = currentitem.name
                    }
                    else {
                        item.name = category
                    }

                }
            })
        }


        toggleClose()

    }
    const openInNewTab = (url) => {
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
    };
    let resetForm = () => {
        toggleClose()
        document.getElementById("edit-customer-category-form").reset()

    }
    return (
        <div
            style={mod ? mountedStyle : unmountedStyle}
            className="modal-cur-wrapper"
        >
            <div style={mod ? downStyle : upStyle} style={{ width: '40%', justifyContent: 'space-between', display: 'flex', backgroundColor: 'white', flexDirection: 'column' }}>
                <form id="edit-customer-category-form" className="modal-cur-form" type="submit" onSubmit={() => updateCurrency(currentitem.customerCategoryId)}
                >
                    <div className="modal-cur-header">
                        Edit Customer Group
                        <div onClick={() => resetForm()}>
                            <CloseIcon className="modal-cur-close" />
                        </div>
                    </div>
                    <div className="modal-cur-body">
                        <div className="modal-cur-subtitle">General</div>
                        <div className="modal-cur-price">
                            <div className="modal-cur-desc">
                                Group Name*
                                <input
                                    defaultValue={currentitem.name}
                                    onChange={(e) => setCategory(e.target.value)}
                                    required
                                    placeholder="Group description"
                                    className="modal-cur-desc-input"
                                />
                            </div>


                        </div>


                    </div>
                    <div className="modal-cur-footer">
                        <input type="submit" value="Edit" className="modal-cur-save" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditCustomerCategory;
