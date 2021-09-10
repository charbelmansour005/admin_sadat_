import { useState, useEffect } from "react";
import "../../../App.css";
import ModalRole from "./ModalRole";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../../styles/Roles.css";
import TableRole from "./TableRole";
import HeaderRole from "./HeaderRole";
import SearchIcon from "@material-ui/icons/Search";
import ModalEdit from "./ModalEdit";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import { addRole, deleteRole, searchRole, importEmployeeRoles } from "../../../redux/actions";
import { useJsonToCsv } from "react-json-csv";
import Papa from "papaparse";
const Roles = () => {
  const [modal, setModal] = useState(false);
  const [tData, setTData] = useState([]);
  const [sortName, setSortName] = useState("0");
  const [first, setFirst] = useState(true);
  const [currentItem, setCurrentItem] = useState({});
  const [modalEdit, setModalEdit] = useState(false);
  const { roleData } = useSelector((state) => state.postReducer);
  const addRoles = () => dispatch(addRole());
  const deleteRoles = (id) => dispatch(deleteRole(id));
  const searchRoles = (name) => dispatch(searchRole(name));
  const importRoles = (item) => dispatch(importEmployeeRoles(item))
  const dispatch = useDispatch();

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
    setTData(roleData);
  }, [roleData]);
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
      setTData(roleData)
    }
  }

  const handleDelete = (roleId) => {
    roleData.map((item) => {
      if (item.roleId === roleId) {
        deleteRoles(roleId);
      }
    });
    setTData(roleData);
  };

  const handleEdit = (roleId) => {
    roleData.map((item) => {
      if (item.roleId === roleId) {
        setCurrentItem(item);
        setModalEdit(true);
        setModal(false);
        setFirst(true);
      }
    });
    setTData(roleData);
  };

  const sortBy = (sort) => {
    if (sort === "name") {
      if (sortName === "0") {
        setSortName("1");
        setTData((prev) => {
          return prev.sort(GetSortOrder("name"));
        });
      } else if (sortName === "1") {
        setSortName("2");
        setTData((prev) => {
          return prev.sort(GetSortOrder2("name"));
        });
      } else setSortName("0");
    }
  };
  const handleModalSubmit = (
    e,
    roleId,
    name,
    fromTable,
    toTable,
  ) => {
    e.preventDefault();
    let newItem = {

      roleId: roleId,
      name: name,
      fromTable: fromTable,
      toTable: toTable
    };
    roleData.push(newItem);
    setTData(roleData)
    toggleModal();
    e.target.reset();
  };
  const filename = "EmployeeRoles";
  const fields = {
    roleId: "roleId",
    name: "name",
    fromTable: "fromTable",
    toTable: "toTable",

  };
  const data = roleData;
  const { saveAsCsv } = useJsonToCsv();
  const handleFileUpload = (e) => {
    const files = e.target.files;
    if (files.length != 0) {
      Papa.parse(files[0], {
        header: true,
        dynamicTyping: true,
        complete: function (results) {
          if (results.data[0].hasOwnProperty("roleId")) {
            setTData(results.data)
            importRoles(results.data)

            try {
              setTData(results.data)
              importRoles(results.data)

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
      <h1 className="role-title">Roles</h1>
      <div className="role-box">
        <div className="role-search-box">
          <div className="role-search">
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
              className="role-search-text"
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
            <div className="role-add" onClick={() => toggleModal()}>
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
        <div className="role-table">
          <HeaderRole
            name="Name"
            role="Role"
            func="Function"
            sortName={sortName}
            sortBy={sortBy}
          />
          <TransitionGroup className="role-remove-items">
            {tData.map(({ roleId, name }) => (
              <CSSTransition key={roleId} timeout={500} classNames="role-trans">
                <TableRole

                  name={name}
                  roleId={roleId}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
      {!first ? (
        <ModalRole
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
export default Roles;
