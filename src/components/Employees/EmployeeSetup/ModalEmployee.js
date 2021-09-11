import React, { useEffect, useState } from "react";
import "../../../styles/Employees.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
const ModalEmployee = ({
  mod,
  mountedStyle,
  toggleClose,
  downStyle,
  unmountedStyle,
  upStyle,
  handleSubmit,
}) => {
  const { employeeData, roleData } = useSelector((state) => state.postReducer);
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
  const [role, setRole] = useState('')
  useEffect(() => {
    getCreatedDate();
    getModificationDate();
    console.log(roleData)
  }, []);

  let getCreatedDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return date + "/" + month + "/" + year;
  };
  let resetForm = () => {
    toggleClose()
    document.getElementById("add-employee-form").reset()
  }
  let getModificationDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hour = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    var completeDateFormat = date + "/" + month + "/" + year;


  };
  return (
    <div
      style={mod ? mountedStyle : unmountedStyle}
      className="modal-emp-wrapper"
    >
      <div style={mod ? downStyle : upStyle} className="modal-emp">
        <form
          id="add-employee-form"
          className="modal-emp-form"
          type="submit"
          onSubmit={(e) =>
            handleSubmit(
              e,
              role,
              branchName,
              uuidv4(),
              empId,
              empName,
              expDate,
              phoneNumber,
              active,
              salesman,
              password,
              secPassword,
              accessBack,
              language,
              posLoginId,
              posLoginPassword,
              func,
              configKey,
              config,
              screenAccess,
              mode,
              menu,
              drawerPort,
              printType,
              openCash,
              salary,
              overtime,
              timeStatus,
              driveThrought,
              generateChecklist,
              deliveryList,
              autoTime,
              hideTime,

            )
          }
        >
          <div className="modal-emp-header">
            Add New Employee
            <div onClick={() => resetForm()}>
              <CloseIcon className="modal-emp-close" />
            </div>
          </div>
          <div className="modal-emp-body">
            <div className="modal-emp-subtitle">General</div>
            <div className="modal-emp-price">
              <div className="modal-emp-desc">
                Branch*
                <input
                  onChange={(e) => setBranchName(e.target.value)}
                  required
                  placeholder="Branch"
                  className="modal-emp-print-input"
                />
              </div>
              <div className="modal-emp-desc">
                Employee ID
                <input
                  type="number"
                  onChange={(e) => setEmpId(e.target.value)}
                  placeholder="Employee ID"
                  className="modal-emp-print-input"
                />
              </div>
              <div className="modal-emp-desc">
                Employee Name*
                <input
                  onChange={(e) => setEmpName(e.target.value)}
                  required
                  placeholder="Employee name"
                  className="modal-emp-print-input"
                />
              </div>

            </div>
            <div className="modal-emp-desc">
              Role*
              <select
                onChange={(e) => console.log(e.target.value)}
                required
                className="modal-emp-function-input"
               
              >
                <option defaultValue selected disabled>Select Role</option>
                {
                  
                  roleData.map(item =>
                    <option defaultValue={item.name} key={item.roleId} value={item.name}>{item.name}
                    </option>)
                }

              </select>
            </div>
            <div className="modal-spacer"></div>
            <div className="modal-emp-price">
              <div className="modal-emp-desc">
                Expiry Date
                <input
                  onChange={(e) => setExpDate(e.target.value)}
                  type="date" className="modal-emp-desc-input" />
              </div>
              <div className="modal-emp-desc">
                Phone
                <input
                  type="number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Employee ID"
                  className="modal-emp-desc-input"
                />
              </div>
            </div>
            <div className="modal-emp-price">
              <div className="modal-emp-desc-hor">
                <input value="isActive" onChange={(e) => setActive(e.target.value)} type="checkbox" className="modal-check"></input>
                Active
              </div>
              <div className="modal-emp-desc-hor">
                <input value="isSalesman" onChange={(e) => setSalesMan(e.target.value)} type="checkbox" className="modal-check"></input>
                Salesman
              </div>
            </div>
            <div className="modal-emp-price">
              <div className="modal-emp-desc">
                Password
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  className="modal-emp-desc-input"
                />
              </div>
              <div className="modal-emp-desc">
                Sec Password
                <input
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
                  onChange={(e) => setLanguage(e.target.value)}
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
                  type="number"
                  onChange={(e) => setPosLoginId(e.target.value)}
                  placeholder="ID" className="modal-emp-desc-input" />
              </div>
              <div className="modal-emp-desc">
                Password
                <input
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
                <input

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
                  onChange={(e) => setScreenAccess(e.target.value)}
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
                  onChange={(e) => setMode(e.target.value)}
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
                  onChange={(e) => setMenu(e.target.value)}
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
                <select
                  onChange={(e) => setDrawerPort(e.target.value)}
                  className="modal-emp-desc-input" defaultValue="">
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
                <select
                  onChange={(e) => setPrintType(e.target.value)}
                  className="modal-emp-desc-input" defaultValue="">
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
              <input value="openCash" onChange={(e) => setOpenCash(e.target.value)} type="checkbox" className="modal-check"></input>
              Open cash drawer
            </div>
            <div className="modal-emp-price">
              <div className="modal-emp-desc">
                Salary
                <input
                  onChange={(e) => setSalary(e.target.value)}
                  type="number"
                  placeholder="0"
                  className="modal-emp-print-input"
                />
              </div>
              <div className="modal-emp-desc">
                Overtime %
                <input
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
                <input value="driveThrought" onChange={(e) => setDrive(e.target.value)} type="checkbox" className="modal-check"></input>
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
              <input value="generateCheckList" onChange={(e) => setGenerate(e.target.value)} type="checkbox" className="modal-check"></input>
              Auto generate checklist
            </div>
            <div className="modal-emp-price">
              <div className="modal-emp-desc-hor1">
                <input value="deliveryList" onChange={(e) => setDeliveryList(e.target.value)} type="checkbox" className="modal-check"></input>
                Show delivery list only
              </div>
              <div className="modal-emp-desc-hor1">
                <input value="autoTime" onChange={(e) => setAutoTime(e.target.value)} type="checkbox" className="modal-check"></input>
                Auto Time + Att
              </div>
              <div className="modal-emp-desc-hor1">
                <input value="hideTime" onChange={(e) => setHideTime(e.target.value)} type="checkbox" className="modal-check"></input>
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
