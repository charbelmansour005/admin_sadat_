import { useState, useEffect } from 'react'
import '../../../App.css';
import Modal from 'react-modal'
import cancel from '../../../assets/cancel.png'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../../styles/VoidReason.css";
import TableVoid from "./TableVoid";
import HeaderVoid from "./HeaderVoid";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";



const VoidReason = (props) => {
    const [modal, setModal] = useState(false)
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


        <div id="App" style={{ width: '100%', height: '100%' }}>
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

                    <div >
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
                    <HeaderVoid
                        name="Name"
                        sortName={sortName}
                        sortBy={sortBy}
                    />
                    <TransitionGroup className="pay-remove-items">
                        {tData.map(({ name, type, accountNumber }) => (
                            <CSSTransition
                                key={name.charAt(name.length - 1)}
                                timeout={500}
                                classNames="pay-trans"
                            >
                                <TableVoid
                                    name={name}
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
                                <button style={{ border: '1px solid transparent', marginTop: 5, marginLeft: 5, width: 80, height: 30, backgroundColor: '#018BB6', color: 'white', fontSize: 15, borderRadius: 5 }} type="submit" onClick={() => setModal(false)}>
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
                                                    Void Description *
                                                </label>

                                            </div>
                                        </div>

                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '81%' }}>
                                                <input required placeholder="void Description" className="menu" type="text"></input>
                                            </div>

                                        </div>


                                    </div>


                                </div>
                                <div style={{ width: '100%', display: 'flex' }}>


                                    <div style={{ width: '50%', marginTop: 10 }}>


                                        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                                            <div style={{}}>
                                                <input type="checkbox" ></input>
                                            </div>
                                            <div style={{ width: '78%', marginLeft: 10 }}>
                                                <label>Discontinued</label>
                                            </div>

                                        </div>




                                    </div>


                                </div>
                                <div style={{ width: '90%', border: '1px solid lightgray', marginTop: 10 }}>
                                    <div style={{ width: '100%', height: 40, backgroundColor: '#018BB6' }}>
                                        <label style={{ fontSize: 15, marginLeft: 5, position: 'absolute', marginTop: 7, color: 'white' }}>
                                            Branch Exceptions
                                        </label>
                                    </div>



                                    <div style={{ width: '100%', height: '10%', display: 'flex', marginTop: 10 }}>


                                        <div style={{ width: '10%', justifyContent: 'flex-start', display: 'flex' }}>
                                            <input type="checkbox" className="mandatory" ></input>
                                        </div>
                                        <div style={{ width: '5%', justifyContent: 'flex-start', display: 'flex', marginTop: 7 }}>
                                            <label>Branch1</label>

                                        </div>

                                    </div>

                                    <div style={{ width: '100%', height: '10%', display: 'flex', marginTop: 10 }}>



                                        <div style={{ width: '10%', justifyContent: 'flex-start', display: 'flex' }}>
                                            <input type="checkbox" className="mandatory" ></input>
                                        </div>
                                        <div style={{ width: '5%', justifyContent: 'flex-start', display: 'flex', marginTop: 7 }}>
                                            <label>Branch2</label>

                                        </div>

                                    </div>
                                    <div style={{ width: '100%', height: '10%', display: 'flex', marginTop: 10 }}>



                                        <div style={{ width: '10%', justifyContent: 'flex-start', display: 'flex' }}>
                                            <input type="checkbox" className="mandatory" ></input>
                                        </div>
                                        <div style={{ width: '5%', justifyContent: 'flex-start', display: 'flex', marginTop: 7 }}>
                                            <label >Branch3</label>

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
export default VoidReason;
