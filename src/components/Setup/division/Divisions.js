import { useState, useEffect } from "react";
import "../../../App.css";
import ModalDivision from "./ModalDivision";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../../styles/Divisions.css";
import TableDivision from "./TableDivision";
import HeaderDivision from "./HeaderDivision";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import EditDivisionModal from "./EditDivisionModal";
import {
  addDivisions,
  searchDivision,
  deleteDivisions,
  importDivisionData,
} from "../../../redux/actions";
import { useJsonToCsv } from "react-json-csv";
import Papa from "papaparse";

var dummyData = [];

const Divisions = () => {
  const [modal, setModal] = useState(false);
  const [tData, setTData] = useState([]);
  const [sortName, setSortName] = useState("0");
  const [sortGrp, setSortGrp] = useState("0");
  const [sortCreationDate, setSortCreationDate] = useState("0");
  const [sortLastModificationDate, setSortLastModificationDate] = useState("0");
  const [first, setFirst] = useState(true);
  const [currentItem, setCurrentItem] = useState({});
  const [modalEdit, setModalEdit] = useState(false);
  const dispatch = useDispatch();
  const { divisionItems } = useSelector((state) => state.postReducer);
  const addDivision = () => dispatch(addDivisions());
  const deleteDivision = (id) => dispatch(deleteDivisions(id));
  const searchDivisions = (name) => dispatch(searchDivision(name));
  const importDivision = (item) => dispatch(importDivisionData(item))
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
    setTData(divisionItems);
  }, [divisionItems]);
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
  function GetDateSortOrder(prop) {
    return function (a, b) {
      if (Date.parse(a[prop]) > Date.parse(b[prop])) {
        return 1;
      } else if (Date.parse(a[prop]) < Date.parse(b[prop])) {
        return -1;
      }
      return 0;
    };
  }
  function GetDateSortOrder2(prop) {
    return function (a, b) {
      if (Date.parse(a[prop]) < Date.parse(b[prop])) {
        return 1;
      } else if (Date.parse(a[prop]) > Date.parse(b[prop])) {
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
      setTData(divisionItems)
    }
  }


  const handleDelete = (divisionId) => {
    divisionItems.map((item) => {
      if (item.divisionId === divisionId) {
        deleteDivision(divisionId);
      }
    });
    setTData(divisionItems)
  };
  const handleEdit = (divisionId) => {
    divisionItems.map((item) => {
      if (item.divisionId === divisionId) {
        setCurrentItem(item);
        setModalEdit(true);
        setModal(false);
        setFirst(true);
      }
    });
    setTData(divisionItems)
  };
  const sortBy = (sort) => {
    if (sort === "name") {
      if (sortName === "0") {
        setSortName("1");
        setSortGrp("0");
        setSortCreationDate("0");
        setSortLastModificationDate("0");
        setTData((prev) => {
          return prev.sort(GetSortOrder("name"));
        });
      } else if (sortName === "1") {
        setSortName("2");
        setTData((prev) => {
          return prev.sort(GetSortOrder2("name"));
        });
      } else setSortName("0");
    } else if (sort === "category") {
      if (sortGrp === "0") {
        setSortName("0");
        setSortGrp("1");
        setSortCreationDate("0");
        setSortLastModificationDate("0");
        setTData((prev) => {
          return prev.sort(GetDateSortOrder("category"));
        });
      } else if (sortGrp === "1") {
        setSortGrp("2");
        setTData((prev) => {
          return prev.sort(GetDateSortOrder2("category"));
        });
      } else setSortGrp("0");
    } else if (sort === "creationDate") {
      if (sortCreationDate === "0") {
        setSortName("0");
        setSortGrp("0");
        setSortCreationDate("1");
        setSortLastModificationDate("0");
        setTData((prev) => {
          return prev.sort(GetDateSortOrder("creationDate"));
        });
      } else if (sortCreationDate === "1") {
        setSortCreationDate("2");
        setTData((prev) => {
          return prev.sort(GetDateSortOrder2("creationDate"));
        });
      } else setSortCreationDate("0");
    } else if (sort === "lastModDate") {
      if (sortLastModificationDate === "0") {
        setSortName("0");
        setSortGrp("0");
        setSortCreationDate("0");
        setSortLastModificationDate("1");
        setTData((prev) => {
          return prev.sort(GetDateSortOrder("lastModificationDate"));
        });
      } else if (sortLastModificationDate === "1") {
        setSortLastModificationDate("2");
        setTData((prev) => {
          return prev.sort(GetDateSortOrder2("lastModificationDate"));
        });
      } else setSortLastModificationDate("0");
    }
  };
  const handleModalSubmit = (
    e,
    divisionId,
    divId,
    name,
    category,
    createdData,
    modificationDate
  ) => {
    e.preventDefault();
    let newItem = {

      name: name,
      divisionId: divisionId,
      divId: divId,
      category: category,
      creationDate: createdData,
      lastModificationDate: modificationDate,
    };
    divisionItems.push(newItem);
    console.log(divisionItems)
    setTData(divisionItems)

    toggleModal();
    e.target.reset();
  };

  const filename = "DivisionData";
  const fields = {
    divisionId: "divisionId",
    divId: "divId",
    name: "name",
    category: "category",
    creationDate: "creationDate",
    lastModificationDate: "lastModificationDate",
  };
  const data = divisionItems;
  const { saveAsCsv } = useJsonToCsv();
  const handleFileUpload = (e) => {
    const files = e.target.files;
    if (files.length != 0) {
      Papa.parse(files[0], {
        header: true,
        dynamicTyping: true,
        complete: function (results) {
          if (results.data[0].hasOwnProperty("divisionId")) {
            setTData(results.data)
            importDivision(results.data)

            try {
              setTData(results.data)
              importDivision(results.data)

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
    <div id="App" style={{}}>
      <h1 className="division-title">Divisions</h1>
      <div className="division-box">
        <div className="division-search-box">
          <div className="division-search">
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
              className="division-search-text"
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
            <div className="division-add" onClick={() => toggleModal()}>
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
        <div className="division-table">
          <HeaderDivision
            name="Name"
            category="Category"
            creationDate="Creation Date"
            lastModificationDate="Last Modification Date"
            sortName={sortName}
            sortCreationDate={sortCreationDate}
            sortLastModificationDate={sortLastModificationDate}
            sortGrp={sortGrp}
            sortBy={sortBy}
          />
          <TransitionGroup className="division-remove-items">
            {tData.map(
              ({
                category,
                name,
                divisionId,
                creationDate,
                lastModificationDate,
              }) => (
                <CSSTransition
                  key={divisionId}
                  timeout={500}
                  classNames="division-trans"
                >
                  <TableDivision
                    name={name}
                    divisionId={divisionId}
                    category={category}
                    creationDate={creationDate}
                    lastModificationDate={lastModificationDate}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                </CSSTransition>
              )
            )}
          </TransitionGroup>
        </div>
      </div>
      {!first ? (
        <ModalDivision
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
        <EditDivisionModal
          toggleClose={toggleEditModal}
          mod={modalEdit}
          currentitem={currentItem}
          mountedStyle={mountedStyle}
          unmountedStyle={unmountedStyle}
          downStyle={downStyle}
          upStyle={upStyle}
        />
      ) : null}
    </div>
  );
};
export default Divisions;
