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
    const [branchName, setbranchName] = useState('')
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
                    if (branchName === '') {
                        item.branchName = currentitem.branchName
                    }
                    else {
                        item.branchName = branchName
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

                        <div className="modal-void-subtitle">Branch Exceptions</div>
                        <div className="modal-void-desc">
                            <div className="modal-void-desc-hor">
                                {
                                    !currentitem.branchName == '' ? <input onChange={() => currentitem.branchName = ''} defaultChecked type="checkbox" className="modal-check"></input> :
                                        <input onChange={() => currentitem.branchName = 'branch1'} type="checkbox" className="modal-check"></input>
                                }

                                Branch 1
                            </div>
                            <div className="modal-void-desc-hor">
                                <input type="checkbox" className="modal-check"></input>


                                Branch 2
                            </div>
                            <div className="modal-void-desc-hor">
                                <input type="checkbox" className="modal-check"></input>



                                Branch 3
                            </div>
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
