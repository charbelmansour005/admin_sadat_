import { useState, useEffect } from "react";
import "../../../App.css";
import ModalGroup from "./ModalGroup";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../../styles/Groups.css";
import TableGroup from "./TableGroup";
import HeaderGroup from "./HeaderGroup";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import EditGroupModal from "./EditGroupModal";
import { addGroups, searchGroups, deleteGroups, importGroupData } from "../../../redux/actions";
import { useJsonToCsv } from "react-json-csv";
import Papa from "papaparse";

var dummyData = [];

const Groups = () => {
  const [modal, setModal] = useState(false);
  const [tData, setTData] = useState([]);
  const [sortName, setSortName] = useState("0");
  const [sortDiv, setSortDiv] = useState("0");
  const [sortCreationDate, setSortCreationDate] = useState("0");
  const [sortLastModificationDate, setSortLastModificationDate] = useState("0");
  const [first, setFirst] = useState(true);
  const [currentItem, setCurrentItem] = useState({});
  const [modalEdit, setModalEdit] = useState(false);
  const dispatch = useDispatch();
  const { groupItems, salesItems } = useSelector((state) => state.postReducer);
  const addGroup = () => dispatch(addGroups());
  const deleteGroup = (id) => dispatch(deleteGroups(id));
  const searchGroup = (name) => dispatch(searchGroups(name));
  const importGroups = (item) => dispatch(importGroupData(item))
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
    setTData(groupItems);
  }, []);
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
      setTData(groupItems)
    }
  }



  const handleDelete = (groupId) => {
    groupItems.map((item) => {
      if (item.groupId === groupId) {
        deleteGroup(groupId);
      }
    });
    setTData(groupItems)
  };
  const handleEdit = (groupId) => {
    groupItems.map((item) => {
      if (item.groupId === groupId) {
        setCurrentItem(item);
        setModalEdit(true);
        setModal(false);
        setFirst(true);
      }
    });
    setTData(groupItems)
  };
  const sortBy = (sort) => {
    if (sort === "name") {
      if (sortName === "0") {
        setSortName("1");
        setSortDiv("0");
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
    } else if (sort === "division") {
      if (sortDiv === "0") {
        setSortName("0");
        setSortDiv("1");
        setSortCreationDate("0");
        setSortLastModificationDate("0");
        setTData((prev) => {
          return prev.sort(GetDateSortOrder("division"));
        });
      } else if (sortDiv === "1") {
        setSortDiv("2");
        setTData((prev) => {
          return prev.sort(GetDateSortOrder2("division"));
        });
      } else setSortDiv("0");
    } else if (sort === "creationDate") {
      if (sortCreationDate === "0") {
        setSortName("0");
        setSortDiv("0");
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
        setSortDiv("0");
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
    name,
    groupId,
    othername,
    division,
    tax1,
    tax2,
    tax3,
    tax4,
    tax5,
    service,
    discount,
    revenue,
    expense,
    pdaDesc,
    pdasorting,
    pdaHideMenu,
    groupRemark,
    createdData,
    modificationDate
  ) => {
    e.preventDefault();
    let newItem = {
      name: name,
      groupId: groupId,
      othername: othername,
      division: division,
      tax1: tax1,
      tax2: tax2,
      tax3: tax3,
      tax4: tax4,
      tax5: tax5,
      service: service,
      discount: discount,
      revenue: revenue,
      expense: expense,
      pdaDesc: pdaDesc,
      pdasorting: pdasorting,
      pdaHideMenu: pdaHideMenu,
      groupRemark: groupRemark,
      creationDate: createdData,
      lastModificationDate: modificationDate,
    };
    groupItems.push(newItem);
    setTData(groupItems)
    console.log(groupItems);

    toggleModal();
    e.target.reset();
  };

  const filename = "GroupData";
  const fields = {
    groupId: "groupId",
    name: "name",
    othername:"othername",
    division: "division",
    tax1:"tax1",
    tax2:"tax2",
    tax3:"tax3",
    tax4:"tax4",
    tax5:"tax5",
    service:"service",
    discount:"discount",
    revenue:"revenue",
    expense:"expense",
    pdaDesc:"pdaDesc",
    pdasorting:"pdasorting",
    pdaHideMenu:"pdaHideMenu",
    groupRemark:"groupRemark",
    creationDate: "creationDate",
    lastModificationDate: "lastModificationDate",
  };
  const data = groupItems;
  const { saveAsCsv } = useJsonToCsv();
  const handleFileUpload = (e) => {
    const files = e.target.files;
    if (files.length != 0) {
      Papa.parse(files[0], {
        header: true,
        dynamicTyping: true,
        complete: function (results) {
          if (results.data[0].hasOwnProperty("groupId")) {
            setTData(results.data)
            importGroups(results.data)

            try {
              setTData(results.data)
              importGroups(results.data)

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
      <h1 className="grp-title">Groups</h1>
      <div className="grp-box">
        <div className="grp-search-box">
          <div className="grp-search">
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
              className="grp-search-text"
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
            <div className="grp-add" onClick={() => toggleModal()}>
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
        <div className="grp-table">
          <HeaderGroup
            name="Name"
            division="Division"
            creationDate="Creation Date"
            lastModificationDate="Last Modification Date"
            sortName={sortName}
            sortCreationDate={sortCreationDate}
            sortLastModificationDate={sortLastModificationDate}
            sortDiv={sortDiv}
            sortBy={sortBy}
          />
          <TransitionGroup className="grp-remove-items">
            {tData.map(
              ({
                division,
                name,
                groupId,
                creationDate,
                lastModificationDate,
              }) => (
                <CSSTransition
                  key={groupId}
                  timeout={500}
                  classNames="grp-trans"
                >
                  <TableGroup
                    name={name}
                    division={division}
                    groupId={groupId}
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
        <ModalGroup
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
        <EditGroupModal
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
export default Groups;
