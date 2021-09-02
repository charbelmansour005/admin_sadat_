import { useState, useEffect } from "react";
import "../../../App.css";
import ModalVoid from "./ModalVoid";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../../styles/VoidReason.css";
import TableVoid from "./TableVoid";
import HeaderVoid from "./HeaderVoid";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import VoidEditModal from "./VoidEditModal";
import { addVoid, searchVoid, deleteVoid, importVoidData } from "../../../redux/actions";
import { useJsonToCsv } from "react-json-csv";
import Papa from "papaparse";

const VoidReason = () => {
  const [modal, setModal] = useState(false);
  const [tData, setTData] = useState([]);
  const [sortName, setSortName] = useState("0");
  const [first, setFirst] = useState(true);
  const [currentItem, setCurrentItem] = useState({})
  const [modalEdit, setModalEdit] = useState(false)
  const dispatch = useDispatch();
  const { voidItem } = useSelector(
    (state) => state.postReducer
  );
  const addVoids = () => dispatch(addVoid());
  const deleteVoids = (id) => dispatch(deleteVoid(id));
  const searchVoids = (name) => dispatch(searchVoid(name));
  const importVoidReasons = (item) => dispatch(importVoidData(item))
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
  function toggleModal() {
    setModal((prev) => !prev);
    setFirst(false);
  }
  function toggleEditModal() {
    setModalEdit((prev) => !prev);
    setModalEdit(false)
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
      setTData(voidItem)
    }
  }

  useEffect(() => {
    setTData(voidItem);
    return () => { };
  }, []);


  const handleDelete = (voidId) => {
    voidItem.map((item) => {
      if (item.voidId === voidId) {
        deleteVoids(voidId)
      }
    })
    setTData(voidItem);

  };
  const handleEdit = (voidId) => {

    voidItem.map((item) => {
      if (item.voidId === voidId) {
        setCurrentItem(item)
        setModalEdit(true)
        setModal(false)
        setFirst(true)
      }
    })
    setTData(voidItem);
  }

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
    voidId,
    name,
    branchName,
    createdDate,
    modificationDate
  ) => {
    e.preventDefault();
    let newItem = {

      voidId: voidId,
      name: name,
      branchName: branchName,
      creationDate: createdDate,
      lastModificationDate: modificationDate,
    };
    voidItem.push(newItem)
    setTData(voidItem)
    toggleModal();
    e.target.reset();
  };

  const filename = "VoidReasons";
  const fields = {
    voidId: "voidId",
    name: "name",
    branchName: "branchName",
    creationDate: "creationDate",
    lastModificationDate: "lastModificationDate",
  };
  const data = voidItem;
  const { saveAsCsv } = useJsonToCsv();
  const handleFileUpload = (e) => {
    const files = e.target.files;
    if (files.length != 0) {
      Papa.parse(files[0], {
        header: true,
        dynamicTyping: true,
        complete: function (results) {
          if (results.data[0].hasOwnProperty("voidId")) {
            setTData(results.data)
            importVoidReasons(results.data)
           
            try {
              setTData(results.data)
              importVoidReasons(results.data)
             
            } catch (error) {
              alert(error);
            }
          }
        },
      });
    }
  };

  return (
    <div id="App" style={{ width: "100%", height: "100%" }}>
      <h1 className="void-title">Void Reason</h1>
      <div className="void-box">
        <div className="void-search-box">
          <div className="void-search">
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
              className="void-search-text"
              placeholder="Search..."
              onChange={handleSearch}
            />
          </div>
          <div>
            <select className="branch" defaultValue="All branches">
              <option>All branches</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
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
            <div className="void-add" onClick={() => setModal(true)}>
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
        <div className="void-table">
          <HeaderVoid name="Name" sortName={sortName} sortBy={sortBy} />
          <TransitionGroup className="void-remove-items">
            {tData.map(({ name, voidId }) => (
              <CSSTransition key={voidId} timeout={500} classNames="void-trans">
                <TableVoid
                  voidId={voidId}
                  handleEdit={handleEdit}
                  name={name}
                  handleDelete={handleDelete} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
      {!first ? (
        <ModalVoid
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
        <VoidEditModal
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
export default VoidReason;
