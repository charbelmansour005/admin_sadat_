import { useState, useEffect } from "react";
import "../../../App.css";
import ModalCategory from "./ModalCategory";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../../styles/Categories.css";
import TableCategory from "./TableCategory";
import HeaderCategory from "./HeaderCategory";
import SearchIcon from "@material-ui/icons/Search";
import ModalEdit from "./ModalEdit";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import { catPost, deleteCat, searchCat, importCategoryData } from "../../../redux/actions";
import { useJsonToCsv } from "react-json-csv";
import Papa from "papaparse";

var dummyData = [];

const Categories = () => {
  const [modal, setModal] = useState(false);
  const [tData, setTData] = useState([]);
  const [sortName, setSortName] = useState("0");
  const [sortCreationDate, setSortCreationDate] = useState("0");
  const [sortLastModificationDate, setSortLastModificationDate] = useState("0");
  const [first, setFirst] = useState(true);
  const [currentItem, setCurrentItem] = useState({});
  const [modalEdit, setModalEdit] = useState(false);

  const { catItem } = useSelector((state) => state.postReducer);
  const addCategories = () => dispatch(catPost());
  const deleteCateg = (id) => dispatch(deleteCat(id));
  const searchCateg = (name) => dispatch(searchCat(name));
  const importCategories = (item) => dispatch(importCategoryData(item))
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
    setTData(catItem);
  }, [catItem]);
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
      setTData(catItem)
    }
  }


  const handleDelete = (catId) => {
    catItem.map((item) => {
      if (item.catId === catId) {
        deleteCateg(catId);
      }
    });
    setTData(catItem);
  };

  const handleEdit = (catId) => {
    catItem.map((item) => {
      if (item.catId === catId) {
        setCurrentItem(item);
        setModalEdit(true);
        setModal(false);
        setFirst(true);
      }
    });
    setTData(catItem);
  };

  const sortBy = (sort) => {
    if (sort === "name") {
      if (sortName === "0") {
        setSortName("1");
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
    } else if (sort === "creationDate") {
      if (sortCreationDate === "0") {
        setSortName("0");
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
    catId,
    pDefinedCat,
    name,
    othername,
    sorting,
    createdData,
    modificationDate
  ) => {
    e.preventDefault();
    let newItem = {
      catId: catId,
      pDefinedCat: pDefinedCat,
      name: name,
      othername: othername,
      sorting: sorting,
      creationDate: createdData,
      lastModificationDate: modificationDate,
    };
    catItem.push(newItem);
    setTData(catItem)
    toggleModal();
    e.target.reset();
  };
  const filename = "CategoryData";
  const fields = {
    catId: "catId",
    pDefinedCat: "pDefinedCat",
    name: "name",
    othername: "othername",
    sorting: "sorting",
    creationDate: "creationDate",
    lastModificationDate: "lastModificationDate",
  };
  const data = catItem;
  const { saveAsCsv } = useJsonToCsv();
  const handleFileUpload = (e) => {
    const files = e.target.files;
    if (files.length != 0) {
      Papa.parse(files[0], {
        header: true,
        dynamicTyping: true,
        complete: function (results) {
          if (results.data[0].hasOwnProperty("catId")) {
            setTData(results.data)
            importCategories(results.data)

            try {
              setTData(results.data)
              importCategories(results.data)

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
    <div id="App" style={{  }}>
      <h1 className="cat-title">Categories</h1>
      <div className="cat-box">
        <div className="cat-search-box">
          <div className="cat-search">
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
              className="cat-search-text"
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
            <div className="cat-add" onClick={() => toggleModal()}>
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
        <div className="cat-table">
          <HeaderCategory
            name="Name"
            creationDate="Creation Date"
            lastModificationDate="Last Modification Date"
            sortName={sortName}
            sortCreationDate={sortCreationDate}
            sortLastModificationDate={sortLastModificationDate}
            sortBy={sortBy}
          />
          <TransitionGroup className="cat-remove-items">
            {tData.map(
              ({ catId, name, creationDate, lastModificationDate }) => (
                <CSSTransition key={catId} timeout={500} classNames="cat-trans">
                  <TableCategory
                    name={name}
                    catId={catId}
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
        <ModalCategory
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
export default Categories;
