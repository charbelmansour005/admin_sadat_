import React, { useState, useEffect } from "react";
import "../../../styles/VoidReason.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
const VoidEditModal = ({
    mod,
    mountedStyle,
    toggleClose,
    downStyle,
    unmountedStyle,
    currentitem,
    upStyle,
}) => {
    const [voidName, setVoidName] = useState('')
    const { voidItem } = useSelector(
        (state) => state.postReducer
    );
    let updateVoid = (voidId) => {
        if (voidItem.length > 0) {
            voidItem.map((item) => {
                if (item.voidId === voidId) {
                    if (voidName === '') {
                        item.name = currentitem.name
                    }
                    else {
                        item.name = voidName
                    }

                }
            })
        }


        toggleClose()

    }
    return (
        <div
            style={mod ? mountedStyle : unmountedStyle}
            className="modal-void-wrapper"
        >
            <div style={mod ? downStyle : upStyle} className="modal-void">
                <form className="modal-void-form" type="submit">
                    <div className="modal-void-header">
                        Edit Void Reason
                        <div onClick={() => toggleClose()}>
                            <CloseIcon className="modal-void-close" />
                        </div>
                    </div>
                    <div className="modal-void-body">
                        <div className="modal-void-subtitle">General</div>
                        <div className="modal-void-desc">
                            Description*
                            <input
                                defaultValue={currentitem.name}
                                onChange={(e) => setVoidName(e.target.value)}
                                required
                                placeholder="Void description"
                                className="modal-void-desc-input"
                            />
                        </div>


                    </div>
                    <div className="modal-void-footer">
                        <input type="submit" onClick={() => updateVoid(currentitem.voidId)} value="Edit" className="modal-void-save" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VoidEditModal;
