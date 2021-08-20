import React from "react";
import "../../../styles/VoidReason.css";
import CloseIcon from "@material-ui/icons/Close";

const ModalVoid = ({
  mod,
  mountedStyle,
  toggleClose,
  downStyle,
  unmountedStyle,
  upStyle,
}) => {
  return (
    <div
      style={mod ? mountedStyle : unmountedStyle}
      className="modal-void-wrapper"
    >
      <div style={mod ? downStyle : upStyle} className="modal-void">
        <form className="modal-void-form" type="submit">
          <div className="modal-void-header">
            Add New Payment Type
            <div onClick={() => toggleClose()}>
              <CloseIcon className="modal-void-close" />
            </div>
          </div>
          <div className="modal-void-body">
            <div className="modal-void-subtitle">General</div>
            <div className="modal-void-desc">
              Description*
              <input
                required
                placeholder="Void description"
                className="modal-void-desc-input"
              />
            </div>
            <div className="modal-void-subtitle">Branch Exceptions</div>
            <div className="modal-void-desc">
              <div className="modal-void-desc-hor">
                <input type="checkbox" className="modal-check"></input>
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
            <input type="submit" value="Save" className="modal-void-save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalVoid;
