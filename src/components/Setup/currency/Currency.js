import { useState, useEffect } from "react";
import "../../../App.css";
import Modal from "react-modal";
import cancel from "../../../assets/cancel.png";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../../styles/Currency.css";
import TableCurrency from "./TableCurrency";
import HeaderCurrency from "./HeaderCurrency";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";

const Currency = (props) => {
  const [modal, setModal] = useState(false);
  const [tData, setTData] = useState([]);
  const [sortName, setSortName] = useState("0");
  const tabledata = [
    {
      key: 1,
      name: "name1",
    },
    {
      key: 2,
      name: "name2",
    },
    {
      key: 3,
      name: "name3",
    },
    {
      key: 4,
      name: "name4",
    },
    {
      key: 5,
      name: "name5",
    },
    {
      key: 6,
      name: "name6",
    },
    {
      key: 7,
      name: "name7",
    },
    {
      key: 8,
      name: "name8",
    },
    {
      key: 9,
      name: "name9",
    },
    {
      key: 10,
      name: "name10",
    },
    {
      key: 11,
      name: "name20",
    },
    {
      key: 12,
      name: "name",
    },
    {
      key: 13,
      name: "a",
      price: 6000,
      group: "group6",
      creationDate: "Today",
      lastModificationDate: "Today",
    },
    {
      key: 14,
      name: "b",
    },
    {
      key: 15,
      name: "c",
    },
    {
      key: 16,
      name: "e",
      price: 6000,
      group: "group6",
      creationDate: "Today",
      lastModificationDate: "Today",
    },
    {
      key: 17,
      name: "f",
    },
    {
      key: 18,
      name: "g",
    },
    {
      key: 19,
      name: "h",
    },
    {
      key: 20,
      name: "dfs",
    },
  ];

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
  const customStyles = {
    content: {
      top: "40%",
      left: "50%",
      right: "auto",
      width: "60%",
      height: "25%",
      bottom: "50%",

      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  useEffect(() => {
    setTData(tabledata);
    return () => {};
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

  return (
    <div id="App" style={{ width: "249%", height: "100%" }}>
      <h1 className="pay-title">Currency</h1>
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
              type="text"
              className="pay-search-text"
              placeholder="Search..."
              onChange={handleSearch}
            />
          </div>

          <div className="pay-add" onClick={() => setModal(true)}>
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
          <HeaderCurrency name="Name" sortName={sortName} sortBy={sortBy} />
          <TransitionGroup className="pay-remove-items">
            {tData.map(({ name, type, accountNumber }) => (
              <CSSTransition
                key={name.charAt(name.length - 1)}
                timeout={500}
                classNames="pay-trans"
              >
                <TableCurrency name={name} handleDelete={handleDelete} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
      <div style={{ width: "50%" }}>
        <Modal
          appElement={document.getElementById("App")}
          ariaHideApp={false}
          isOpen={modal}
          style={customStyles}
        >
          <div style={{ width: "100%", height: "100%" }}>
            <div style={{ width: "100%", display: "flex" }}>
              <div
                style={{
                  flex: 1,
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  onClick={() => setModal(false)}
                  style={{
                    justifyContent: "flex-end",
                    display: "flex",
                    width: 30,
                    height: 30,
                  }}
                >
                  <img
                    alt="null"
                    src={cancel}
                    style={{ width: 10, height: 10, position: "relative" }}
                  ></img>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                height: 50,
                marginTop: 15,
              }}
            >
              <div style={{ width: "50%", flex: 1, justifyContent: "center" }}>
                <label
                  style={{
                    border: "1px solid transparent",
                    marginTop: 5,
                    marginLeft: 5,
                    width: 80,
                    height: 30,
                    fontSize: 15,
                    color: "#018BB6",
                  }}
                >
                  New Currency
                </label>
              </div>
              <div
                style={{
                  width: "50%",
                  flex: 1,
                  justifyContent: "flex-end",
                  display: "flex",
                }}
              >
                <button
                  style={{
                    border: "1px solid transparent",
                    marginLeft: 5,
                    width: 80,
                    height: 30,
                    backgroundColor: "#018BB6",
                    color: "white",
                    fontSize: 15,
                    borderRadius: 5,
                  }}
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "lightgray",
                marginTop: 7,
              }}
            ></div>

            <div style={{ width: "100%" }}>
              <div style={{ width: "100%", height: "35%" }}>
                <div style={{ width: "100%", display: "flex" }}>
                  <div style={{ width: "50%" }}>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{ width: "81%", display: "flex", marginTop: 10 }}
                      >
                        <label>Description *</label>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ width: "81%", display: "flex" }}>
                        <input
                          className="menu"
                          placeholder="Description"
                          type="text"
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      width: "50%",
                      flexDirection: "column",
                      flex: 1,
                      justifyContent: "flex-end",
                      display: "flex",
                    }}
                  >
                    <div style={{ width: "100%", justifyContent: "center" }}>
                      <div
                        style={{ width: "81%", display: "flex", marginTop: 10 }}
                      >
                        <label style={{}}>Symbol *</label>
                      </div>
                    </div>
                    <div style={{ width: "100%", justifyContent: "center" }}>
                      <div style={{ width: "81%", display: "flex" }}>
                        <input
                          className="menu"
                          placeholder="symbol"
                          type="text"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    width: "100%",
                    height: 1,
                    backgroundColor: "lightgray",
                    marginTop: 7,
                  }}
                >
                  {/* #018BB6 */}
                </div>

                <div style={{ width: "100%", display: "flex", marginTop: 10 }}>
                  <div style={{ width: "25%" }}>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ width: "60%", display: "flex" }}>
                        <label>POS Rate *</label>
                      </div>
                    </div>

                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ width: "60%", display: "flex" }}>
                        <input
                          className="price"
                          type="text"
                          placeholder="pos rate"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: "25%" }}>
                    <div>
                      <label>Back Office Rate *</label>
                    </div>
                    <div style={{}}>
                      <input
                        className="price"
                        type="text"
                        placeholder="back office rate"
                      ></input>
                    </div>
                  </div>
                  <div style={{ width: "25%" }}>
                    <div>
                      <label>Decimal Number *</label>
                    </div>
                    <div style={{}}>
                      <input
                        className="price"
                        type="text"
                        placeholder="decimal number"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};
export default Currency;
