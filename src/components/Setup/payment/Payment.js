import { useState, useEffect } from "react";
import "../../../App.css";
import ModalPayment from "./ModalPayment";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../../styles/PaymentTypes.css";
import TablePayment from "./TablePayment";
import HeaderPayment from "./HeaderPayment";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import ModalPaymentEdit from "./ModalPaymentEdit";
import { addPayment, searchPayment, deletePayment } from "../../../redux/actions";


const Payment = () => {
  const [modal, setModal] = useState(false);
  const [tData, settData] = useState([]);
  const [sortName, setSortName] = useState("0");
  const [sortType, setSortType] = useState("0");
  const [sortAccountNumber, setSortAccountNumber] = useState("0");
  const [sortStatus, setSortStatus] = useState("0")
  const [first, setFirst] = useState(true);
  const [currentItem, setCurrentItem] = useState({})
  const [modalEdit, setModalEdit] = useState(false)
  const dispatch = useDispatch();
  const { paymentItem } = useSelector(
    (state) => state.postReducer
  );
  const addPayments = () => dispatch(addPayment());
  const deletePayments = (id) => dispatch(deletePayment(id));
  const searchPayments = (name) => dispatch(searchPayment(name));
  useEffect(() => {
    addPayments()
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
  const handleSearch = (e) => {
    if (e.target.value === '') {
      addPayments()
    }
    else {
      searchPayments(e.target.value)
    }

  }

  useEffect(() => {
    settData(paymentItem)
  }, []);

  const handleDelete = (paymentId) => {
    paymentItem.map((item) => {
      if (item.paymentId === paymentId) {
        deletePayments(paymentId)
      }
    })


  };

  const handleEdit = (paymentId) => {

    paymentItem.map((item) => {
      if (item.paymentId === paymentId) {
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
        setSortType("0");
        setSortAccountNumber("0");
        setSortStatus("0")
        settData((prev) => {
          return prev.sort(GetSortOrder("name"));
        });
      } else if (sortName === "1") {
        setSortName("2");
        settData((prev) => {
          return prev.sort(GetSortOrder2("name"));
        });
      } else setSortName("0");
    } else if (sort === "type") {
      if (sortType === "0") {
        setSortType("1");
        setSortName("0");
        setSortAccountNumber("0");
        setSortStatus("0")
        settData((prev) => {
          return prev.sort(GetSortOrder("type"));
        });
      } else if (sortType === "1") {
        setSortType("2");
        settData((prev) => {
          return prev.sort(GetSortOrder2("type"));
        });
      } else setSortType("0");
    } else if (sort === "acc") {
      if (sortAccountNumber === "0") {
        setSortAccountNumber("1");
        setSortName("0");
        setSortType("0");
        setSortStatus("0")
        settData((prev) => {
          return prev.sort(GetSortOrder("accountNumber"));
        });
      } else if (sortAccountNumber === "1") {
        setSortAccountNumber("2");
        settData((prev) => {
          return prev.sort(GetSortOrder2("accountNumber"));
        });
      } else setSortAccountNumber("0");
    }
    else if (sort === "status") {
      if (sortStatus === "0") {
        setSortAccountNumber("0");
        setSortName("0");
        setSortType("0");
        setSortStatus("1")
        settData((prev) => {
          return prev.sort(GetSortOrder("status"));
        });
      } else if (sortStatus === "1") {
        setSortStatus("2");
        settData((prev) => {
          return prev.sort(GetSortOrder2("status"));
        });
      } else setSortStatus("0");
    }
  };
  const handleModalSubmit = (
    e,
    paymentId,
    name,
    paymentCurrency,
    paymentType,
    paymentStatus,
    paymentCommission,
    accountNumber,
    bdAccountNumber,
    message,
    createdData,
    modificationDate
  ) => {
    e.preventDefault();
    let newItem = {
      key: tData.length,
      paymentId: paymentId,
      name: name,
      paymentCurrency: paymentCurrency,
      paymentType: paymentType,
      paymentStatus: paymentStatus,
      paymentCommission: paymentCommission,
      accountNumber: accountNumber,
      bdAccountNumber: bdAccountNumber,
      message: message,
      creationDate: createdData,
      lastModificationDate: modificationDate,
    };
    paymentItem.push(newItem)

    toggleModal();
    e.target.reset();
  };
  return (
    <div id="App" style={{ width: "100%", height: "100%" }}>
      <h1 className="pay-title">Payment Types</h1>
      <div className="pay-box">
        <div className="pay-search-box">
          <div className="pay-search">
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
              className="pay-search-text"
              placeholder="Search..."
              onChange={handleSearch}
            />
          </div>
          <div className="pay-add" onClick={() => toggleModal()}>
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
        <div className="pay-table">
          <HeaderPayment
            name="Name"
            paymentType="Type"
            accountNumber="Account Number"
            paymentStatus="Status"
            sortName={sortName}
            sortType={sortType}
            sortAccountNumber={sortAccountNumber}
            sortStatus={sortStatus}
            sortBy={sortBy}
          />
          <TransitionGroup className="pay-remove-items">
            {paymentItem.map(({  name, paymentType, accountNumber, paymentId,paymentStatus }) => (
              <CSSTransition key={paymentId} timeout={500} classNames="pay-trans">
                <TablePayment
                  name={name}
                  paymentType={paymentType}
                  paymentId={paymentId}
                  accountNumber={accountNumber}
                  paymentStatus={paymentStatus}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
      {!first ? (
        <ModalPayment
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
        <ModalPaymentEdit
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
export default Payment;
