import { useState, useEffect } from "react";
import "../../../App.css";
import ModalEmployee from "./ModalEmployee";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../../styles/Employees.css";
import TableEmployee from "./TableEmployee";
import HeaderEmployee from "./HeaderEmployee";
import SearchIcon from "@material-ui/icons/Search";
import ModalEdit from "./ModalEdit";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import { addEmployees, deleteEmployees, searchEmployees, importEmployeesData } from "../../../redux/actions";
import { useJsonToCsv } from "react-json-csv";
import Papa from "papaparse";
import { v4 as uuidv4 } from 'uuid';
const Employees = () => {
  const [modal, setModal] = useState(false);
  const [tData, setTData] = useState([]);
  const [sortName, setSortName] = useState("0");
  const [sortRole, setSortRole] = useState("0");
  const [sortFunc, setSortFunc] = useState("0");
  const [first, setFirst] = useState(true);
  const [currentItem, setCurrentItem] = useState({});
  const [modalEdit, setModalEdit] = useState(false);

  const { employeeData } = useSelector((state) => state.postReducer);
  const addEmployee = () => dispatch(addEmployees());
  const deleteEmp = (id) => dispatch(deleteEmployees(id));
  const searchEmp = (name) => dispatch(searchEmployees(name));
  const dispatch = useDispatch();
  const importEmployees = (item) => dispatch(importEmployeesData(item))
  useEffect(() => {

    document.addEventListener("keydown", (e) => {
      e.key === "Escape" && setModal(false);
      if (e.key === "+") {
        setModal(true);
        setFirst(false);
      }
    });
    return () => {
      document.removeEventListener("keydown", (e) => e);
    };
  }, [modal]);
  useEffect(() => {
    if (modal) {
      document.getElementById("search-text").tabIndex = -1;
    } else {
      document.getElementById("search-text").tabIndex = 1;
    }
  }, [modal]);
  useEffect(() => {
    setTData(employeeData);
  }, [employeeData]);
  function toggleModal() {
    setModal((prev) => !prev);
    setFirst(false);
  }
  function toggleEditModal() {
    setModalEdit((prev) => !prev);
    setModalEdit(false);
  }

  const mountedStyle = { animation: "inAnimation 500ms ease-in" };
  const unmountedStyle = {
    animation: "outAnimation 500ms ease-out",
    animationFillMode: "forwards",
  };
  const downStyle = { animation: "downAnimation 300ms ease-in" };
  const upStyle = {
    animation: "upAnimation 300ms ease-in ",
    animationFillMode: "forwards",
  };
  function GetSortOrder(prop) {
    return function (a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    };
  }
  function GetSortOrder2(prop) {
    return function (a, b) {
      if (a[prop] < b[prop]) {
        return 1;
      } else if (a[prop] > b[prop]) {
        return -1;
      }
      return 0;
    };
  }
  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];

    result = tData.filter((data) => {
      return data.name.toLowerCase().includes(value);
    });
    setTData(result);
    if (value === '') {
      setTData(employeeData)
    }
  }

  const handleDelete = (empId) => {
    employeeData.map((item) => {
      if (item.employeeId === empId) {
        deleteEmp(empId);
      }
    });
    setTData(employeeData)
  };

  const handleEdit = (empId) => {
    employeeData.map((item) => {
      if (item.employeeId === empId) {
        setCurrentItem(item);
        setModalEdit(true);
        setModal(false);
        setFirst(true);
      }
    });
    setTData(employeeData)
  };

  const sortBy = (sort) => {
    if (sort === "name") {
      if (sortName === "0") {
        setSortName("1");
        setSortRole("0");
        setSortFunc("0");
        setTData((prev) => {
          return prev.sort(GetSortOrder("name"));
        });
      } else if (sortName === "1") {
        setSortName("2");
        setTData((prev) => {
          return prev.sort(GetSortOrder2("name"));
        });
      } else setSortName("0");
    } else if (sort === "role") {
      if (sortRole === "0") {
        setSortName("0");
        setSortRole("1");
        setSortFunc("0");
        setTData((prev) => {
          return prev.sort(GetSortOrder("role"));
        });
      } else if (sortRole === "1") {
        setSortRole("2");
        setTData((prev) => {
          return prev.sort(GetSortOrder2("role"));
        });
      } else setSortRole("0");
    } else if (sort === "func") {
      if (sortFunc === "0") {
        setSortName("0");
        setSortRole("0");
        setSortFunc("1");
        setTData((prev) => {
          return prev.sort(GetSortOrder("func"));
        });
      } else if (sortFunc === "1") {
        setSortFunc("2");
        setTData((prev) => {
          return prev.sort(GetSortOrder2("func"));
        });
      } else setSortFunc("0");
    }
  };
  const handleModalSubmit = (
    e,
    branchName,
    employeeId,
    empId,
    name,
    expiryDate,
    phoneNumber,
    isActive,
    isSalesMan,
    password,
    secPassword,
    accessBackOffice,
    language,
    posLoginId,
    posLoginPassword,
    func,
    key,
    config,
    screenAccess,
    mode,
    menu,
    cashDrawerPort,
    printerType,
    openDrawer,
    salary,
    overtime,
    timeStatus,
    driveThrought,
    generateChecklist,
    deliveryList,
    autoTime,
    hideTime,

  ) => {
    e.preventDefault();
    let newItem = {
      employeeId: employeeId,
      branchName: branchName,
      empId: empId,
      name: name,
      expiryDate: expiryDate,
      phoneNumber: phoneNumber,
      isActive: isActive,
      isSalesMan: isSalesMan,
      password: password,
      secPassword: secPassword,
      accessBackOffice: accessBackOffice,
      language: language,
      posLoginId: posLoginId,
      posLoginPassword: posLoginPassword,
      func: func,
      key: key,
      config: config,
      screenAccess: screenAccess,
      mode: mode,
      menu: menu,
      cashDrawerPort: cashDrawerPort,
      printerType: printerType,
      openDrawer: openDrawer,
      salary: salary,
      overtime: overtime,
      timeStatus: timeStatus,
      driveThrought: driveThrought,
      generateChecklist: generateChecklist,
      deliveryList: deliveryList,
      autoTime: autoTime,
      hideTime: hideTime
    };
    employeeData.push(newItem);
    console.log(employeeData)
    setTData(employeeData)
    toggleModal();
    e.target.reset();
  };
  const filename = "EmployeesData";
  const fields = {
    employeeId: "employeeId",
    branchName:"branchName",
    empId: "empId",
    name: "name",
    lastName: "lastName",
    expiryDate: "expiryDate",
    phoneNumber: "phoneNumber",
    salary: "salary",
    isActive: "isActive",
    isSalesMan: "isSalesMan",
    password: "password",
    secPassword: "secPassword",
    accessBackOffice: "accessBackOffice",
    language: "language",
    posLoginId: "posLoginId",
    posLoginPassword: "posLoginPassword",
    key: "key",
    config: "config",
    screenAccess: "screenAccess",
    mode: "mode",
    menu: "menu",
    cashDrawerPort: "cashDrawerPort",
    printerType: "printerType",
    openDrawer: "openDrawer",
    overtime: "overtime",
    timeStatus: "timeStatus",
    driveThrought: "driveThrought",
    generateChecklist: "generateChecklist",
    deliveryList: "deliveryList",
    autoTime: "autoTime",
    hideTime: "hideTime",
    role: 'role',
    func: 'func',
    creationDate: "creationDate",
    lastModificationDate: "lastModificationDate",
  };
  const data = employeeData;
  const { saveAsCsv } = useJsonToCsv();
  const handleFileUpload = (e) => {
    const files = e.target.files;
    if (files.length != 0) {
      Papa.parse(files[0], {
        header: true,
        dynamicTyping: true,
        complete: function (results) {
          if (results.data[0].hasOwnProperty("employeeId")) {
            setTData(results.data)
            importEmployees(results.data)

            try {
              setTData(results.data)
              importEmployees(results.data)

            } catch (error) {
              alert(error);
            }
          }
        },
      });
    }
  };
  // width: "100%", height: "100%"
  return (
    <div id="App" style={{ }}>
      <h1 className="emp-title">Employees</h1>
      <div className="emp-box">
        <div className="emp-search-box">
          <div className="emp-search">
            <SearchIcon
              style={{
                marginLeft: "2px",
                color: "rgba(0, 0, 0, 0.7)",
                height: "25px",
                width: "25px",
                alignSelf: "center",
                justifySelf: "center",
              }}
            />
            <input
              id="search-text"
              type="text"
              className="emp-search-text"
              placeholder="Search..."
              onChange={handleSearch}
            />
          </div>
          <div className="item-right">
            <label className="item-file-input">
              Import
              <input
                accept=".csv,.xlsx,.xls"
                type="file"
                onInput={(e) => handleFileUpload(e)}
              />
            </label>
            <label
              onClick={() => saveAsCsv({ data, fields, filename })}
              className="item-file-input"
            >
              Export
            </label>
            <div className="emp-add" onClick={() => toggleModal()}>
              <AddIcon
                style={{
                  marginLeft: "2px",
                  color: "white",
                  height: "25px",
                  width: "25px",
                  alignSelf: "center",
                  justifySelf: "center",
                }}
              />
              <p>New</p>
            </div>
          </div>

        </div>
        <div className="emp-table">
          <HeaderEmployee
            name="Employee Name"
            role="Role"
            func="Function"
            sortName={sortName}
            sortRole={sortRole}
            sortFunc={sortFunc}
            sortBy={sortBy}
          />
          <TransitionGroup className="emp-remove-items">
            {tData.map(({ employeeId, empId, name, role, func }) => (
              <CSSTransition key={employeeId} timeout={500} classNames="emp-trans">
                <TableEmployee
                  employeeId={employeeId}
                  name={name}
                  empId={empId}
                  role={role}
                  func={func}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
      {!first ? (
        <ModalEmployee
          toggleClose={toggleModal}
          mod={modal}
          handleSubmit={handleModalSubmit}
          mountedStyle={mountedStyle}
          unmountedStyle={unmountedStyle}
          downStyle={downStyle}
          upStyle={upStyle}
        />
      ) : null}

      {modalEdit ? (
        <ModalEdit
          toggleClose={toggleEditModal}
          mod={modalEdit}
          currentitem={currentItem}
          mountedStyle={mountedStyle}
          unmountedStyle={unmountedStyle}
          downStyle={downStyle}
          upStyle={upStyle}
        ></ModalEdit>
      ) : null}
    </div>
  );
};
export default Employees;
