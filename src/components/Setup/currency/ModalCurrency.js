import React, { useState, useEffect } from "react";
import "../../../styles/Currency.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
const ModalCurrency = ({
  mod,
  mountedStyle,
  toggleClose,
  downStyle,
  handleSubmit,
  unmountedStyle,
  upStyle,
}) => {
  const { currencyItems } = useSelector(
    (state) => state.postReducer
  );
  const [currencyName, setCurrencyName] = useState('')
  const [symbol, setSymbol] = useState('')
  const [creationDate, setCreationDate] = useState('')
  const [modDate, setModDate] = useState('')
  useEffect(() => {
    getCreatedDate()
    getModificationDate()
  }, []);

  let getCreatedDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hour = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    var completeDateFormat = date + "/" + month + "/" + year;
    setCreationDate(completeDateFormat)


  }
  let resetForm=()=>{
    toggleClose()
    document.getElementById("add-currency-form").reset()

  }
  let getModificationDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hour = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    var completeDateFormat = date + "/" + month + "/" + year;

    setModDate(completeDateFormat)
  }
  return (
    <div
      style={mod ? mountedStyle : unmountedStyle}
      className="modal-cur-wrapper"
    >
      <div style={mod ? downStyle : upStyle} className="modal-cur">
        <form id="add-currency-form" className="modal-cur-form" type="submit" onSubmit={(e) =>
          handleSubmit(
            e,
            uuidv4(),
            currencyName,
            symbol,
            creationDate,
            modDate
          )
        }>
          <div className="modal-cur-header">
            Add New Currency
            <div onClick={() => resetForm()}>
              <CloseIcon className="modal-cur-close" />
            </div>
          </div>
          <div className="modal-cur-body">
            <div className="modal-cur-subtitle">General</div>
            <div className="modal-cur-price">
              <div className="modal-cur-desc">
                Description*
                <input
                  onChange={(e) => setCurrencyName(e.target.value)}
                  required
                  placeholder="Currency description"
                  className="modal-cur-desc-input"
                />
              </div>
              <div className="modal-cur-desc">
                Symbol*
                <input
                  onChange={(e) => setSymbol(e.target.value)}
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
