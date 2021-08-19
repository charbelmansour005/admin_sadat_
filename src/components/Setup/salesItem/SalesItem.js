import { useState, useEffect } from "react";
import "../../../App.css";
import Modal from "react-modal";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import TableItem from "./TableItem";
import HeaderItem from "./HeaderItem";
import cancel from "../../../assets/cancel.png";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../../styles/Items.css";
import ModalItem from "./ModalItem";

const tabledata = [
  {
    key: 1,
    name: "Ivan",
    price: 169564,
    group: "Imperdiet Institute",
    creationDate: "02/01/21",
    lastModificationDate: "09/06/02",
  },
  {
    key: 2,
    name: "Wylie",
    price: 55483,
    group: "Aliquam Ornare Incorporated",
    creationDate: "09/15/08",
    lastModificationDate: "07/05/10",
  },
  {
    key: 3,
    name: "Jakeem",
    price: 132759,
    group: "Nascetur LLP",
    creationDate: "11/16/06",
    lastModificationDate: "04/13/09",
  },
  {
    key: 4,
    name: "Adam",
    price: 111594,
    group: "Donec Consectetuer Institute",
    creationDate: "10/05/18",
    lastModificationDate: "01/12/14",
  },
  {
    key: 5,
    name: "Clayton",
    price: 151077,
    group: "Malesuada Incorporated",
    creationDate: "11/05/04",
    lastModificationDate: "09/04/19",
  },
  {
    key: 6,
    name: "Axel",
    price: 78803,
    group: "Consectetuer Mauris Id Limited",
    creationDate: "11/13/15",
    lastModificationDate: "02/13/15",
  },
  {
    key: 7,
    name: "Cameron",
    price: 85182,
    group: "Arcu Consulting",
    creationDate: "01/18/12",
    lastModificationDate: "07/28/20",
  },
  {
    key: 8,
    name: "Clayton",
    price: 19895,
    group: "Dapibus Company",
    creationDate: "08/08/03",
    lastModificationDate: "03/14/05",
  },
  {
    key: 9,
    name: "William",
    price: 36299,
    group: "Turpis In Condimentum Incorporated",
    creationDate: "12/16/02",
    lastModificationDate: "05/22/08",
  },
  {
    key: 10,
    name: "Linus",
    price: 48124,
    group: "Donec Company",
    creationDate: "05/01/10",
    lastModificationDate: "09/02/19",
  },
  {
    key: 11,
    name: "Leo",
    price: 135478,
    group: "Quisque Inc.",
    creationDate: "02/26/20",
    lastModificationDate: "10/01/04",
  },
  {
    key: 12,
    name: "Emery",
    price: 110317,
    group: "Integer Eu Lacus Ltd",
    creationDate: "07/25/03",
    lastModificationDate: "01/29/13",
  },
  {
    key: 13,
    name: "Jermaine",
    price: 88685,
    group: "Lobortis Foundation",
    creationDate: "07/21/18",
    lastModificationDate: "10/23/19",
  },
  {
    key: 14,
    name: "Ivan",
    price: 23597,
    group: "Posuere Enim Associates",
    creationDate: "05/12/04",
    lastModificationDate: "04/21/03",
  },
  {
    key: 15,
    name: "Ian",
    price: 197332,
    group: "Odio Auctor PC",
    creationDate: "02/16/04",
    lastModificationDate: "12/24/05",
  },
];

