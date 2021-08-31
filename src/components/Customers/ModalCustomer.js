import React, { useEffect, useState } from "react";
import "../../styles/Customers.css";
import CloseIcon from "@material-ui/icons/Close";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useDispatch, useSelector } from "react-redux";
const ModalCustomer = ({
  mod,
  mountedStyle,
  toggleClose,
  downStyle,
  unmountedStyle,
  upStyle,
  handleSubmit,
}) => {
  const { customerData } = useSelector((state) => state.postReducer);
  const [customerTitle, setCustomerTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [group, setGroup] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [website, setWebsite] = useState('')
  useEffect(() => {

  }, []);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };


  return (
    <div
      style={mod ? mountedStyle : unmountedStyle}
      className="modal-cust-wrapper"
    >
      <div style={mod ? downStyle : upStyle} className="modal-cust">
        <form
          className="modal-cust-form"
          type="submit"
          onSubmit={(e) =>
            handleSubmit(
              e,
              customerData.length + 1,
              customerTitle,
              firstName,
              lastName,
              company,
              group,
              phoneNumber,
              email,
              mobile,
              website
            )
          }
        >
          <div className="modal-cust-header">
            Add New Customer
            <div onClick={() => toggleClose()}>
              <CloseIcon className="modal-cust-close" />
            </div>
          </div>
          <div className="modal-cust-body">
            <div className="modal-cust-subtitle">Profile</div>
            <div className="modal-cust-price">
              <div className="modal-cust-desc">
                <div className="modal-cust-desc-hor">
                  Title*
                  <AddBoxIcon className="add-box-icon" />
                  <div className="tooltip">Add new title</div>
                </div>
                <select
                  required
                  onChange={(e) => setCustomerTitle(e.target.value)}
                  className="modal-cust-print-input"
                  style={{ marginTop: "6px" }}
                  defaultValue=""
                >
                  <option
                    className="modal-cust-function-option"
                    value=""
                    disabled
                  >
                    Select title
                  </option>
                  <option className="modal-cust-function-option" value="1">
                    Mr.
                  </option>
                  <option className="modal-cust-function-option" value="2">
                    Mrs.
                  </option>
                  <option className="modal-cust-function-option" value="3">
                    Ms.
                  </option>
                </select>
              </div>
              <div className="modal-cust-desc">
                First Name*
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  placeholder="First name"
                  className="modal-cust-print-input"
                />
              </div>
              <div className="modal-cust-desc">
                Last Name*
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  placeholder="Last name"
                  className="modal-cust-print-input"
                />
              </div>
            </div>
            <div className="modal-cust-price">
              <div className="modal-cust-desc">
                Company
                <input
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company"
                  className="modal-cust-desc-input"
                />
              </div>
              <div className="modal-cust-desc">
                <div className="modal-cust-desc-hor">
                  Group*
                  <AddBoxIcon
                    onClick={() => {
                      openInNewTab("http://localhost:3000/Home#/Groups");
                    }}
                    className="add-box-icon1"
                  />
                  <div className="tooltip1">Add new group</div>
                </div>
                <select
                  onChange={(e) => setGroup(e.target.value)}
                  required
                  style={{ marginTop: "6px" }}
                  className="modal-cust-desc-input"
                  defaultValue=""
                >
                  <option
                    className="modal-cust-function-option"
                    value=""
                    disabled
                  >
                    Select group
                  </option>
                  <option className="modal-cust-function-option" value="1">
                    Group1
                  </option>
                  <option className="modal-cust-function-option" value="2">
                    Group2
                  </option>
                  <option className="modal-cust-function-option" value="3">
                    Group3
                  </option>
                </select>
              </div>
            </div>
            <div className="modal-cust-subtitle">Contacts</div>
            <div className="modal-cust-price">
              <div className="modal-cust-desc">
                Phone number
                <input
                  onChange={(e) => setPhoneNumber(e.target.value
                  )}
                  type="number"
                  placeholder="Phone number"
                  className="modal-cust-desc-input"
                />
              </div>
              <div className="modal-cust-desc">
                Email
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email" className="modal-cust-desc-input" />
              </div>
            </div>
            <div className="modal-cust-price">
              <div className="modal-cust-desc">
                Mobile*
                <input
                  onChange={(e) => setMobile(e.target.value)}
                  required
                  type="number"
                  placeholder="Mobile"
                  className="modal-cust-desc-input"
                />
              </div>
              <div className="modal-cust-desc">
                Website
                <input
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="Website"
                  className="modal-cust-desc-input"
                />
              </div>
            </div>
          </div>
          <div className="modal-cust-footer">
            <input type="submit" value="Save" className="modal-cust-save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalCustomer;
