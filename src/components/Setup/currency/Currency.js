import { useState, useEffect } from "react";
import "../../../App.css";
import ModalCurrency from "./ModalCurrency";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../../styles/Currency.css";
import TableCurrency from "./TableCurrency";
import HeaderCurrency from "./HeaderCurrency";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import CurrencyEditModal from "./CurrencyEditModal";
import { addCurrency, searchCurrency, deleteCurrency } from "../../../redux/actions";


const Currency = (props) => {
  const [modal, setModal] = useState(false);
  const [tData, setTData] = useState([]);
  const [sortName, setSortName] = useState("0");
  const [first, setFirst] = useState(true);
  const [currentItem, setCurrentItem] = useState({})
  const [modalEdit, setModalEdit] = useState(false)
  const dispatch = useDispatch();
  const { currencyItems } = useSelector(
    (state) => state.postReducer
  );
  const addCurrencies = () => dispatch(addCurrency());
  const deleteCurrencies = (currencyId) => dispatch(deleteCurrency(currencyId));
  const searchCurrencies = (name) => dispatch(searchCurrency(name));

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
  useEffect(() => {
    addCurrencies()

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
  const handleSearch = (e) => {
    if (e.target.value === '') {
      addCurrencies()
    }
    else {
      searchCurrencies(e.target.value)
    }

  }

  const handleDelete = (currencyId) => {
    currencyItems.map((item) => {
      if (item.currencyId === currencyId) {
        deleteCurrencies(currencyId)
      }
    })


  };
  const handleEdit = (currencyId) => {

    currencyItems.map((item) => {
      if (item.currencyId === currencyId) {
        setCurrentItem(item)
        setModalEdit(true)
        setModal(false)
        setFirst(true)
      }
    })
  }
  useEffect(() => {
    setTData(currencyItems)
    return () => { };
  }, []);

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
    currencyId,
    name,
    symbol,
    createdDate,
    modificationDate
  ) => {
    e.preventDefault();
    let newItem = {
      key: tData.length,
      currencyId: currencyId,
      name: name,
      symbol: symbol,
      creationDate: createdDate,
      lastModificationDate: modificationDate,
    };
    currencyItems.push(newItem)
    console.log(currencyItems)
    toggleModal();
    e.target.reset();
  };
  return (
    <div id="App" style={{ width: "100%", height: "100%" }}>
      <h1 className="cur-title">Currency</h1>
      <div className="cur-box">
        <div className="cur-search-box">
          <div className="cur-search">
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
              className="cur-search-text"
              placeholder="Search..."
              onChange={handleSearch}
            />
          </div>

          <div className="cur-add" onClick={() => toggleModal()}>
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
        <div className="cur-table">
          <HeaderCurrency name="Name" sortName={sortName} sortBy={sortBy} />
          <TransitionGroup className="cur-remove-items">
            {currencyItems.map(({  name, currencyId, symbol }) => (
              <CSSTransition key={currencyId} timeout={500} classNames="cur-trans">
                <TableCurrency
                 
                  name={name}
                  currencyId={currencyId}
                  symbol={symbol}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
      {!first ? (
        <ModalCurrency
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
        <CurrencyEditModal
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
export default Currency;
