import React, { useEffect, useState } from "react";

import "../../../styles/Categories.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
const ModalEdit = ({ mod, mountedStyle, toggleClose, downStyle, unmountedStyle, upStyle, currentitem }) => {
    const { catItem } = useSelector(
        (state) => state.postReducer
    );
    const [catName, setCatName] = useState('')
    const [othercatName, setOtherCat] = useState('')
    const [sorting, setSorting] = useState('')
    useEffect(() => {

    }, []);

    let updateCategory = (catId) => {
        if (catItem.length > 0) {
            catItem.map((item) => {
                if (item.catId === catId) {
                    if (catName === '') {
                        item.name = currentitem.name
                    }
                    else {
                        item.name = catName
                    }
                    if (othercatName === '') {
                        item.othername = currentitem.othername
                    }
                    else {

                        item.othername = othercatName
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



    return (
        <div style={mod ? mountedStyle : unmountedStyle} className="modal-cat-wrapper">
            <div style={mod ? downStyle : upStyle} className="modal-cat">
                <form className="modal-cat-form" type="submit">
                    <div className="modal-cat-header">
                        Edit Category
                        <div onClick={() => toggleClose()}>
                            <CloseIcon className="modal-cat-close" />
                        </div>
                    </div>
                    <div className="modal-cat-body">
                        <div className="modal-cat-subtitle">General</div>

                        <div className="modal-spacer"></div>
                        <div className="modal-cat-desc">
                            Category*
                            <input
                                defaultValue={currentitem.name}
                                required
                                onChange={(e) => setCatName(e.target.value)}
                                placeholder="Category name"
                                className="modal-cat-desc-input"
                            />
                        </div>
                        <div className="modal-cat-desc">
                            Other name*
                            <input
                                defaultValue={currentitem.othername}
                                onChange={(e) => setOtherCat(e.target.value)}
                                required
                                placeholder="Other name"
                                className="modal-cat-desc-input"
                            />
                        </div>
                        <div className="modal-cat-desc">
                            Sorting*
                            <input
                                defaultValue={currentitem.sorting}
                                onChange={(e) => setSorting(e.target.value)}
                                required
                                placeholder="Sorting"
                                className="modal-cat-desc-input"
                            />
                        </div>
                    </div>
                    <div className="modal-cat-footer">
                        <input value="Edit" onClick={() => updateCategory(currentitem.catId)} className="modal-cat-save" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalEdit;
