import React from "react";
import "../../../styles/Currency.css";
import CloseIcon from "@material-ui/icons/Close";

const ModalCurrency = ({
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
      className="modal-cur-wrapper"
    >
      <div style={mod ? downStyle : upStyle} className="modal-cur">
        <form className="modal-cur-form" type="submit">
          <div className="modal-cur-header">
            Add New Currency
            <div onClick={() => toggleClose()}>
              <CloseIcon className="modal-cur-close" />
            </div>
          </div>
          <div className="modal-cur-body">
            <div className="modal-cur-subtitle">General</div>
            <div className="modal-cur-price">
              <div className="modal-cur-desc">
                Description*
                <input
                  required
                  placeholder="Currency description"
                  className="modal-cur-desc-input"
                />
              </div>
              <div className="modal-cur-desc">
                Symbol*
                <input
                  required
                  placeholder="Currency symbol"
                  className="modal-cur-price-input"
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

export default ModalCurrency;
