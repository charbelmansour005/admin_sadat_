import { useState, useEffect } from "react";
import "../../../App.css";
import ModalPayment from "./ModalPayment";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../../styles/PaymentTypes.css";
import TablePayment from "./TablePayment";
import HeaderPayment from "./HeaderPayment";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";

const tabledata = [
  {
    key: 1,
    name: "Ivan",
    accountNumber: 55483,
    type: "Aliquam Ornare Incorporated",
    creationDate: "02/01/21",
    lastModificationDate: "09/06/02",
  },
  {
    key: 2,
    name: "Wylie",
    accountNumber: 55483,
    type: "Aliquam Ornare Incorporated",
    creationDate: "09/15/08",
    lastModificationDate: "07/05/10",
  },
  {
    key: 3,
    name: "Jakeem",
    accountNumber: 55483,
    type: "Aliquam Ornare Incorporated",
    creationDate: "11/16/06",
    lastModificationDate: "04/13/09",
  },
  {
    key: 4,
    name: "Adam",
    accountNumber: 55483,
    type: "Aliquam Ornare Incorporated",
    creationDate: "10/05/18",
    lastModificationDate: "01/12/14",
  },
  {
    key: 5,
    name: "Clayton",
    accountNumber: 55483,
    type: "Aliquam Ornare Incorporated",
    group: "Malesuada Incorporated",
    creationDate: "11/05/04",
    lastModificationDate: "09/04/19",
  },
  {
    key: 6,
    name: "Axel",
    accountNumber: 55483,
    type: "Aliquam Ornare Incorporated",
    group: "Consectetuer Mauris Id Limited",
    creationDate: "11/13/15",
    lastModificationDate: "02/13/15",
  },
  {
    key: 7,
    name: "Cameron",
    accountNumber: 55483,
    type: "Aliquam Ornare Incorporated",
    creationDate: "01/18/12",
    lastModificationDate: "07/28/20",
  },
  
];

const Payment = () => {
  const [modal, setModal] = useState(false);
  const [tData, setTData] = useState([]);
  const [sortName, setSortName] = useState("0");
  const [sortType, setSortType] = useState("0");
  const [sortAccountNumber, setSortAccountNumber] = useState("0");
  const [first, setFirst] = useState(true);
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
    setTData(() => {
      return tabledata.filter((dat) =>
        dat.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
  };
  useEffect(() => {
    setTData(tabledata);
  }, []);

  const handleDelete = (name) => {
    setTData((prev) => {
      return prev.filter((d) => d.name !== name);
    });
  };
  const sortBy = (sort) => {
    if (sort === "name") {
      if (sortName === "0") {
        setSortName("1");
        setSortType("0");
        setSortAccountNumber("0");
        setTData((prev) => {
          return prev.sort(GetSortOrder("name"));
        });
      } else if (sortName === "1") {
        setSortName("2");
        setTData((prev) => {
          return prev.sort(GetSortOrder2("name"));
        });
      } else setSortName("0");
    } else if (sort === "type") {
      if (sortType === "0") {
        setSortType("1");
        setSortName("0");
        setSortAccountNumber("0");
        setTData((prev) => {
          return prev.sort(GetSortOrder("type"));
        });
      } else if (sortType === "1") {
        setSortType("2");
        setTData((prev) => {
          return prev.sort(GetSortOrder2("type"));
        });
      } else setSortType("0");
    } else if (sort === "acc") {
      if (sortAccountNumber === "0") {
        setSortAccountNumber("1");
        setSortName("0");
        setSortType("0");
        setTData((prev) => {
          return prev.sort(GetSortOrder("accountNumber"));
        });
      } else if (sortAccountNumber === "1") {
        setSortAccountNumber("2");
        setTData((prev) => {
          return prev.sort(GetSortOrder2("accountNumber"));
        });
      } else setSortAccountNumber("0");
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
            type="Type"
            accountNumber="Account Number"
            sortName={sortName}
            sortType={sortType}
            sortAccountNumber={sortAccountNumber}
            sortBy={sortBy}
          />
          <TransitionGroup className="pay-remove-items">
            {tData.map(({ key, name, type, accountNumber }) => (
              <CSSTransition key={key} timeout={500} classNames="pay-trans">
                <TablePayment
                  name={name}
                  type={type}
                  accountNumber={accountNumber}
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
