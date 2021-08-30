import React, { useEffect, useState } from "react";
import "../../../styles/Employees.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
const ModalEmployee = ({
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
      className="modal-emp-wrapper"
    >
      <div style={mod ? downStyle : upStyle} className="modal-emp">
        <form
          className="modal-emp-form"
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
          <div className="modal-emp-header">
            Add New Employee
            <div onClick={() => toggleClose()}>
              <CloseIcon className="modal-emp-close" />
            </div>
          </div>
          <div className="modal-emp-body">
            <div className="modal-emp-subtitle">General</div>
            <div className="modal-emp-price">
              <div className="modal-emp-desc">
                Branch*
                <input
                  required
                  placeholder="Branch"
                  className="modal-emp-print-input"
                />
              </div>
              <div className="modal-emp-desc">
                Employee ID
                <input
                  placeholder="Employee ID"
                  className="modal-emp-print-input"
                />
              </div>
              <div className="modal-emp-desc">
                Employee Name*
                <input
                  required
                  placeholder="Employee name"
                  className="modal-emp-print-input"
                />
              </div>
            </div>
            <div className="modal-spacer"></div>
            <div className="modal-emp-price">
              <div className="modal-emp-desc">
                Expiry Date
                <input type="date" className="modal-emp-desc-input" />
              </div>
              <div className="modal-emp-desc">
                Phone
                <input
                  placeholder="Employee ID"
                  className="modal-emp-desc-input"
                />
              </div>
            </div>
            <div className="modal-emp-price">
              <div className="modal-emp-desc-hor">
                <input type="checkbox" className="modal-check"></input>
                Active
              </div>
              <div className="modal-emp-desc-hor">
                <input type="checkbox" className="modal-check"></input>
                Salesman
              </div>
            </div>
            <div className="modal-emp-price">
              <div className="modal-emp-desc">
                Password
                <input
                  type="password"
                  placeholder="Password"
                  className="modal-emp-desc-input"
                />
              </div>
              <div className="modal-emp-desc">
                Sec Password
                <input
                  type="password"
                  placeholder="Sec password"
                  className="modal-emp-desc-input"
                />
              </div>
            </div>
            <div className="modal-emp-price">
              <div className="modal-emp-desc">
                Access back office*
                <select
                  required
                  className="modal-emp-function-input"
                  defaultValue=""
                >
                  <option
                    className="modal-emp-function-option"
                    value=""
                    disabled
                  >
                    Select access type
                  </option>
                  <option className="modal-emp-function-option" value="1">
                    No access
                  </option>
                  <option className="modal-emp-function-option" value="2">
                    Limited access
                  </option>
                  <option className="modal-emp-function-option" value="3">
                    Full access
                  </option>
                </select>
              </div>
              <div className="modal-emp-desc">
                Language*
                <select
                  required
                  className="modal-emp-function-input"
                  defaultValue=""
                >
                  <option
                    className="modal-emp-function-option"
                    value=""
                    disabled
                  >
                    Select language
                  </option>
                  <option className="modal-emp-function-option" value="1">
                    English
                  </option>
                  <option className="modal-emp-function-option" value="2">
                    French
                  </option>
                  <option className="modal-emp-function-option" value="3">
                    Arabic
                  </option>
                </select>
              </div>
            </div>
            <div className="modal-emp-subtitle">POS Cloud Login</div>
            <div className="modal-emp-price">
              <div className="modal-emp-desc">
                ID
                <input placeholder="ID" className="modal-emp-desc-input" />
              </div>
              <div className="modal-emp-desc">
                Password
                <input
                  type="password"
                  placeholder="Password"
                  className="modal-emp-desc-input"
                />
              </div>
            </div>
            <div className="modal-emp-subtitle">Config</div>
            <div className="modal-emp-price">
              <div className="modal-emp-desc">
                Functions*
                <select
                  required
                  className="modal-emp-print-input"
                  defaultValue=""
                >
                  <option
                    className="modal-emp-function-option"
                    value=""
                    disabled
                  >
                    Select function
                  </option>
                  <option className="modal-emp-function-option" value="1">
                    Head server
                  </option>
                  <option className="modal-emp-function-option" value="2">
                    Head server
                  </option>
                  <option className="modal-emp-function-option" value="3">
                    Head server
                  </option>
                </select>
              </div>
              <div className="modal-emp-desc">
                Key
                <input placeholder="Key" className="modal-emp-print-input" />
              </div>
              <div className="modal-emp-desc">
                Configuration*
                <select
                  required
                  className="modal-emp-print-input"
                  defaultValue=""
                >
                  <option
                    className="modal-emp-function-option"
                    value=""
                    disabled
                  >
                    Select config
                  </option>
                  <option className="modal-emp-function-option" value="1">
                    Manager
                  </option>
                  <option className="modal-emp-function-option" value="2">
                    Server
                  </option>
                  <option className="modal-emp-function-option" value="3">
                    Owner
                  </option>
                </select>
              </div>
            </div>
            <div className="modal-emp-price">
              <div className="modal-emp-desc">
                Access to screen*
                <select
                  required
                  className="modal-emp-print-input"
                  defaultValue=""
                >
                  <option
                    className="modal-emp-function-option"
                    value=""
                    disabled
                  >
                    Select access
                  </option>
                  <option className="modal-emp-function-option" value="1">
                    Main 1
                  </option>
                  <option className="modal-emp-function-option" value="2">
                    Main 2
                  </option>
                  <option className="modal-emp-function-option" value="3">
                    Main 3
                  </option>
                </select>
              </div>
              <div className="modal-emp-desc">
                Modes*
                <select
                  required
                  className="modal-emp-print-input"
                  defaultValue=""
                >
                  <option
                    className="modal-emp-function-option"
                    value=""
                    disabled
                  >
                    Select mode
                  </option>
                  <option className="modal-emp-function-option" value="1">
                    Mode 1
                  </option>
                  <option className="modal-emp-function-option" value="2">
                    Mode 2
                  </option>
                  <option className="modal-emp-function-option" value="3">
                    Mode 3
                  </option>
                </select>
              </div>
              <div className="modal-emp-desc">
                Menus*
                <select
                  required
                  className="modal-emp-print-input"
                  defaultValue=""
                >
                  <option
                    className="modal-emp-function-option"
                    value=""
                    disabled
                  >
                    Select menu
                  </option>
                  <option className="modal-emp-function-option" value="1">
                    Staff 1
                  </option>
                  <option className="modal-emp-function-option" value="2">
                    Staff 2
                  </option>
                  <option className="modal-emp-function-option" value="3">
                    Staff 3
                  </option>
                </select>
              </div>
            </div>
            <div className="modal-emp-price">
              <div className="modal-emp-desc">
                Cash drawer port
                <select className="modal-emp-desc-input" defaultValue="">
                  <option
                    className="modal-emp-function-option"
                    value=""
                    disabled
                  >
                    Select port
                  </option>
                  <option className="modal-emp-function-option" value="1">
                    Drawer 1
                  </option>
                  <option className="modal-emp-function-option" value="2">
                    Drawer 2
                  </option>
                  <option className="modal-emp-function-option" value="3">
                    Drawer 3
                  </option>
                </select>
              </div>
              <div className="modal-emp-desc">
                Printer Type
                <select className="modal-emp-desc-input" defaultValue="">
                  <option
                    className="modal-emp-function-option"
                    value=""
                    disabled
                  >
                    Select printer type
                  </option>
                  <option className="modal-emp-function-option" value="1">
                    Printer 1
                  </option>
                  <option className="modal-emp-function-option" value="2">
                    Printer 2
                  </option>
                  <option className="modal-emp-function-option" value="3">
                    Printer 3
                  </option>
                </select>
              </div>
            </div>
            <div className="modal-emp-desc-hor">
              <input type="checkbox" className="modal-check"></input>
              Open cash drawer
            </div>
            <div className="modal-emp-price">
              <div className="modal-emp-desc">
                Salary
                <input
                  type="number"
                  placeholder="0"
                  className="modal-emp-print-input"
                />
              </div>
              <div className="modal-emp-desc">
                Overtime %
                <input
                  type="number"
                  placeholder="0"
                  className="modal-emp-print-input"
                />
              </div>
              <div className="modal-emp-desc">
                Hourly or monthly
                <select className="modal-emp-print-input" defaultValue="">
                  <option
                    className="modal-emp-function-option"
                    value=""
                    disabled
                  >
                    Select h or m
                  </option>
                  <option className="modal-emp-function-option" value="1">
                    Hourly
                  </option>
                  <option className="modal-emp-function-option" value="2">
                    Monthly
                  </option>
                </select>
              </div>
            </div>
            <div className="modal-emp-subtitle">Drive through</div>
            <div className="modal-emp-desc">
              <div className="modal-emp-desc-hor">
                <input type="checkbox" className="modal-check"></input>
                Drive through
              </div>
            </div>
            <div className="modal-emp-desc">
              <input className="modal-emp-price-input" />
            </div>
            <div className="modal-emp-desc">
              <input className="modal-emp-price-input" />
            </div>
            <div className="modal-emp-desc">
              <input className="modal-emp-price-input" />
            </div>
            <div className="modal-emp-desc-hor">
              <input type="checkbox" className="modal-check"></input>
              Auto generate checklist
            </div>
            <div className="modal-emp-price">
              <div className="modal-emp-desc-hor1">
                <input type="checkbox" className="modal-check"></input>
                Show delivery list only
              </div>
              <div className="modal-emp-desc-hor1">
                <input type="checkbox" className="modal-check"></input>
                Auto Time + Att
              </div>
              <div className="modal-emp-desc-hor1">
                <input type="checkbox" className="modal-check"></input>
                Hide in Time Attendance Report
              </div>
            </div>
          </div>
          <div className="modal-emp-footer">
            <input type="submit" value="Save" className="modal-emp-save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEmployee;