const SalesItem = () => {
  const [modal, setModal] = useState(false);
  const [tData, setTData] = useState([]);
  const [sortName, setSortName] = useState("0");
  const [sortPrice, setSortPrice] = useState("0");
  const [sortGroup, setSortGroup] = useState("0");
  const [sortCreationDate, setSortCreationDate] = useState("0");
  const [sortLastModificationDate, setSortLastModificationDate] = useState("0");
  const [mod, setMod] = useState(false);
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      e.key === "Escape" && setMod(false);
      e.key === "+" && setMod(true);
    });
    return () => {
      document.removeEventListener("keydown", (e) => e);
    };
  }, [mod]);
  const customStyles = {
    content: {
      top: "40%",
      left: "50%",
      right: "auto",
      width: "60%",
      height: "73%",
      bottom: "50%",

      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  useEffect(() => {
    setTData(tabledata);
  }, []);
  function toggleModal() {
    setMod((prev) => !prev);
  }
  const mountedStyle = { animation: "inAnimation 500ms ease-in" };
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
    setTData(() => {
      return tabledata.filter((dat) =>
        dat.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
  };
  const handleDelete = (name) => {
    setTData((prev) => {
      return prev.filter((d) => d.name !== name);
    });
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

  return (
    <div id="App" style={{ width: "117.5%", height: "100%" }}>
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
            {tData.map(
              ({
                key,
                name,
                price,
                group,
                creationDate,
                lastModificationDate,
              }) => (
                <CSSTransition key={key} timeout={500} classNames="item-trans">
                  <TableItem
                    key={key}
                    name={name}
                    price={price}
                    group={group}
                    creationDate={creationDate}
                    lastModificationDate={lastModificationDate}
                    handleDelete={handleDelete}
                  />
                </CSSTransition>
              )
            )}
          </TransitionGroup>
        </div>
      </div>
      {mod ? (
        <CSSTransition timeout={2000} classNames="item-trans">
          <ModalItem
            toggleClose={toggleModal}
            mod={mod}
            mountedStyle={mountedStyle}
          />
        </CSSTransition>
      ) : null}
      <div style={{ width: "50%" }}>
        <Modal
          appElement={document.getElementById("App")}
          ariaHideApp={false}
          isOpen={modal}
          style={customStyles}
        >
          <div style={{ width: "100%", height: "100%" }}>
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
            <div style={{ width: "100%", display: "flex", height: 50 }}>
              <div style={{ width: "50%", flex: 1, justifyContent: "center" }}>
                <button
                  style={{
                    border: "1px solid transparent",
                    marginTop: 5,
                    marginLeft: 5,
                    width: 80,
                    height: 30,
                    borderRadius: 5,
                    backgroundColor: "#018BB6",
                    color: "white",
                    fontSize: 15,
                  }}
                  type="submit"
                  onClick={() => setModal(false)}
                >
                  Save
                </button>
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
                    marginTop: 5,
                    marginLeft: 5,
                    width: 80,
                    height: 30,
                    borderRadius: 5,
                    backgroundColor: "#018BB6",
                    color: "white",
                    fontSize: 15,
                  }}
                  type="submit"
                >
                  New As
                </button>
              </div>
            </div>

            <div
              style={{
                width: "100%",
                borderRadius: 2,
                border: "1px solid lightgray",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: 40,
                  backgroundColor: "#018BB6",
                }}
              >
                <label
                  style={{
                    fontSize: 15,
                    marginLeft: 5,
                    position: "absolute",
                    marginTop: 7,
                    color: "white",
                  }}
                >
                  General
                </label>
              </div>

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
                      <div style={{ width: "81%" }}>
                        <input
                          placeholder="Item Description"
                          className="description"
                          type="text"
                        ></input>
                      </div>
                    </div>
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
                        <label>Menu Description *</label>
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
                          placeholder="Menu Description"
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
                        <label style={{}}>Kitchen Description *</label>
                      </div>
                    </div>
                    <div style={{ width: "100%", justifyContent: "center" }}>
                      <div style={{ width: "81%", display: "flex" }}>
                        <input
                          className="menu"
                          placeholder="Kitchen Description"
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
                        <label>Price 1</label>
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
                          placeholder="0"
                        ></input>
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
                        <input className="price" type="text"></input>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: "25%" }}>
                    <div>
                      <label>Price 2</label>
                    </div>
                    <div style={{}}>
                      <input
                        className="price"
                        type="text"
                        placeholder="0"
                      ></input>
                    </div>
                    <div style={{}}>
                      <input className="price" type="text"></input>
                    </div>
                  </div>
                  <div style={{ width: "25%" }}>
                    <div>
                      <label>Price 3</label>
                    </div>
                    <div style={{}}>
                      <input
                        className="price"
                        type="text"
                        placeholder="0"
                      ></input>
                    </div>
                    <div style={{}}>
                      <input className="price" type="text"></input>
                    </div>
                  </div>
                  <div style={{ width: "25%" }}>
                    <div>
                      <label>Price 4</label>
                    </div>
                    <div style={{}}>
                      <input
                        className="price"
                        type="text"
                        placeholder="0"
                      ></input>
                    </div>
                    <div style={{}}>
                      <input className="price" type="text"></input>
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
                <div style={{ width: "100%", display: "flex" }}>
                  <div style={{ width: "50%", marginTop: 10 }}>
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
                        <label>Function *</label>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ width: "81%" }}>
                        <select
                          style={{ overflow: "scroll" }}
                          defaultValue="Select Function"
                          className="menu"
                        >
                          <option disabled hidden>
                            Select Function
                          </option>
                          <option>1</option>
                          <option>2</option>
                        </select>
                      </div>
                    </div>

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
                        <label style={{ paddingRight: 20 }}>
                          Other Description
                        </label>
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
                          placeholder="other description"
                          className="description"
                          type="text"
                        ></input>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        marginTop: 10,
                      }}
                    >
                      <div style={{ width: "81%", display: "flex" }}>
                        <label>Comments On menu</label>
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
                          placeholder="comments on menu"
                          className="description"
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
                      justifyContent: "flex-start",
                      display: "flex",
                      marginTop: 10,
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{ width: "81%", display: "flex", marginTop: 8 }}
                      >
                        <label>Group *</label>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ width: "81%" }}>
                        <select
                          style={{ overflow: "scroll" }}
                          defaultValue="Select Group"
                          className="menu"
                        >
                          <option disabled hidden>
                            Select Group
                          </option>
                          <option>1</option>
                          <option>2</option>
                        </select>
                      </div>
                    </div>
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
                        <label style={{ paddingRight: 20 }}>
                          PDA Description
                        </label>
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
                          placeholder="PDA Description"
                          type="text"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                width: "90%",
                border: "1px solid lightgray",
                marginTop: 10,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: 40,
                  backgroundColor: "#018BB6",
                }}
              >
                <label
                  style={{
                    fontSize: 15,
                    marginLeft: 5,
                    position: "absolute",
                    marginTop: 7,
                    color: "white",
                  }}
                >
                  Print Out
                </label>
              </div>

              <div style={{ width: "100%", display: "flex" }}>
                <div
                  style={{
                    width: "50%",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <div style={{ width: "80%" }}>
                    <select
                      style={{ overflow: "scroll" }}
                      defaultValue="Select branch"
                      className="menu"
                    >
                      <option disabled hidden>
                        Select branch
                      </option>
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>
                </div>
                <div
                  style={{
                    width: "50%",
                    flex: 1,
                    display: "flex",
                    justifyContent: "flex-end   ",
                  }}
                >
                  <button
                    style={{
                      marginTop: 7,
                      marginRight: 10,
                      border: "1px solid transparent",
                      width: 150,
                      height: 30,
                      backgroundColor: "#018BB6",
                      color: "white",
                      fontSize: 15,
                    }}
                    type="submit"
                  >
                    Copy All Branches
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
              <div style={{ width: "100%", display: "flex", marginTop: 10 }}>
                <div style={{ width: "35%" }}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ width: "60%", display: "flex" }}>
                      <label>Print Out 1</label>
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
                      <select defaultValue="Null" className="print">
                        <option disabled hidden>
                          Null
                        </option>
                        <option>1</option>
                        <option>2</option>
                      </select>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 10,
                    }}
                  >
                    <div style={{ width: "60%", display: "flex" }}>
                      <label>Print Out 4</label>
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
                      <select defaultValue="Null" className="print">
                        <option disabled hidden>
                          Null
                        </option>
                        <option>1</option>
                        <option>2</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div style={{ width: "35%" }}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ width: "60%", display: "flex" }}>
                      <label>Print Out 2</label>
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
                      <select defaultValue="Null" className="print">
                        <option disabled hidden>
                          Null
                        </option>
                        <option>1</option>
                        <option>2</option>
                      </select>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 10,
                    }}
                  >
                    <div style={{ width: "60%", display: "flex" }}>
                      <label>Print Out 5</label>
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
                      <select defaultValue="Null" className="print">
                        <option disabled hidden>
                          Null
                        </option>
                        <option>1</option>
                        <option>2</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div style={{ width: "35%" }}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ width: "60%", display: "flex" }}>
                      <label>Print Out 3</label>
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
                      <select defaultValue="Null" className="print">
                        <option disabled hidden>
                          Null
                        </option>
                        <option>1</option>
                        <option>2</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "90%",
                border: "1px solid lightgray",
                marginTop: 10,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: 40,
                  backgroundColor: "#018BB6",
                }}
              >
                <label
                  style={{
                    fontSize: 15,
                    marginLeft: 5,
                    position: "absolute",
                    marginTop: 7,
                    color: "white",
                  }}
                >
                  Modifiers
                </label>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "10%",
                  display: "flex",
                  marginTop: 10,
                }}
              >
                <div
                  style={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 8,
                  }}
                >
                  <label>Modifier 1</label>
                </div>
                <div
                  style={{
                    width: "25%",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <select defaultValue="Null" className="print">
                    <option disabled hidden>
                      Null
                    </option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
                <div
                  style={{
                    width: "25%",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <input
                    className="modifier"
                    type="text"
                    placeholder="0"
                  ></input>
                </div>
                <div
                  style={{
                    width: "10%",
                    justifyContent: "flex-start",
                    display: "flex",
                  }}
                >
                  <input type="checkbox" className="mandatory"></input>
                </div>
                <div
                  style={{
                    width: "5%",
                    justifyContent: "flex-start",
                    display: "flex",
                    marginTop: 7,
                  }}
                >
                  <label>Mandantory</label>
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "10%",
                  display: "flex",
                  marginTop: 10,
                }}
              >
                <div
                  style={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 8,
                  }}
                >
                  <label>Modifier 2</label>
                </div>
                <div
                  style={{
                    width: "25%",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <select defaultValue="Null" className="print">
                    <option disabled hidden>
                      Null
                    </option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
                <div
                  style={{
                    width: "25%",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <input
                    className="modifier"
                    type="text"
                    placeholder="0"
                  ></input>
                </div>
                <div
                  style={{
                    width: "10%",
                    justifyContent: "flex-start",
                    display: "flex",
                  }}
                >
                  <input type="checkbox" className="mandatory"></input>
                </div>
                <div
                  style={{
                    width: "5%",
                    justifyContent: "flex-start",
                    display: "flex",
                    marginTop: 7,
                  }}
                >
                  <label>Mandantory</label>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "10%",
                  display: "flex",
                  marginTop: 10,
                }}
              >
                <div
                  style={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 8,
                  }}
                >
                  <label>Modifier 3</label>
                </div>
                <div
                  style={{
                    width: "25%",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <select defaultValue="Null" className="print">
                    <option disabled hidden>
                      Null
                    </option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
                <div
                  style={{
                    width: "25%",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <input
                    className="modifier"
                    type="text"
                    placeholder="0"
                  ></input>
                </div>
                <div
                  style={{
                    width: "10%",
                    justifyContent: "flex-start",
                    display: "flex",
                  }}
                >
                  <input type="checkbox" className="mandatory"></input>
                </div>
                <div
                  style={{
                    width: "5%",
                    justifyContent: "flex-start",
                    display: "flex",
                    marginTop: 7,
                  }}
                >
                  <label>Mandantory</label>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};
export default SalesItem;
