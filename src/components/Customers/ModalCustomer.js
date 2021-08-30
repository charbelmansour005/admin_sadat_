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
  const { catItem } = useSelector((state) => state.postReducer);
  const [pDefinedCat, setPDefinedCat] = useState("");
  const [catName, setCatName] = useState("");
  const [othername, setOtherName] = useState("");
  const [sorting, setSorting] = useState("");
  const [creationDate, setCreationDate] = useState("");
  const [modDate, setModDate] = useState("");

  useEffect(() => {
    getCreatedDate();
    getModificationDate();
  }, []);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  let getCreatedDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return date + "/" + month + "/" + year;
  };
  let getModificationDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hour = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    var completeDateFormat = date + "/" + month + "/" + year;

    setModDate(completeDateFormat);
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
              catItem.length + 1,
              pDefinedCat,
              catName,
              othername,
              sorting,
              creationDate,
              modDate
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
                  required
                  placeholder="First name"
                  className="modal-cust-print-input"
                />
              </div>
              <div className="modal-cust-desc">
                Last Name*
                <input
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
                  type="number"
                  placeholder="Phone number"
                  className="modal-cust-desc-input"
                />
              </div>
              <div className="modal-cust-desc">
                Email
                <input placeholder="Email" className="modal-cust-desc-input" />
              </div>
            </div>
            <div className="modal-cust-price">
              <div className="modal-cust-desc">
                Mobile*
                <input
                  required
                  type="number"
                  placeholder="Mobile"
                  className="modal-cust-desc-input"
                />
              </div>
              <div className="modal-cust-desc">
                Website
                <input
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
