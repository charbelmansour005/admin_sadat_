import { useState, useEffect } from "react";
import "../../../App.css";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import TableItem from "./TableItem";
import HeaderItem from "./HeaderItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../../styles/Items.css";
import ModalItem from "./ModalItem";
import { useDispatch, useSelector } from "react-redux";
import SalesEditModal from "./SalesEditModal";
import { useJsonToCsv } from "react-json-csv";
import Papa from "papaparse";
import { addItems, searchItems, deleteItems, clearAddMod, clearRemoveMod, clearAddOnMod, clearMandModifier, importItemData } from "../../../redux/actions";


const SalesItem = () => {
  const [tData, setTData] = useState([]);
  const [sortName, setSortName] = useState("0");
  const [sortPrice, setSortPrice] = useState("0");
  const [sortGroup, setSortGroup] = useState("0");
  const [sortCreationDate, setSortCreationDate] = useState("0");
  const [sortLastModificationDate, setSortLastModificationDate] = useState("0");
  const [modal, setModal] = useState(false);
  const [first, setFirst] = useState(true);
  const [currentItem, setCurrentItem] = useState({});
  const [modalEdit, setModalEdit] = useState(false);
  const [width,setWidth]=useState(window.innerWidth);


  const dispatch = useDispatch();
  const { salesItems, ItemAdd, ItemRemove, ItemAddOn, modifiers } = useSelector(
    (state) => state.postReducer
  );


  const deleteItem = (id) => dispatch(deleteItems(id));
  const searchItem = (name) => dispatch(searchItems(name));
  const importItems = (item) => dispatch(importItemData(item))
  const clearAdd = () => dispatch(clearAddMod());
  const clearRemove = () => dispatch(clearRemoveMod());
  const clearAddOn = () => dispatch(clearAddOnMod());
  const clearModifier = () => dispatch(clearMandModifier());
  useEffect(() => {



    if (ItemAdd.length > 0) {
      clearAdd();
    }
    if (ItemRemove.length > 0) {
      clearRemove();
    }
    if (ItemAddOn.length > 0) {
      clearAddOn();
    }
    if (modifiers.length > 0) {
      clearModifier()
    }


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
    setTData(salesItems)

  }, [salesItems]);
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
      setTData(salesItems)
    }
  }


  const handleDelete = (itemId) => {


    salesItems.map((item) => {
      if (item.itemId === itemId) {
        deleteItem(itemId);
      }
    });
    setTData(salesItems);

  };
  const handleEdit = (itemId) => {

    salesItems.map((item) => {
      if (item.itemId === itemId) {
        setCurrentItem(item);
        setModalEdit(true);
        setModal(false);
        setFirst(true);
      }
    });
    setTData(salesItems)
  };
  const sortBy = (sort) => {
    if (sort === "name") {
      if (sortName === "0") {
        setSortName("1");
        setSortPrice("0");
        setSortGroup("0");
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
    } else if (sort === "price") {
      if (sortPrice === "0") {
        setSortName("0");
        setSortPrice("1");
        setSortGroup("0");
        setSortCreationDate("0");
        setSortLastModificationDate("0");
        setTData((prev) => {
          return prev.sort(GetSortOrder("price"));
        });

      } else if (sortPrice === "1") {
        setSortPrice("2");
        setTData((prev) => {
          return prev.sort(GetSortOrder2("price"));
        });

      } else setSortPrice("0");
    } else if (sort === "group") {
      if (sortGroup === "0") {
        setSortName("0");
        setSortPrice("0");
        setSortGroup("1");
        setSortCreationDate("0");
        setSortLastModificationDate("0");
        setTData((prev) => {
          return prev.sort(GetSortOrder("group"));
        });
      } else if (sortGroup === "1") {
        setSortGroup("2");
        setTData((prev) => {
          return prev.sort(GetSortOrder2("group"));
        });
      } else setSortGroup("0");
    } else if (sort === "creationDate") {
      if (sortCreationDate === "0") {
        setSortName("0");
        setSortPrice("0");
        setSortGroup("0");
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
        setSortPrice("0");
        setSortGroup("0");
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
    itemId,
    menuDesc,
    kitchenDesc,
    price,
    price2,
    price3,
    price4,
    func,
    group,
    otherDesc,
    pdaDesc,
    comments,
    branch,
    print1,
    print2,
    print3,
    ItemAdd,
    ItemRemove,
    ItemAddOn,
    modifiers,
    createdData,
    modificationDate
  ) => {
    e.preventDefault();
    let newItem = {
      name: name,
      itemId: itemId,
      menuDesc: menuDesc,
      kitchenDesc: kitchenDesc,
      price: price,
      price2: price2,
      price3: price3,
      price4: price4,
      func: func,
      group: group,
      otherDesc: otherDesc,
      pdaDesc: pdaDesc,
      comments: comments,
      branch: branch,
      print1: print1,
      print2: print2,
      print3: print3,
      ItemAdd: ItemAdd,
      ItemRemove: ItemRemove,
      ItemAddOn: ItemAddOn,
      modifiers: modifiers,
      creationDate: createdData,
      lastModificationDate: modificationDate,
    };

    salesItems.push(newItem);
    setTData(salesItems)
    console.log(salesItems)

    toggleModal();
    e.target.reset();
  };

  const filename = "SalesItemData";


  const fields = {
    itemId: "itemId",
    name: "name",
    menuDesc: "menuDesc",
    kitchenDesc: "kitchenDesc",
    price: "price",
    price2: "price2",
    price3: "price3",
    price4: "price4",
    func: "func",
    group: "group",
    otherDesc: "otherDesc",
    pdaDesc: "pdaDesc",
    comments: "comments",
    branch: "branch",
    print1: "print1",
    print2: "print2",
    print3: "print3",
    ItemAdd: "ItemAdd",
    ItemRemove: "ItemRemove",
    ItemAddOn: "ItemAddOn",
    modifiers: "modifiers",
    creationDate: "creationDate",
    lastModificationDate: "lastModificationDate",
  };
  const data = salesItems;
  const { saveAsCsv } = useJsonToCsv();
  const handleFileUpload = (e) => {
    const files = e.target.files;
    if (files.length != 0) {
      Papa.parse(files[0], {
        header: true,
        dynamicTyping: true,
        complete: function (results) {
          if (results.data[0].hasOwnProperty("itemId")) {
            setTData(results.data)
            importItems(results.data)


            try {
              setTData(results.data)
              importItems(results.data)

            } catch (error) {
              alert(error);
            }
          }
        },
      });
    }
  };
  return (
   
    <div id="App" style={{ width: "85%", height: "100%" }}>
      <h1 className="item-title">Sales Items</h1>
      <div className="item-box">
        <div className="item-search-box">
          <div className="item-search">
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

              className="item-search-text"
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
            <div onClick={() => toggleModal()} className="item-add">
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
        <div className="item-table">
          <HeaderItem
            name="Name"
            price="Price"
            group="Group"
            creationDate="Creation Date"
            lastModificationDate="Last Modification Date"
            sortName={sortName}
            sortPrice={sortPrice}
            sortGroup={sortGroup}
            sortCreationDate={sortCreationDate}
            sortLastModificationDate={sortLastModificationDate}
            sortBy={sortBy}
          />

          <TransitionGroup id="tg" className="item-remove-items">
            {tData.map(
              ({
                name,
                itemId,
                price,
                group,
                creationDate,
                lastModificationDate,
              }) => (
                <CSSTransition
                  key={itemId}
                  timeout={500}
                  classNames="item-trans"
                >
                  <TableItem
                    name={name}
                    itemId={itemId}
                    price={price}
                    group={group}
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
        <ModalItem
          m="modal"
          toggleClose={toggleModal}
          mod={modal}
          mountedStyle={mountedStyle}
          unmountedStyle={unmountedStyle}
          downStyle={downStyle}
          upStyle={upStyle}
          handleSubmit={handleModalSubmit}
        />
      ) : null}

      {modalEdit ? (
        <SalesEditModal
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
export default SalesItem;
