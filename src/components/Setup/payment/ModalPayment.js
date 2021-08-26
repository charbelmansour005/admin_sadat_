import React, { useState, useEffect } from "react";
import "../../../styles/PaymentTypes.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
const ModalPayment = ({
  mod,
  mountedStyle,
  toggleClose,
  downStyle,
  unmountedStyle,
  upStyle,
  handleSubmit
}) => {
  const { paymentItem } = useSelector(
    (state) => state.postReducer
  );
  const [paymentName, setPaymentName] = useState('')
  const [paymentCurrency, setPaymentCurrency] = useState('')
  const [paymentType, setPaymentType] = useState('')
  const [paymentStatus, setPaymentStatus] = useState('')
  const [paymentCommission, setPaymentCommission] = useState('')
  const [accountnumber, setAccountNumber] = useState('')
  const [bdAccountNumber, setBdAccountNumber] = useState('')
  const [message, setMessage] = useState('')
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
      className="modal-pay-wrapper"
    >
      <div style={mod ? downStyle : upStyle} className="modal-pay">
        <form className="modal-pay-form" type="submit" onSubmit={(e) =>
          handleSubmit(
            e,
            paymentItem.length + 1,
            paymentName,
            paymentCurrency,
            paymentType,
            paymentStatus,
            paymentCommission,
            accountnumber,
            bdAccountNumber,
            message,
            creationDate,
            modDate
          )
        }>
          <div className="modal-pay-header">
            Add New Payment Type
            <div onClick={() => toggleClose()}>
              <CloseIcon className="modal-pay-close" />
            </div>
          </div>
          <div className="modal-pay-body">
            <div className="modal-pay-subtitle">General</div>
            <div className="modal-pay-desc">
              Payment Description*
              <input
                required
                onChange={(e) => setPaymentName(e.target.value)}
                placeholder="Payment description"
                className="modal-pay-desc-input"
              />
            </div>
            <div className="modal-pay-subtitle">Details</div>
            <div className="modal-pay-price">
              <div className="modal-pay-desc">
                Payment Currency*
                <select onChange={(e) => setPaymentCurrency(e.target.value)} required className="modal-pay-function-input">
                  <option value="" disabled selected defaultValue hidden>
                    Select currency
                  </option>
                  <option className="modal-pay-function-option" value="1">
                    1
                  </option>
                  <option className="modal-pay-function-option" value="2">
                    2
                  </option>
                  <option className="modal-pay-function-option" value="3">
                    3
                  </option>
                </select>
              </div>
              <div className="modal-pay-desc">
                Type*
                <select onChange={(e) => setPaymentType(e.target.value)} required className="modal-pay-function-input">
                  <option value="" disabled selected defaultValue hidden>
                    Select type
                  </option>
                  <option className="modal-pay-function-option" value="1">
                    1
                  </option>
                  <option className="modal-pay-function-option" value="2">
                    2
                  </option>
                  <option className="modal-pay-function-option" value="3">
                    3
                  </option>
                </select>
              </div>
            </div>
            <div className="modal-pay-price">
              <div className="modal-pay-desc">
                Status*
                <select onChange={(e) => setPaymentStatus(e.target.value)} required className="modal-pay-function-input">
                  <option value="" disabled selected defaultValue hidden>
                    Select status
                  </option>
                  <option className="modal-pay-function-option" value="1">
                    1
                  </option>
                  <option className="modal-pay-function-option" value="2">
                    2
                  </option>
                  <option className="modal-pay-function-option" value="3">
                    3
                  </option>
                </select>
              </div>
              <div className="modal-pay-desc">
                Commission
                <input
                  onChange={(e) => setPaymentCommission(e.target.value)}
                  placeholder="Commission"
                  className="modal-pay-desc-input"
                />
              </div>
            </div>
            <div className="modal-pay-price">
              <div className="modal-pay-desc">
                Account Number
                <input
                  onChange={(e) => setAccountNumber(e.target.value)}
                  placeholder="Account no"
                  className="modal-pay-desc-input"
                />
              </div>
              <div className="modal-pay-desc">
                Bank Deposit Account Number
                <input
                  onChange={(e) => setBdAccountNumber(e.target.value)}
                  placeholder="Bank deposit"
                  className="modal-pay-desc-input"
                />
              </div>
            </div>
            <div className="modal-pay-desc">
              Message on Invoice
              <input
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter message"
                className="modal-pay-desc-input"
              />
            </div>
          </div>
          <div className="modal-pay-footer">
            <input type="submit" value="Save" className="modal-pay-save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalPayment;
