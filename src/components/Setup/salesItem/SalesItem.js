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
import { addItems, searchItems, deleteItems } from "../../../redux/actions";
const tabledata = [
  {
    key: 1,
    name: "Ivan",
    price: 169564,
    group: "group1",
    creationDate: "02/01/21",
    lastModificationDate: "09/06/02",
  },
  {
    key: 2,
    name: "Wylie",
    price: 55483,
    group: "group1",
    creationDate: "09/15/08",
    lastModificationDate: "07/05/10",
  },
  {
    key: 3,
    name: "Jakeem",
    price: 132759,
    group: "group1",
    creationDate: "11/16/06",
    lastModificationDate: "04/13/09",
  },
  {
    key: 4,
    name: "Adam",
    price: 111594,
    group: "group1",
    creationDate: "10/05/18",
    lastModificationDate: "01/12/14",
  },
  {
    key: 5,
    name: "Clayton",
    price: 151077,
    group: "group1",
    creationDate: "11/05/04",
    lastModificationDate: "09/04/19",
  },

];

const SalesItem = () => {
  const [tData, setTData] = useState([]);
  const [sortName, setSortName] = useState("0");
  const [sortPrice, setSortPrice] = useState("0");
  const [sortGroup, setSortGroup] = useState("0");
  const [sortCreationDate, setSortCreationDate] = useState("0");
  const [sortLastModificationDate, setSortLastModificationDate] = useState("0");
  const [modal, setModal] = useState(false);
  const [first, setFirst] = useState(true);
  const [currentItem, setCurrentItem] = useState({})
  const [modalEdit, setModalEdit] = useState(false)
  const dispatch = useDispatch();
  const { salesItems } = useSelector(
    (state) => state.postReducer
  );
  const addItem = () => dispatch(addItems());
  const deleteItem = (id) => dispatch(deleteItems(id));
  const searchItem = (name) => dispatch(searchItems(name));
  useEffect(() => {
    addItem()
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
    setTData(tabledata);
  }, []);
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
  const handleSearch = (e) => {
    if (e.target.value === '') {
      addItem()
    }
    else {
      searchItem(e.target.value)
    }

  }

  const handleDelete = (itemId) => {
    salesItems.map((item) => {
      if (item.itemId === itemId) {
        deleteItem(itemId)
      }
    })


  };

  const handleEdit = (itemId) => {

    salesItems.map((item) => {
      if (item.itemId === itemId) {
        setCurrentItem(item)
        setModalEdit(true)
        setModal(false)
        setFirst(true)
      }
    })
  }

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
        console.log(tData);
      } else if (sortPrice === "1") {
        setSortPrice("2");
        setTData((prev) => {
          return prev.sort(GetSortOrder2("price"));
        });
        console.log(tData);
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
    menuDesc,
    kitchenDesc,
    price,
    func,
    group,
    otherDesc,
    pdaDesc,
    comments,
    modifiers
  ) => {
    e.preventDefault();
    let newItem = {
      key: tData.length,
      name: name,
      menuDesc: menuDesc,
      kitchenDesc: kitchenDesc,
      price: price,
      func: func,
      group: group,
      otherDesc: otherDesc,
      pdaDesc: pdaDesc,
      comments: comments,
      modifiers: modifiers,
      creationDate: Date(),
      lastModificationDate: Date(),
    };
    setTData((prev) => {
      return [...prev, newItem];
    });
    toggleModal();
    e.target.reset();
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
            {salesItems.map(
              ({
                key,
                name,
                itemId,
                price,
                group,
                creationDate,
                lastModificationDate,
              }) => (
                <CSSTransition key={key} timeout={500} classNames="item-trans">
                  <TableItem
                    k={key}
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
