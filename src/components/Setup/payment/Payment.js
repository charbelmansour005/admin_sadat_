import { useState, useEffect } from 'react'
import '../../../App.css';
import Modal from 'react-modal'
import cancel from '../../../assets/cancel.png'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../../styles/PaymentTypes.css";
import TablePayment from "./TablePayment";
import HeaderPayment from "./HeaderPayment";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
const Payment = (props) => {
    const [modal, setModal] = useState(false)
    const [tData, setTData] = useState([]);
    const [sortName, setSortName] = useState("0");
    const [sortType, setSortType] = useState("0");
    const [sortAccountNumber, setSortAccountNumber] = useState("0");
    const tabledata = [
        {
            key: 1,
            name: "name1",
            price: 1000,
            group: "group1",
            creationDate: "Today",
            lastModificationDate: "Today",
        },
        {
            key: 2,
            name: "name2",
            price: 2000,
            group: "group2",
            creationDate: "Today",
            lastModificationDate: "Today",
        },
        {
            key: 3,
            name: "name3",
            price: 18000,
            group: "group3",
            creationDate: "Today",
            lastModificationDate: "Today",
        },
        {
            key: 4,
            name: "name4",
            price: 4000,
            group: "group4",
            creationDate: "Today",
            lastModificationDate: "Today",
        },
        {
            key: 5,
            name: "name5",
            price: 5000,
            group: "group5",
            creationDate: "Today",
            lastModificationDate: "Today",
        },
        {
            key: 6,
            name: "name6",
            price: 6000,
            group: "group6",
            creationDate: "Today",
            lastModificationDate: "Today",
        },
        {
            key: 7,
            name: "name7",
            price: 6000,
            group: "group7",
            creationDate: "Today",
            lastModificationDate: "Today",
        },
        {
            key: 8,
            name: "name8",
            price: 6000,
            group: "group8 ",
            creationDate: "Today",
            lastModificationDate: "Today",
        },
        {
            key: 9,
            name: "name9",
            price: 9000,
            group: "group9",
            creationDate: "Today",
            lastModificationDate: "Today",
        },
        {
            key: 10,
            name: "name10",
            price: 10000,
            group: "group10",
            creationDate: "Today",
            lastModificationDate: "Today",
        },
        {
            key: 11,
            name: "name20",
            price: 6000,
            group: "group6",
            creationDate: "Today",
            lastModificationDate: "Today",
        },
        {
            key: 12,
            name: "name",
            price: 6000,
            group: "group6",
            creationDate: "Today",
            lastModificationDate: "Today",
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
            price: 6000,
            group: "group6",
            creationDate: "Today",
            lastModificationDate: "Today",
        },
        {
            key: 15,
            name: "c",
            price: 6000,
            group: "group6",
            creationDate: "Today",
            lastModificationDate: "Today",
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
            price: 6000,
            group: "group6",
            creationDate: "Today",
            lastModificationDate: "Today",
        },
        {
            key: 18,
            name: "g",
            price: 6000,
            group: "group6",
            creationDate: "Today",
            lastModificationDate: "Today",
        },
        {
            key: 19,
            name: "h",
            price: 6000,
            group: "group6",
            creationDate: "Today",
            lastModificationDate: "Today",
        },
        {
            key: 20,
            name: "dfs",
            price: 6000,
            group: "group6",
            creationDate: "Today",
            lastModificationDate: "Today",
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
        if (e.target.value === '') {
            setTData(tabledata)
        }
        else {
            setTData(() => {
                return tData.filter((dat) =>
                    dat.name.toLowerCase().includes(e.target.value.toLowerCase())
                );
            });
        }
    };
    const customStyles = {
        content: {
            top: '40%',
            left: '50%',
            right: 'auto',
            width: '60%',
            height: '40%',
            bottom: '50%',

            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    }
    useEffect(() => {
        setTData(tabledata)
        return () => {

        }
    }, [])

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


        <div id="App" style={{ width: '100%', height: '100%' }}>
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
                            type="text"
                            className="pay-search-text"
                            placeholder="Search..."
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="pay-add" onClick={()=>setModal(true)}>
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
                        {tData.map(({ name, type, accountNumber }) => (
                            <CSSTransition
                                key={name.charAt(name.length - 1)}
                                timeout={500}
                                classNames="pay-trans"
                            >
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
          
            <div style={{ width: '50%' }} >
                <Modal appElement={document.getElementById("App")} ariaHideApp={false} isOpen={modal} style={customStyles}>
                    <div style={{ width: '100%', height: '100%' }}>
                        <div style={{ width: '100%', display: 'flex' }}>

                            <div style={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                                <div onClick={() => setModal(false)} style={{ justifyContent: 'flex-end', display: 'flex', width: 30, height: 30 }}>
                                    <img src={cancel} style={{ width: 10, height: 10, position: 'relative' }}></img>
                                </div>
                            </div>

                        </div>
                        <div style={{ width: '100%', display: 'flex', height: 50 }}>
                            <div style={{ width: '50%', flex: 1, justifyContent: 'center' }}>
                                <button style={{ border: '1px solid transparent', marginTop: 5, marginLeft: 5, width: 80, height: 30, backgroundColor: '#018BB6', color: 'white', fontSize: 15,borderRadius:5 }} type="submit" onClick={() => setModal(false)}>
                                    Save
                                </button>
                            </div>


                        </div>

                        <div style={{ width: '100%', borderRadius: 2 }}>






                            <div style={{ width: '100%', height: '35%' }}>
                                <div style={{ width: '100%', display: 'flex' }}>
                                    <div style={{ width: '50%' }}>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '81%', display: 'flex', marginTop: 10 }}>
                                                <label>
                                                    Payment Description *
                                                </label>

                                            </div>
                                        </div>

                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '81%' }}>
                                                <input required placeholder="payment Description" className="description" type="text"></input>
                                            </div>

                                        </div>


                                    </div>


                                </div>











                                <div style={{ width: '100%', height: 1, backgroundColor: 'lightgray', marginTop: 7 }}>
                                    {/* #018BB6 */}

                                </div>




                                <div style={{ width: '100%', display: 'flex' }}>


                                    <div style={{ width: '50%', marginTop: 10 }}>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '81%', display: 'flex', marginTop: 10 }}>
                                                <label>
                                                    Payment Currency *
                                                </label>
                                            </div>

                                        </div>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '81%' }}>
                                                <select style={{ overflow: 'scroll' }} defaultValue="Select Currency" className="menu">
                                                    <option disabled hidden>Select Currency</option>
                                                    <option>LBP</option>
                                                    <option>USD</option>

                                                </select>
                                            </div>


                                        </div>

                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '81%', display: 'flex', marginTop: 10 }}>
                                                <label style={{ paddingRight: 20 }}>
                                                    Change Status *
                                                </label>
                                            </div>

                                        </div>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '81%' }}>
                                                <select style={{ overflow: 'scroll' }} defaultValue="Select Status" className="menu">
                                                    <option disabled hidden>Select Status</option>
                                                    <option>1</option>
                                                    <option>2</option>

                                                </select>
                                            </div>

                                        </div>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                                            <div style={{ width: '81%', display: 'flex' }}>
                                                <label>
                                                    Account Number
                                                </label>
                                            </div>
                                        </div>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '81%', display: 'flex' }}>
                                                <input placeholder="account no" className="menu" type="text"></input>
                                            </div>

                                        </div>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                                            <div style={{ width: '81%', display: 'flex' }}>
                                                <label>
                                                    Message on Invoice
                                                </label>
                                            </div>
                                        </div>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '81%' }}>
                                                <select style={{ overflow: 'scroll' }} defaultValue="Select message" className="menu">
                                                    <option disabled hidden>Select message</option>
                                                    <option>1</option>
                                                    <option>2</option>

                                                </select>
                                            </div>

                                        </div>
                                        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                                            <div style={{}}>
                                                <input type="checkbox" ></input>
                                            </div>
                                            <div style={{ width: '78%', marginLeft: 10 }}>
                                                <label>Open cash drawer</label>
                                            </div>

                                        </div>




                                    </div>

                                    <div style={{ width: '50%', flexDirection: 'column', flex: 1, justifyContent: 'flex-start', display: 'flex', marginTop: 10 }}>

                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '81%', display: 'flex', marginTop: 8 }}>
                                                <label>
                                                    Type *
                                                </label>
                                            </div>

                                        </div>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '81%' }}>
                                                <select style={{ overflow: 'scroll' }} defaultValue="Select Type" className="menu">
                                                    <option disabled hidden>Select Type</option>
                                                    <option>Credit </option>
                                                    <option>Credit Card</option>
                                                    <option>Check</option>

                                                </select>
                                            </div>


                                        </div>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '81%', display: 'flex', marginTop: 10 }}>
                                                <label style={{ paddingRight: 20 }}>
                                                    Commission
                                                </label>
                                            </div>

                                        </div>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>

                                            <div style={{ width: '81%', display: 'flex' }}>
                                                <input className="menu" placeholder="commission" type="text">
                                                </input>
                                            </div>

                                        </div>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '81%', display: 'flex', marginTop: 10 }}>
                                                <label style={{ paddingRight: 20 }}>
                                                    Bank deposit Account Number
                                                </label>
                                            </div>

                                        </div>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>

                                            <div style={{ width: '81%', display: 'flex' }}>
                                                <input className="menu" placeholder="bank deposit" type="text">
                                                </input>
                                            </div>

                                        </div>
                                    </div>
                                </div>








                            </div>

                        </div>




                    </div>
                </Modal>
            </div>




        </div>

    )
}
export default Payment;
