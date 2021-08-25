import React, { useState, useEffect } from "react";
import "../../../styles/PaymentTypes.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
const ModalPaymentEdit = ({
  mod,
  mountedStyle,
  toggleClose,
  downStyle,
  unmountedStyle,
  currentitem,
  upStyle,
}) => {
  const [paymentDesc, setPaymentDesc] = useState('')
  const [accountnumber, setAccountNumber] = useState('')
  const [type, setType] = useState('')
  const { paymentItem } = useSelector(
    (state) => state.postReducer
  );
  let updatePayment = (paymentId) => {
    if (paymentItem.length > 0) {
      paymentItem.map((item) => {
        if (item.paymentId === paymentId) {
          if (paymentDesc === '') {
            item.name = currentitem.name
          }
          else {
            item.name = paymentDesc
          }

          if (accountnumber === '') {
            item.accountNumber = currentitem.accountNumber
          }
          else {
            item.accountNumber = accountnumber
          }

          if (type === '') {
            item.type = currentitem.type
          }
          else {
            item.type = type
          }
        }
      })
    }


    toggleClose()

  }


  return (
    <div
      style={mod ? mountedStyle : unmountedStyle}
      className="modal-pay-wrapper"
    >
      <div style={mod ? downStyle : upStyle} className="modal-pay">
        <form className="modal-pay-form" type="submit">
          <div className="modal-pay-header">
            Edit Payment Type
            <div onClick={() => toggleClose()}>
              <CloseIcon className="modal-pay-close" />
            </div>
          </div>
          <div className="modal-pay-body">
            <div className="modal-pay-subtitle">General</div>
            <div className="modal-pay-desc">
              Payment Description*
              <input
                onChange={(e) => setPaymentDesc(e.target.value)}
                defaultValue={currentitem.name}
                required
                placeholder="Payment description"
                className="modal-pay-desc-input"
              />
            </div>
            <div className="modal-pay-subtitle">Details</div>
            <div className="modal-pay-price">
              <div className="modal-pay-desc">
                Payment Currency*
                <select required className="modal-pay-function-input">
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
                <select onChange={(e) => setType(e.target.value)} required className="modal-pay-function-input">
                  <option value={currentitem.type} disabled selected defaultValue >
                    {currentitem.type}
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
                <select required className="modal-pay-function-input">
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
                  defaultValue={currentitem.accountNumber}
                  placeholder="Account no"
                  className="modal-pay-desc-input"
                />
              </div>
              <div className="modal-pay-desc">
                Bank Deposit Account Number
                <input
                  placeholder="Bank deposit"
                  className="modal-pay-desc-input"
                />
              </div>
            </div>
            <div className="modal-pay-desc">
              Message on Invoice
              <input
                placeholder="Enter message"
                className="modal-pay-desc-input"
              />
            </div>
          </div>
          <div className="modal-pay-footer">
            <input type="submit" onClick={() => updatePayment(currentitem.paymentId)} value="Edit" className="modal-pay-save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalPaymentEdit;
