import { useState, useEffect } from 'react'
import '../../../App.css';
import Modal from 'react-modal'
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import TableItem from "./TableItem";
import HeaderItem from "./HeaderItem";
import cancel from '../../../assets/cancel.png'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../../styles/Items.css";

const SalesItem = (props) => {
    const [modal, setModal] = useState(false)
    const [tData, setTData] = useState([]);
    const [sortName, setSortName] = useState("0");
    const [sortPrice, setSortPrice] = useState("0");
    const [sortGroup, setSortGroup] = useState("0");
    const [sortCreationDate, setSortCreationDate] = useState("0");
    const [sortLastModificationDate, setSortLastModificationDate] = useState("0");
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

    const customStyles = {
        content: {
            top: '40%',
            left: '50%',
            right: 'auto',
            width: '60%',
            height: '73%',
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
                    return prev.sort(GetSortOrder("creationDate"));
                });
            } else if (sortCreationDate === "1") {
                setSortCreationDate("2");
                setTData((prev) => {
                    return prev.sort(GetSortOrder2("creationDate"));
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
                    return prev.sort(GetSortOrder("lastModificationDate"));
                });
            } else if (sortLastModificationDate === "1") {
                setSortLastModificationDate("2");
                setTData((prev) => {
                    return prev.sort(GetSortOrder2("lastModificationDate"));
                });
            } else setSortLastModificationDate("0");
        }
    };

    return (


        <div id="App" style={{ width: '100%', height: '100%' }}>
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
                    <div onClick={() => setModal(true)} className="item-add">
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
                            ({ name, price, group, creationDate, lastModificationDate }) => (
                                <CSSTransition
                                    key={name.charAt(name.length - 1)}
                                    timeout={500}
                                    classNames="item-trans"
                                >
                                    <TableItem
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
            <div style={{ width: '50%' }} >
                <Modal appElement={document.getElementById("App")} ariaHideApp={false} isOpen={modal} style={customStyles}>
                    <div style={{ width: '100%', height: '100%' }}>
                        <div style={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                            <div onClick={() => setModal(false)} style={{ justifyContent: 'flex-end', display: 'flex', width: 30, height: 30 }}>
                                <img src={cancel} style={{ width: 10, height: 10, position: 'relative' }}></img>
                            </div>
                        </div>
                        <div style={{ width: '100%', display: 'flex', height: 50 }}>
                            <div style={{ width: '50%', flex: 1, justifyContent: 'center' }}>
                                <button style={{ border: '1px solid transparent', marginTop: 5, marginLeft: 5, width: 80, height: 30, borderRadius: 5, backgroundColor: '#018BB6', color: 'white', fontSize: 15 }} type="submit" onClick={() => setModal(false)}>
                                    Save
                                </button>
                            </div>
                            <div style={{ width: '50%', flex: 1, justifyContent: 'flex-end', display: 'flex' }}>
                                <button style={{ border: '1px solid transparent', marginTop: 5, marginLeft: 5, width: 80, height: 30, borderRadius: 5, backgroundColor: '#018BB6', color: 'white', fontSize: 15 }} type="submit">
                                    New As
                                </button>
                            </div>

                        </div>

                        <div style={{ width: '100%', borderRadius: 2, border: '1px solid lightgray' }}>
                            <div style={{ width: '100%', height: 40, backgroundColor: '#018BB6' }}>
                                <label style={{ fontSize: 15, marginLeft: 5, position: 'absolute', marginTop: 7, color: 'white' }}>
                                    General
                                </label>
                            </div>




                            <div style={{ width: '100%', height: '35%' }}>
                                <div style={{ width: '100%', display: 'flex' }}>
                                    <div style={{ width: '50%' }}>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '81%', display: 'flex', marginTop: 10 }}>
                                                <label>
                                                    Description *
                                                </label>

                                            </div>
                                        </div>

                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '81%' }}>
                                                <input placeholder="Item Description" className="description" type="text"></input>
                                            </div>

                                        </div>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }} >
                                            <div style={{ width: '81%', display: 'flex', marginTop: 10 }}>
                                                <label >
                                                    Menu Description *
                                                </label>
                                            </div>
                                        </div>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '81%', display: 'flex' }}>
                                                <input className="menu" placeholder="Menu Description" type="text">
                                                </input>
                                            </div>
                                        </div>

                                    </div>

                                    <div style={{ width: '50%', flexDirection: 'column', flex: 1, justifyContent: 'flex-end', display: 'flex' }}>

                                        <div style={{ width: '100%', justifyContent: 'center' }}>
                                            <div style={{ width: '81%', display: 'flex', marginTop: 10 }}>
                                                <label style={{}}>
                                                    Kitchen Description *
                                                </label>
                                            </div>
                                        </div>
                                        <div style={{ width: '100%', justifyContent: 'center' }}>
                                            <div style={{ width: '81%', display: 'flex' }}>
                                                <input className="menu" placeholder="Kitchen Description" type="text">
                                                </input>
                                            </div>

                                        </div>


                                    </div>
                                </div>











                                <div style={{ width: '100%', height: 1, backgroundColor: 'lightgray', marginTop: 7 }}>
                                    {/* #018BB6 */}

                                </div>

                                <div style={{ width: '100%', display: 'flex', marginTop: 10 }}>
                                    <div style={{ width: '25%' }}>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '60%', display: 'flex' }} >
                                                <label>
                                                    Price 1
                                                </label>
                                            </div>
                                        </div>

                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '60%', display: 'flex' }}>
                                                <input className="price" type="text" placeholder="0">
                                                </input>
                                            </div>

                                        </div>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '60%', display: 'flex' }}>
                                                <input className="price" type="text" >
                                                </input>
                                            </div>

                                        </div>
                                    </div>
                                    <div style={{ width: '25%' }}>
                                        <div >
                                            <label>
                                                Price 2
                                            </label>
                                        </div>
                                        <div style={{}}>
                                            <input className="price" type="text" placeholder="0">
                                            </input>
                                        </div>
                                        <div style={{}}>
                                            <input className="price" type="text" >
                                            </input>
                                        </div>
                                    </div>
                                    <div style={{ width: '25%' }}>
                                        <div >
                                            <label>
                                                Price 3
                                            </label>
                                        </div>
                                        <div style={{}}>
                                            <input className="price" type="text" placeholder="0">
                                            </input>
                                        </div>
                                        <div style={{}}>
                                            <input className="price" type="text" >
                                            </input>
                                        </div>
                                    </div>
                                    <div style={{ width: '25%' }}>
                                        <div >
                                            <label>
                                                Price 4
                                            </label>
                                        </div>
                                        <div style={{}}>
                                            <input className="price" type="text" placeholder="0">
                                            </input>
                                        </div>
                                        <div style={{}}>
                                            <input className="price" type="text" >
                                            </input>
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
                                                    Function *
                                                </label>
                                            </div>

                                        </div>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '81%' }}>
                                                <select style={{ overflow: 'scroll' }} defaultValue="Select Function" className="menu">
                                                    <option disabled hidden>Select Function</option>
                                                    <option>1</option>
                                                    <option>2</option>

                                                </select>
                                            </div>


                                        </div>

                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '81%', display: 'flex', marginTop: 10 }}>
                                                <label style={{ paddingRight: 20 }}>
                                                    Other Description
                                                </label>
                                            </div>

                                        </div>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '81%', display: 'flex' }}>
                                                <input placeholder="other description" className="description" type="text"></input>
                                            </div>

                                        </div>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                                            <div style={{ width: '81%', display: 'flex' }}>
                                                <label>
                                                    Comments On menu
                                                </label>
                                            </div>
                                        </div>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '81%', display: 'flex' }}>
                                                <input placeholder="comments on menu" className="description" type="text"></input>
                                            </div>

                                        </div>

                                    </div>

                                    <div style={{ width: '50%', flexDirection: 'column', flex: 1, justifyContent: 'flex-start', display: 'flex', marginTop: 10 }}>

                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '81%', display: 'flex', marginTop: 8 }}>
                                                <label>
                                                    Group *
                                                </label>
                                            </div>

                                        </div>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '81%' }}>
                                                <select style={{ overflow: 'scroll' }} defaultValue="Select Group" className="menu">
                                                    <option disabled hidden>Select Group</option>
                                                    <option>1</option>
                                                    <option>2</option>

                                                </select>
                                            </div>


                                        </div>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '81%', display: 'flex', marginTop: 10 }}>
                                                <label style={{ paddingRight: 20 }}>
                                                    PDA Description
                                                </label>
                                            </div>

                                        </div>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>

                                            <div style={{ width: '81%', display: 'flex' }}>
                                                <input className="menu" placeholder="PDA Description" type="text">
                                                </input>
                                            </div>

                                        </div>
                                    </div>
                                </div>








                            </div>

                        </div>

                        <div style={{ width: '90%', border: '1px solid lightgray', marginTop: 10 }}>
                            <div style={{ width: '100%', height: 40, backgroundColor: '#018BB6' }}>
                                <label style={{ fontSize: 15, marginLeft: 5, position: 'absolute', marginTop: 7, color: 'white' }}>
                                    Print Out
                                </label>
                            </div>

                            <div style={{ width: '100%', display: 'flex' }}>

                                <div style={{ width: '50%', justifyContent: 'center', display: 'flex' }}>
                                    <div style={{ width: '80%' }}>
                                        <select style={{ overflow: 'scroll' }} defaultValue="Select branch" className="menu">
                                            <option disabled hidden>Select branch</option>
                                            <option>1</option>
                                            <option>2</option>

                                        </select>
                                    </div>


                                </div>
                                <div style={{ width: '50%', flex: 1, display: 'flex', justifyContent: 'flex-end   ' }}>
                                    <button style={{ marginTop: 7, marginRight: 10, border: '1px solid transparent', width: 150, height: 30, backgroundColor: '#018BB6', color: 'white', fontSize: 15 }} type="submit">
                                        Copy All Branches
                                    </button>
                                </div>

                            </div>
                            <div style={{ width: '100%', height: 1, backgroundColor: 'lightgray', marginTop: 7 }}>


                            </div>
                            <div style={{ width: '100%', display: 'flex', marginTop: 10 }}>

                                <div style={{ width: '35%' }}>
                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ width: '60%', display: 'flex' }}>
                                            <label>
                                                Print Out 1
                                            </label>
                                        </div>

                                    </div>
                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ width: '60%', display: 'flex' }}>
                                            <select defaultValue="Null" className="print">
                                                <option disabled hidden>Null</option>
                                                <option>1</option>
                                                <option>2</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                                        <div style={{ width: '60%', display: 'flex' }}>
                                            <label>
                                                Print Out 4
                                            </label>
                                        </div>

                                    </div>
                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ width: '60%', display: 'flex' }}>
                                            <select defaultValue="Null" className="print">
                                                <option disabled hidden>Null</option>
                                                <option>1</option>
                                                <option>2</option>
                                            </select>
                                        </div>

                                    </div>

                                </div>
                                <div style={{ width: '35%' }}>
                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ width: '60%', display: 'flex' }}>
                                            <label>
                                                Print Out 2
                                            </label>
                                        </div>

                                    </div>
                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ width: '60%', display: 'flex' }}>
                                            <select defaultValue="Null" className="print">
                                                <option disabled hidden>Null</option>
                                                <option>1</option>
                                                <option>2</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                                        <div style={{ width: '60%', display: 'flex' }}>
                                            <label>
                                                Print Out 5
                                            </label>
                                        </div>

                                    </div>
                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ width: '60%', display: 'flex' }}>
                                            <select defaultValue="Null" className="print">
                                                <option disabled hidden>Null</option>
                                                <option>1</option>
                                                <option>2</option>
                                            </select>
                                        </div>

                                    </div>

                                </div>
                                <div style={{ width: '35%' }}>
                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ width: '60%', display: 'flex' }}>
                                            <label>
                                                Print Out 3
                                            </label>
                                        </div>

                                    </div>
                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ width: '60%', display: 'flex' }}>
                                            <select defaultValue="Null" className="print">
                                                <option disabled hidden>Null</option>
                                                <option>1</option>
                                                <option>2</option>
                                            </select>
                                        </div>

                                    </div>


                                </div>




                            </div>


                        </div>
                        <div style={{ width: '90%', border: '1px solid lightgray', marginTop: 10 }}>
                            <div style={{ width: '100%', height: 40, backgroundColor: '#018BB6' }}>
                                <label style={{ fontSize: 15, marginLeft: 5, position: 'absolute', marginTop: 7, color: 'white' }}>
                                    Modifiers
                                </label>
                            </div>



                            <div style={{ width: '100%', height: '10%', display: 'flex', marginTop: 10 }}>

                                <div style={{ width: '25%', display: 'flex', justifyContent: 'center', marginTop: 8 }}>
                                    <label>
                                        Modifier 1
                                    </label>
                                </div>
                                <div style={{ width: '25%', justifyContent: 'center', display: 'flex' }}>
                                    <select defaultValue="Null" className="print">
                                        <option disabled hidden>Null</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </div>
                                <div style={{ width: '25%', justifyContent: 'center', display: 'flex' }}>
                                    <input className="modifier" type="text" placeholder="0" >
                                    </input>
                                </div>
                                <div style={{ width: '10%', justifyContent: 'flex-start', display: 'flex' }}>
                                    <input type="checkbox" className="mandatory" ></input>
                                </div>
                                <div style={{ width: '5%', justifyContent: 'flex-start', display: 'flex', marginTop: 7 }}>
                                    <label>Mandantory</label>

                                </div>

                            </div>

                            <div style={{ width: '100%', height: '10%', display: 'flex', marginTop: 10 }}>

                                <div style={{ width: '25%', display: 'flex', justifyContent: 'center', marginTop: 8 }}>
                                    <label>
                                        Modifier 2
                                    </label>
                                </div>
                                <div style={{ width: '25%', justifyContent: 'center', display: 'flex' }}>
                                    <select defaultValue="Null" className="print">
                                        <option disabled hidden>Null</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </div>
                                <div style={{ width: '25%', justifyContent: 'center', display: 'flex' }}>
                                    <input className="modifier" type="text" placeholder="0" >
                                    </input>
                                </div>
                                <div style={{ width: '10%', justifyContent: 'flex-start', display: 'flex' }}>
                                    <input type="checkbox" className="mandatory" ></input>
                                </div>
                                <div style={{ width: '5%', justifyContent: 'flex-start', display: 'flex', marginTop: 7 }}>
                                    <label>Mandantory</label>

                                </div>

                            </div>
                            <div style={{ width: '100%', height: '10%', display: 'flex', marginTop: 10 }}>

                                <div style={{ width: '25%', display: 'flex', justifyContent: 'center', marginTop: 8 }}>
                                    <label>
                                        Modifier 3
                                    </label>
                                </div>
                                <div style={{ width: '25%', justifyContent: 'center', display: 'flex' }}>
                                    <select defaultValue="Null" className="print">
                                        <option disabled hidden>Null</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </div>
                                <div style={{ width: '25%', justifyContent: 'center', display: 'flex' }}>
                                    <input className="modifier" type="text" placeholder="0" >
                                    </input>
                                </div>
                                <div style={{ width: '10%', justifyContent: 'flex-start', display: 'flex' }}>
                                    <input type="checkbox" className="mandatory" ></input>
                                </div>
                                <div style={{ width: '5%', justifyContent: 'flex-start', display: 'flex', marginTop: 7 }}>
                                    <label >Mandantory</label>

                                </div>

                            </div>
                        </div>

                    </div>
                </Modal>
            </div>




        </div>


    )
}
export default SalesItem;
