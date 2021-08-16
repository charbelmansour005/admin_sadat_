import { useState, useEffect } from 'react'
import '../../../App.css';
import Modal from 'react-modal'
import cancel from '../../../assets/cancel.png'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../../styles/Categories.css";
import TableCategory from "./TableCategory";
import HeaderCategory from "./HeaderCategory";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";

const Categories = (props) => {
    const [modal, setModal] = useState(false)
    const [tData, setTData] = useState([]);
    const [sortName, setSortName] = useState("0");
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
        {
            key: 22,
            name: "dfs",
            price: 6000,
            group: "group6",
            creationDate: "Today",
            lastModificationDate: "Today",
        },
        {
            key: 23,
            name: "dfs",
            price: 6000,
            group: "group6",
            creationDate: "Today",
            lastModificationDate: "Today",
        },
        {
            key: 24,
            name: "dfs",
            price: 6000,
            group: "group6",
            creationDate: "Today",
            lastModificationDate: "Today",
        },
        {
            key: 25,
            name: "dfs",
            price: 6000,
            group: "group6",
            creationDate: "Today",
            lastModificationDate: "Today",
        }
      
    ];
    const customStyles = {
        content: {
            top: '40%',
            left: '45%',
            right: 'auto',
            width: '40%',
            height: '35%',
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
        } else if (sort === "creationDate") {
            if (sortCreationDate === "0") {
                setSortName("0");
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
            <h1 className="cat-title">Categories</h1>
            <div className="cat-box">
                <div className="cat-search-box">
                    <div className="cat-search">
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
                            className="cat-search-text"
                            placeholder="Search..."
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="cat-add" onClick={() => setModal(true)}>
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
                <div className="cat-table">
                    <HeaderCategory
                        name="Name"
                        creationDate="Creation Date"
                        lastModificationDate="Last Modification Date"
                        sortName={sortName}
                        sortCreationDate={sortCreationDate}
                        sortLastModificationDate={sortLastModificationDate}
                        sortBy={sortBy}
                    />
                    <TransitionGroup className="cat-remove-items">
                        {tData.map(({ name, creationDate, lastModificationDate }) => (
                            <CSSTransition
                                key={name.charAt(name.length - 1)}
                                timeout={500}
                                classNames="cat-trans"
                            >
                                <TableCategory
                                    name={name}
                                    creationDate={creationDate}
                                    lastModificationDate={lastModificationDate}
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
                        <div style={{ width: '100%', display: 'flex', height: 50, marginTop: 15 }}>
                            <div style={{ width: '50%', flex: 1, justifyContent: 'center' }}>
                                <label style={{ border: '1px solid transparent', marginTop: 5, marginLeft: 5, width: 80, height: 30, fontSize: 15, color: '#018BB6' }}>
                                    New Category
                                </label>
                            </div>
                            <div style={{ width: '50%', flex: 1, justifyContent: 'flex-end', display: 'flex' }}>
                                <button style={{ border: '1px solid transparent', marginLeft: 5, width: 80, height: 30, backgroundColor: '#018BB6', color: 'white', fontSize: 15,borderRadius:5 }} type="submit">
                                    Save
                                </button>
                            </div>

                        </div>
                        <div style={{ width: '100%', height: 1, backgroundColor: 'lightgray', marginTop: 7 }}>


                        </div>

                        <div style={{ width: '100%' }}>





                            <div style={{ width: '100%', height: '35%' }}>
                                <div style={{ width: '100%', display: 'flex' }}>
                                    <div style={{ width: '50%' }}>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '81%', display: 'flex', marginTop: 10 }}>
                                                <label>
                                                    Predefined Categories
                                                </label>

                                            </div>
                                        </div>

                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '81%' }}>
                                                <select style={{ overflow: 'scroll' }} defaultValue="Select Predefined Categories" className="menu">
                                                    <option disabled hidden>Select Predefined Categories</option>
                                                    <option>1</option>
                                                    <option>2</option>

                                                </select>
                                            </div>


                                        </div>



                                    </div>


                                </div>











                                <div style={{ width: '100%', height: 1, backgroundColor: 'lightgray', marginTop: 7 }}>
                                    {/* #018BB6 */}

                                </div>

                                <div style={{ width: '100%', display: 'flex', marginTop: 10 }}>
                                    <div style={{ width: '35%' }}>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '100%', display: 'flex' }} >
                                                <label>
                                                    Category *
                                                </label>
                                            </div>
                                        </div>

                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '60%', display: 'flex' }}>
                                                <input className="category" type="text" placeholder="category name">
                                                </input>
                                            </div>

                                        </div>

                                    </div>
                                    <div style={{ width: '35%' }}>
                                        <div >
                                            <label>
                                                Other Name
                                            </label>
                                        </div>
                                        <div style={{}}>
                                            <input className="category" type="text" placeholder="other name" >
                                            </input>
                                        </div>

                                    </div>
                                    <div style={{ width: '30%' }}>
                                        <div >
                                            <label>
                                                sorting
                                            </label>
                                        </div>
                                        <div style={{}}>
                                            <input className="category" type="text" placeholder="sorting">
                                            </input>
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
export default Categories;
