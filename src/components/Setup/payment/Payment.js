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
import {
  addPayment,
  searchPayment,
  deletePayment,
  importPaymentData
} from "../../../redux/actions";
import { useJsonToCsv } from "react-json-csv";
import Papa from "papaparse";

var dummyData = [];

const Payment = () => {
  const [modal, setModal] = useState(false);
  const [tData, setTData] = useState([]);
  const [sortName, setSortName] = useState("0");
  const [sortType, setSortType] = useState("0");
  const [sortAccountNumber, setSortAccountNumber] = useState("0");
  const [sortStatus, setSortStatus] = useState("0");
  const [first, setFirst] = useState(true);
  const [currentItem, setCurrentItem] = useState({});
  const [modalEdit, setModalEdit] = useState(false);
  const dispatch = useDispatch();
  const { paymentItem } = useSelector((state) => state.postReducer);
  const addPayments = () => dispatch(addPayment());
  const deletePayments = (id) => dispatch(deletePayment(id));
  const searchPayments = (name) => dispatch(searchPayment(name));
  const importPayments = (item) => dispatch(importPaymentData(item))
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
      setTData(paymentItem)
    }
  }

  useEffect(() => {
    setTData(paymentItem);
  }, []);

  const handleDelete = (paymentId) => {
    paymentItem.map((item) => {
      if (item.paymentId === paymentId) {
        deletePayments(paymentId);
      }
    });
    setTData(paymentItem);
  };

  const handleEdit = (paymentId) => {
    paymentItem.map((item) => {
      if (item.paymentId === paymentId) {
        setCurrentItem(item);
        setModalEdit(true);
        setModal(false);
        setFirst(true);
      }
    });
    setTData(paymentItem);

  };

  const sortBy = (sort) => {
    if (sort === "name") {
      if (sortName === "0") {
        setSortName("1");
        setSortType("0");
        setSortAccountNumber("0");
        setSortStatus("0");
        setTData((prev) => {
          return prev.sort(GetSortOrder("name"));
        });
      } else if (sortName === "1") {
        setSortName("2");
        setTData((prev) => {
          return prev.sort(GetSortOrder2("name"));
        });
      } else setSortName("0");
    } else if (sort === "paymentType") {
      if (sortType === "0") {
        setSortType("1");
        setSortName("0");
        setSortAccountNumber("0");
        setSortStatus("0");
        setTData((prev) => {
          return prev.sort(GetSortOrder("paymentType"));
        });
      } else if (sortType === "1") {
        setSortType("2");
        setTData((prev) => {
          return prev.sort(GetSortOrder2("paymentType"));
        });
      } else setSortType("0");
    } else if (sort === "accountNumber") {
      if (sortAccountNumber === "0") {
        setSortAccountNumber("1");
        setSortName("0");
        setSortType("0");
        setSortStatus("0");
        setTData((prev) => {
          return prev.sort(GetSortOrder("accountNumber"));
        });
      } else if (sortAccountNumber === "1") {
        setSortAccountNumber("2");
        setTData((prev) => {
          return prev.sort(GetSortOrder2("accountNumber"));
        });
      } else setSortAccountNumber("0");
    } else if (sort === "paymentStatus") {
      if (sortStatus === "0") {
        setSortAccountNumber("0");
        setSortName("0");
        setSortType("0");
        setSortStatus("1");
        setTData((prev) => {
          return prev.sort(GetSortOrder("paymentStatus"));
        });
      } else if (sortStatus === "1") {
        setSortStatus("2");
        setTData((prev) => {
          return prev.sort(GetSortOrder2("paymentStatus"));
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
    paymentItem.push(newItem);
    setTData(paymentItem)

    toggleModal();
    e.target.reset();
  };
  const filename = "PaymentData";
  const fields = {
    paymentId: "paymentId",
    name: "name",
    paymentType: "paymentType",
    accountNumber: "accountNumber",
    paymentStatus: "paymentStatus",
    paymentCommission:"paymentCommission",
    message:"message",
    paymentCurrency:"paymentCurrency",
    bdAccountNumber:"bdAccountNumber",
    creationDate: "creationDate",
    lastModificationDate: "lastModificationDate",
  };
  const data = paymentItem;
  const { saveAsCsv } = useJsonToCsv();
  const handleFileUpload = (e) => {
    const files = e.target.files;
    if (files.length != 0) {
      Papa.parse(files[0], {
        header: true,
        dynamicTyping: true,
        complete: function (results) {
          if (results.data[0].hasOwnProperty("paymentId")) {
            setTData(results.data)
            importPayments(results.data)
            
            try {
              setTData(results.data)
              importPayments(results.data)
              
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
            {tData.map(
              ({
                name,
                paymentType,
                accountNumber,
                paymentId,
                paymentStatus,
              }) => (
                <CSSTransition
                  key={paymentId}
                  timeout={500}
                  classNames="pay-trans"
                >
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
              )
            )}
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
