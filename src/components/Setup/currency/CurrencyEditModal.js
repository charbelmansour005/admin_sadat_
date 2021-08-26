import React, { useState, useEffect } from "react";
import "../../../styles/Currency.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
const CurrencyEditModal = ({
  mod,
  mountedStyle,
  toggleClose,
  downStyle,
  unmountedStyle,
  currentitem,
  upStyle,
}) => {
  const [currencyName, setCurrencyName] = useState('')
  const { currencyItems } = useSelector(
    (state) => state.postReducer
  );
  let updateCurrency = (currencyId) => {
    if (currencyItems.length > 0) {
      currencyItems.map((item) => {
        if (item.currencyId === currencyId) {
          if (currencyName === '') {
            item.name = currentitem.name
          }
          else {
            item.name = currencyName
          }

        }
      })
    }


    toggleClose()

  }
  return (
    <div
      style={mod ? mountedStyle : unmountedStyle}
      className="modal-cur-wrapper"
    >
      <div style={mod ? downStyle : upStyle} className="modal-cur">
        <form className="modal-cur-form" type="submit">
          <div className="modal-cur-header">
            Edit Currency
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
                  defaultValue={currentitem.name}
                  onChange={(e) => setCurrencyName(e.target.value)}
                  required
                  placeholder="Currency description"
                  className="modal-cur-desc-input"
                />
              </div>
              {/* <div className="modal-cur-desc">
                Symbol*
                <input
                  required
                  placeholder="Currency symbol"
                  className="modal-cur-price-input"
                />
              </div> */}
            </div>
          </div>
          <div className="modal-cur-footer">
            <input type="submit" value="Edit" onClick={() => updateCurrency(currentitem.currencyId)} className="modal-cur-save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CurrencyEditModal;
