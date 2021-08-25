import React from "react";
import "../../../styles/Divisions.css";
import CloseIcon from "@material-ui/icons/Close";
import AddBoxIcon from "@material-ui/icons/AddBox";

const ModalDivision = ({
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
      className="modal-division-wrapper"
    >
      <div style={mod ? downStyle : upStyle} className="modal-division">
        <form className="modal-division-form" type="submit">
          <div className="modal-division-header">
            Add New Division
            <div onClick={() => toggleClose()}>
              <CloseIcon className="modal-division-close" />
            </div>
          </div>
          <div className="modal-division-body">
            <div className="modal-division-subtitle">General</div>
            <div className="modal-division-price">
              <div className="modal-division-desc">
                Division ID*
                <input
                  required
                  type="number"
                  placeholder="0"
                  className="modal-division-price-input"
                />
              </div>
              <div className="modal-division-desc">
                Division Name*
                <input
                  required
                  placeholder="Division name"
                  className="modal-division-desc-input"
                />
              </div>
              <div className="modal-division-desc">
                Category*
                <select
                  required
                  className="modal-division-function-input"
                  defaultValue={"Select category"}
                >
                  <option value="Select category" disabled>
                    Select category
                  </option>
                  <option className="modal-division-function-option" value="1">
                    1
                  </option>
                  <option className="modal-division-function-option" value="2">
                    2
                  </option>
                  <option className="modal-division-function-option" value="3">
                    3
                  </option>
                </select>
              </div>
              <AddBoxIcon className="add-box" />
            </div>
          </div>
          <div className="modal-division-footer">
            <input type="submit" value="Save" className="modal-division-save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalDivision;
