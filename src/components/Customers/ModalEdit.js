import React, { useEffect, useState } from "react";
import "../../styles/Employees.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
const ModalEdit = ({
  mod,
  mountedStyle,
  toggleClose,
  downStyle,
  unmountedStyle,
  upStyle,
  currentitem,
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
  useEffect(() => { }, []);

  let updateCustomer = (customerId) => {
    if (customerData.length > 0) {
      customerData.map((item) => {
        if (item.customerId === customerId)
          if (customerTitle === "") {
            item.title = currentitem.title;
          } else {
            item.title = customerTitle;
          }
        if (firstName === "") {
          item.name = currentitem.name;
        } else {
          item.name = firstName;
        }
        if (lastName === "") {
          item.lastName = currentitem.lastName;
        } else {
          item.lastName = lastName;
        }
        if (company === "") {
          item.company = currentitem.company;
        } else {
          item.company = company;
        }
        if (group === "") {
          item.group = currentitem.group;
        } else {
          item.group = group;
        }
        if (phoneNumber === "") {
          item.phoneNumber = currentitem.phoneNumber;
        } else {
          item.phoneNumber = phoneNumber;
        }
        if (email === "") {
          item.email = currentitem.email;
        } else {
          item.email = email;
        }
        if (mobile === "") {
          item.mobile = currentitem.mobile;
        } else {
          item.mobile = mobile;
        }
        if (website === "") {
          item.website = currentitem.website;
        } else {
          item.website = website;
        }
      });
    }

    toggleClose();
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

        >
          <div className="modal-cust-header">
            Edit Customer
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
                  {/* <AddBoxIcon className="add-box-icon" /> */}
                  <div className="tooltip">Add new title</div>
                </div>
                <select
                  required
                  onChange={(e) => setCustomerTitle(e.target.value)}
                  className="modal-cust-print-input"
                  style={{ marginTop: "6px" }}
                  defaultValue=""
                >
                  {
                    currentitem.title === '' ? <option
                      className="modal-cust-function-option"
                      value=""
                      defaultValue
                      selected
                      disabled
                    >
                      Select title
                    </option> : <option
                      className="modal-cust-function-option"
                      value=""
                      defaultValue
                      selected
                      disabled
                    >
                      {currentitem.title}
                    </option>
                  }

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
                  defaultValue={currentitem.name}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  placeholder="First name"
                  className="modal-cust-print-input"
                />
              </div>
              <div className="modal-cust-desc">
                Last Name*
                <input
                  defaultValue={currentitem.lastName}
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
                  defaultValue={currentitem.company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company"
                  className="modal-cust-desc-input"
                />
              </div>
              <div className="modal-cust-desc">
                <div className="modal-cust-desc-hor">
                  Group*
                  {/* <AddBoxIcon
                    onClick={() => {
                      openInNewTab("http://localhost:3000/Home#/Groups");
                    }}
                    className="add-box-icon1"
                  />
                  <div className="tooltip1">Add new group</div> */}
                </div>
                <select
                  onChange={(e) => setGroup(e.target.value)}
                  required
                  style={{ marginTop: "6px" }}
                  className="modal-cust-desc-input"
                  defaultValue=""
                >
                  {
                    currentitem.group === '' ? <option
                      className="modal-cust-function-option"
                      value=""
                      selected
                      defaultValue
                      disabled
                    >
                      Select group
                    </option> : <option
                      className="modal-cust-function-option"
                      value=""
                      selected
                      defaultValue
                      disabled
                    >
                      {currentitem.group}
                    </option>
                  }

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
                  defaultValue={currentitem.phoneNumber}
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
                  defaultValue={currentitem.email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email" className="modal-cust-desc-input" />
              </div>
            </div>
            <div className="modal-cust-price">
              <div className="modal-cust-desc">
                Mobile*
                <input
                  defaultValue={currentitem.mobile}
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
                  defaultValue={currentitem.website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="Website"
                  className="modal-cust-desc-input"
                />
              </div>
            </div>
          </div>
          <div className="modal-cust-footer">
            <input type="submit" value="Save" onClick={()=>updateCustomer(currentitem.customerId)} className="modal-cust-save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEdit;
