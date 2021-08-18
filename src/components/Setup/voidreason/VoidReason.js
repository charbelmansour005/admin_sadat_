import { useState, useEffect } from "react";
import "../../../App.css";
import Modal from "react-modal";
import cancel from "../../../assets/cancel.png";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../../styles/VoidReason.css";
import TableVoid from "./TableVoid";
import HeaderVoid from "./HeaderVoid";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";

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

const VoidReason = (props) => {
  const [modal, setModal] = useState(false);
  const [tData, setTData] = useState([]);
  const [sortName, setSortName] = useState("0");
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
      height: "40%",
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
    <div id="App" style={{ width: "176.2%", height: "100%" }}>
      <h1 className="pay-title">Void Reason</h1>
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

          <div>
            <select className="branch" defaultValue="All branches">
              <option>All branches</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
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
          <HeaderVoid name="Name" sortName={sortName} sortBy={sortBy} />
          <TransitionGroup className="pay-remove-items">
            {tData.map(({ key, name, type, accountNumber }) => (
              <CSSTransition key={key} timeout={500} classNames="pay-trans">
                <TableVoid name={name} handleDelete={handleDelete} />
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
            <div style={{ width: "100%", display: "flex", height: 50 }}>
              <div style={{ width: "50%", flex: 1, justifyContent: "center" }}>
                <button
                  style={{
                    border: "1px solid transparent",
                    marginTop: 5,
                    marginLeft: 5,
                    width: 80,
                    height: 30,
                    backgroundColor: "#018BB6",
                    color: "white",
                    fontSize: 15,
                    borderRadius: 5,
                  }}
                  type="submit"
                  onClick={() => setModal(false)}
                >
                  Save
                </button>
              </div>
            </div>

            <div style={{ width: "100%", borderRadius: 2 }}>
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
                        <label>Void Description *</label>
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
                          required
                          placeholder="void Description"
                          className="menu"
                          type="text"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ width: "100%", display: "flex" }}>
                  <div style={{ width: "50%", marginTop: 10 }}>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 15,
                      }}
                    >
                      <div style={{}}>
                        <input type="checkbox"></input>
                      </div>
                      <div style={{ width: "78%", marginLeft: 10 }}>
                        <label>Discontinued</label>
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
                      Branch Exceptions
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
                      <label>Branch1</label>
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
                      <label>Branch2</label>
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
                      <label>Branch3</label>
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
export default VoidReason;
