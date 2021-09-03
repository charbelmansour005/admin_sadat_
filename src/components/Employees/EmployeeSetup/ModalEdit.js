import React, { useEffect, useState } from "react";
import "../../../styles/Employees.css";
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
  const { employeeData } = useSelector((state) => state.postReducer);
  const [branchName, setBranchName] = useState('');
  const [empId, setEmpId] = useState('');
  const [empName, setEmpName] = useState('');
  const [expDate, setExpDate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [active, setActive] = useState('');
  const [salesman, setSalesMan] = useState('');
  const [password, setPassword] = useState('');
  const [secPassword, setSecPassword] = useState('');
  const [accessBack, setAccessBack] = useState('');
  const [language, setLanguage] = useState('');
  const [posLoginId, setPosLoginId] = useState('');
  const [posLoginPassword, setPosLoginPassword] = useState('');
  const [func, setFunc] = useState('');
  const [configKey, setConfigKey] = useState('')
  const [config, setConfig] = useState('');
  const [screenAccess, setScreenAccess] = useState('')
  const [mode, setMode] = useState('');
  const [menu, setMenu] = useState('')
  const [drawerPort, setDrawerPort] = useState('');
  const [printType, setPrintType] = useState('')
  const [openCash, setOpenCash] = useState('');
  const [salary, setSalary] = useState('')
  const [overtime, setOvertime] = useState('');
  const [timeStatus, setTimeStatus] = useState('')
  const [driveThrought, setDrive] = useState('');
  const [generateChecklist, setGenerate] = useState('')
  const [deliveryList, setDeliveryList] = useState('');
  const [autoTime, setAutoTime] = useState('')
  const [hideTime, setHideTime] = useState('')


  useEffect(() => { 
    console.log(currentitem)
  }, []);


  let updateEmployee = (employeeId) => {
    if (employeeData.length > 0) {
      employeeData.map((item) => {
        if (item.employeeId === employeeId) {


          if (branchName === "") {
            item.branchName = currentitem.branchName;
          } else {
            item.branchName = branchName;
          }
          if (empId === "") {
            item.empId = currentitem.empId;
          } else {
            item.empId = empId;
          }
          if (empName === "") {
            item.name = currentitem.name;
          } else {
            item.name = empName;
          }
          if (expDate === "") {
            item.expiryDate = currentitem.expiryDate;
          } else {
            item.expiryDate = expDate;
          }
          if (phoneNumber === "") {
            item.phoneNumber = currentitem.phoneNumber;
          } else {
            item.phoneNumber = phoneNumber;
          }
          if (password === "") {
            item.password = currentitem.password;
          } else {
            item.password = password;
          }
          if (secPassword === "") {
            item.secPassword = currentitem.secPassword;
          } else {
            item.secPassword = secPassword;
          }
          if (accessBack === "") {
            item.accessBackOffice = currentitem.accessBackOffice;
          } else {
            item.accessBackOffice = accessBack;
          }
          if (language === "") {
            item.language = currentitem.language;
          } else {
            item.language = language;
          }
          if (posLoginId === "") {
            item.posLoginId = currentitem.posLoginId;
          } else {
            item.posLoginId = posLoginId;
          }
          if (posLoginPassword === "") {
            item.posLoginPassword = currentitem.posLoginPassword;
          } else {
            item.posLoginPassword = posLoginPassword;
          }
          if (func === "") {
            item.func = currentitem.func;
          } else {
            item.func = func;
          }
          if (configKey === "") {
            item.key = currentitem.key;
          } else {
            item.key = configKey;
          }
          if (config === "") {
            item.config = currentitem.config;
          } else {
            item.config = config;
          }
          if (screenAccess === "") {
            item.screenAccess = currentitem.screenAccess;
          } else {
            item.screenAccess = screenAccess;
          }
          if (mode === "") {
            item.mode = currentitem.mode;
          } else {
            item.mode = mode;
          }
          if (menu === "") {
            item.menu = currentitem.menu;
          } else {
            item.menu = menu;
          }
          if (drawerPort === "") {
            item.cashDrawerPort = currentitem.cashDrawerPort;
          } else {
            item.cashDrawerPort = drawerPort;
          }
          if (printType === "") {
            item.printType = currentitem.printType;
          } else {
            item.printType = printType;
          }
          if (salary === "") {
            item.salary = currentitem.salary;
          } else {
            item.salary = salary;
          }
          if (overtime === "") {
            item.overtime = currentitem.overtime;
          } else {
            item.overtime = overtime;
          }
          if (timeStatus === "") {
            item.timeStatus = currentitem.timeStatus;
          } else {
            item.timeStatus = timeStatus;
          }
        }
      });
    }

    toggleClose();
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

        >
          <div className="modal-emp-header">
            Edit Employee
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
                  defaultValue={currentitem.branchName}
                  onChange={(e) => setBranchName(e.target.value)}
                  required
                  placeholder="Branch"
                  className="modal-emp-print-input"
                />
              </div>
              <div className="modal-emp-desc">
                Employee ID
                <input
                  defaultValue={currentitem.empId}
                  onChange={(e) => setEmpId(e.target.value)}
                  placeholder="Employee ID"
                  className="modal-emp-print-input"
                />
              </div>
              <div className="modal-emp-desc">
                Employee Name*
                <input
                  defaultValue={currentitem.name}
                  onChange={(e) => setEmpName(e.target.value)}
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
                <input
                  defaultValue={currentitem.expiryDate}
                  onChange={(e) => setExpDate(e.target.value)}
                  type="date" className="modal-emp-desc-input" />
              </div>
              <div className="modal-emp-desc">
                Phone
                <input
                  defaultValue={currentitem.phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Employee ID"
                  className="modal-emp-desc-input"
                />
              </div>
            </div>
            <div className="modal-emp-price">
              <div className="modal-emp-desc-hor">
                {
                  !currentitem.isActive == '' ? <input onChange={() => currentitem.isActive = ''} defaultChecked type="checkbox" className="modal-check"></input> :
                    <input onChange={() => currentitem.isActive = 'isActive'} type="checkbox" className="modal-check"></input>
                }

                Active
              </div>
              <div className="modal-emp-desc-hor">
                {
                  !currentitem.isSalesMan == '' ? <input onChange={() => currentitem.isSalesMan = ''} defaultChecked type="checkbox" className="modal-check"></input> :
                    <input onChange={() => currentitem.isSalesMan = 'isSalesMan'} type="checkbox" className="modal-check"></input>
                }
                Salesman
              </div>
            </div>
            <div className="modal-emp-price">
              <div className="modal-emp-desc">
                Password
                <input
                  defaultValue={currentitem.password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  className="modal-emp-desc-input"
                />
              </div>
              <div className="modal-emp-desc">
                Sec Password
                <input
                  defaultValue={currentitem.secPassword}
                  onChange={(e) => setSecPassword(e.target.value)}
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
                  onChange={(e) => setAccessBack(e.target.value)}
                  required
                  className="modal-emp-function-input"
                  defaultValue=""
                >
                  {
                    currentitem.accessBackOffice === '' ? <option
                      className="modal-emp-function-option"
                      value=""
                      defaultValue
                      disabled
                    >
                      Select access type
                    </option> : <option
                      className="modal-emp-function-option"
                      value=""
                      selected
                      defaultValue
                      disabled
                    >
                      {currentitem.accessBackOffice}
                    </option>
                  }

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

                  onChange={(e) => setLanguage(e.target.value)}
                  required
                  className="modal-emp-function-input"
                  defaultValue=""
                >
                  {
                    currentitem.language === '' ? <option
                      className="modal-emp-function-option"
                      value=""
                      selected defaultValue
                      disabled
                    >
                      Select language
                    </option> : <option
                      className="modal-emp-function-option"
                      value=""
                      selected
                      defaultValue
                      disabled
                    >
                      {currentitem.language}
                    </option>
                  }

                  <option className="modal-emp-function-option" value="English">
                    English
                  </option>
                  <option className="modal-emp-function-option" value="French">
                    French
                  </option>
                  <option className="modal-emp-function-option" value="Arabic">
                    Arabic
                  </option>
                </select>
              </div>
            </div>
            <div className="modal-emp-subtitle">POS Cloud Login</div>
            <div className="modal-emp-price">
              <div className="modal-emp-desc">
                ID
                <input
                  defaultValue={currentitem.posLoginId}
                  onChange={(e) => setPosLoginId(e.target.value)}
                  placeholder="ID" className="modal-emp-desc-input" />
              </div>
              <div className="modal-emp-desc">
                Password
                <input
                  defaultValue={currentitem.posLoginPassword}
                  onChange={(e) => setPosLoginPassword(e.target.value)}
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
                  onChange={(e) => setFunc(e.target.value)}
                  required
                  className="modal-emp-print-input"
                  defaultValue=""
                >
                  {
                    currentitem.func === '' ? <option
                      className="modal-emp-function-option"
                      value=""
                      selected
                      defaultValue
                      disabled
                    >
                      Select function
                    </option> : <option
                      className="modal-emp-function-option"
                      value=""
                      selected
                      defaultValue
                      disabled
                    >
                      {currentitem.func}
                    </option>
                  }

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
                <input
                  defaultValue={currentitem.key}
                  onChange={(e) => setConfigKey(e.target.value)}
                  placeholder="Key" className="modal-emp-print-input" />
              </div>
              <div className="modal-emp-desc">
                Configuration*
                <select
                  onChange={(e) => setConfig(e.target.value)}
                  required
                  className="modal-emp-print-input"
                  defaultValue=""
                >
                  {
                    currentitem.config === '' ? <option
                      className="modal-emp-function-option"
                      value=""
                      defaultValue
                      selected
                      disabled
                    >
                      Select config
                    </option> : <option
                      className="modal-emp-function-option"
                      value=""
                      defaultValue
                      selected
                      disabled
                    >
                      {currentitem.config}
                    </option>
                  }

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
                  onChange={(e) => setScreenAccess(e.target.value)}
                  required
                  className="modal-emp-print-input"
                  defaultValue=""
                >
                  {
                    currentitem.screenAccess === '' ? <option
                      className="modal-emp-function-option"
                      value=""
                      defaultValue
                      selected
                      disabled
                    >
                      Select access
                    </option> : <option
                      className="modal-emp-function-option"
                      value=""
                      defaultValue
                      selected
                      disabled
                    >
                      {currentitem.screenAccess}
                    </option>
                  }

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
                  onChange={(e) => setMode(e.target.value)}
                  required
                  className="modal-emp-print-input"
                  defaultValue=""
                >
                  {
                    currentitem.mode === '' ? <option
                      className="modal-emp-function-option"
                      value=""
                      selected
                      defaultValue
                      disabled
                    >
                      Select mode
                    </option> : <option
                      className="modal-emp-function-option"
                      value=""
                      selected
                      defaultValue
                      disabled
                    >
                      {currentitem.mode}
                    </option>
                  }

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
                  onChange={(e) => setMenu(e.target.value)}
                  required
                  className="modal-emp-print-input"
                  defaultValue=""
                >
                  {
                    currentitem.menu === '' ? <option
                      className="modal-emp-function-option"
                      value=""
                      defaultValue
                      selected
                      disabled
                    >
                      Select menu
                    </option> : <option
                      className="modal-emp-function-option"
                      value=""
                      disabled
                    >
                      {currentitem.menu}
                    </option>
                  }

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
                <select
                  onChange={(e) => setDrawerPort(e.target.value)}
                  className="modal-emp-desc-input" defaultValue="">
                  {
                    currentitem.cashDrawerPort === '' ? <option
                      className="modal-emp-function-option"
                      value=""
                      selected
                      defaultValue
                      disabled
                    >
                      Select port
                    </option> : <option
                      className="modal-emp-function-option"
                      value=""
                      selected
                      defaultValue
                      disabled
                    >
                      {currentitem.cashDrawerPort}
                    </option>
                  }

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
                <select
                  onChange={(e) => setPrintType(e.target.value)}
                  className="modal-emp-desc-input" defaultValue="">
                  {
                    currentitem.printType === '' ? <option
                      className="modal-emp-function-option"
                      value=""
                      selected
                      defaultValue
                      disabled
                    >
                      Select printer type
                    </option> : <option
                      className="modal-emp-function-option"
                      value=""
                      selected
                      defaultValue
                      disabled
                    >
                      {currentitem.printType}
                    </option>
                  }

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
              {
                !currentitem.openDrawer == '' ? <input onChange={() => currentitem.openDrawer = ''} defaultChecked type="checkbox" className="modal-check"></input> :
                  <input onChange={() => currentitem.openDrawer = 'openCash'} type="checkbox" className="modal-check"></input>
              }
              Open cash drawer
            </div>
            <div className="modal-emp-price">
              <div className="modal-emp-desc">
                Salary
                <input
                  defaultValue={currentitem.salary}
                  onChange={(e) => setSalary(e.target.value)}
                  type="number"
                  placeholder="0"
                  className="modal-emp-print-input"
                />
              </div>
              <div className="modal-emp-desc">
                Overtime %
                <input
                  defaultValue={currentitem.overtime}
                  onChange={(e) => setOvertime(e.target.value)}
                  type="number"
                  placeholder="0"
                  className="modal-emp-print-input"
                />
              </div>
              <div className="modal-emp-desc">
                Hourly or monthly
                <select
                  onChange={(e) => setTimeStatus(e.target.value)}
                  className="modal-emp-print-input" defaultValue="">
                  {
                    currentitem.timeStatus === '' ? <option
                      className="modal-emp-function-option"
                      value=""
                      defaultValue
                      selected
                      disabled
                    >
                      Select h or m
                    </option> : <option
                      className="modal-emp-function-option"
                      value=""
                      defaultValue
                      selected
                      disabled
                    >
                      {currentitem.timeStatus}
                    </option>
                  }

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
                {
                  !currentitem.driveThrought == '' ? <input onChange={() => currentitem.driveThrought = ''} defaultChecked type="checkbox" className="modal-check"></input> :
                    <input onChange={() => currentitem.driveThrought = 'driveThrought'} type="checkbox" className="modal-check"></input>
                }
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
              {
                !currentitem.generateChecklist == '' ? <input onChange={() => currentitem.generateChecklist = ''} defaultChecked type="checkbox" className="modal-check"></input> :
                  <input onChange={() => currentitem.generateChecklist = 'generateCheckList'} type="checkbox" className="modal-check"></input>
              }
              Auto generate checklist
            </div>
            <div className="modal-emp-price">
              <div className="modal-emp-desc-hor1">
                {
                  !currentitem.deliveryList == '' ? <input onChange={() => currentitem.deliveryList = ''} defaultChecked type="checkbox" className="modal-check"></input> :
                    <input onChange={() => currentitem.deliveryList = 'deliveryList'} type="checkbox" className="modal-check"></input>
                }
                Show delivery list only
              </div>
              <div className="modal-emp-desc-hor1">
                {
                  !currentitem.autoTime == '' ? <input onChange={() => currentitem.autoTime = ''} defaultChecked type="checkbox" className="modal-check"></input> :
                    <input onChange={() => currentitem.autoTime = 'autoTime'} type="checkbox" className="modal-check"></input>
                }
                Auto Time + Att
              </div>
              <div className="modal-emp-desc-hor1">
                {
                  !currentitem.hideTime == '' ? <input onChange={() => currentitem.hideTime = ''} defaultChecked type="checkbox" className="modal-check"></input> :
                    <input onChange={() => currentitem.hideTime = 'hideTime'} type="checkbox" className="modal-check"></input>
                }
                Hide in Time Attendance Report
              </div>
            </div>
          </div>
          <div className="modal-emp-footer">
            <input type="submit" value="Edit" onClick={() => updateEmployee(currentitem.employeeId)} className="modal-emp-save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEdit;
