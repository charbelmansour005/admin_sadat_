
import { useState, useEffect } from "react";
import "../../App.css";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import TableDigitalMenu from "./TableDigitalMenu";
import HeaderDigital from "./HeaderDigital";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../styles/Digital.css";
import ModalMenu from './ModalMenu';
import ModalMenuEdit from "./ModalMenuEdit";
import { useDispatch, useSelector } from "react-redux";
import DigitalMenuItem from "./MenuItem/DigitalMenuItem";
import Menu from "../../global/globalvars";
import Groups from "../../models/Groups";
import Refresh from "@material-ui/icons/Refresh";
import Loadingbar from "react-top-loading-bar";
const Digital = () => {

    const [tData, setTData] = useState([]);
    const [modal, setModal] = useState(false);
    const [first, setFirst] = useState(true);
    const [currentItem, setCurrentItem] = useState({});
    const [modalEdit, setModalEdit] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isLoad, setLoad] = useState(false)
    const { menuName, userInfo } = useSelector((state) => state.postReducer);

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
            document.getElementById("search-digital-text").tabIndex = -1;
        } else {
            document.getElementById("search-digital-text").tabIndex = 1;
        }
    }, [modal]);
    useEffect(() => {

        setTData(Menu.groupCategory);
    }, [Menu.groupCategory]);
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
    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];

        result = tData.filter((data) => {
            return data.nameEN.toLowerCase().includes(value);
        });
        setTData(result);
        if (value === '') {
            setTData(Menu.groupCategory)
        }
    }


    const handleDelete = (groupId) => {
        deleteGroup(groupId)
    };


    const handleEdit = (groupId) => {
        Menu.groupCategory.map((item) => {
            if (item.categoryid === groupId) {
                setCurrentItem(item);
                setModalEdit(true);
                setModal(false);
                setFirst(true);
            }
        });
        setTData(Menu.groupCategory);
    };
    const handleModalSubmit = (e) => {
        e.preventDefault();
        fetchAllGroups()
        toggleModal();
        e.target.reset();
    };

    const handleModalEdit = (e) => {
        e.preventDefault()
        fetchAllGroups()
    }



    let fetchAllGroups = () => {
        setLoad(true)
        setProgress(20)
        const apiUrl = "http://localhost:3002/api/DigitalMenu/getAllGroups"
        var group = Object.create(Groups)
        group.mode = "R";
        group.cusotmerid = userInfo.userid;
        group.branchid = "1";
        group.categoryid = "0";
        group.nameEN = "";
        group.nameAR = "";
        group.descpt = "";
        group.sort = "";
        group.images = "";
        group.search = "*"
        fetch(apiUrl, {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(group)
        }).then((res) => res.json()).then((resJson) => {
            Menu.groupCategory = resJson.data.Groups
            setTData(Menu.groupCategory)
            setProgress(100)
            setLoad(false)
        }).catch((error) => {
            alert(error)
        })


    }
    let deleteGroup = (categoryid) => {
        const apiUrl = "http://localhost:3002/api/DigitalMenu/sendGroup"
        var group = Object.create(Groups)
        group.mode = "D";
        group.cusotmerid = userInfo.userid;
        group.branchid = "1";
        group.categoryid = categoryid;
        group.nameEN = "";
        group.nameAR = "";
        group.descpt = "";
        group.sort = "";
        group.images = "";
        group.search = ""
        fetch(apiUrl, {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(group)
        }).then((res) => res.status).then((resJson) => {
            console.log(resJson)
        })

    }


    return (
        <div id="App" className="digitalMenu">
            {
                isLoad ? <div>
                    <Loadingbar transitionTime={300} shadow={true} height={4} onLoaderFinished={() => setProgress(0)} color="#ffb703" progress={progress}></Loadingbar>
                </div> : null
            }
            <div >
                <h1 className="item-Digital">Digital Menu</h1>
                <div className="item-Digital-box">
                    <div className="item-search-digital-box">
                        <div className="item-digital-search">
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
                                id="search-digital-text"
                                type="text"
                                className="item-search-text"
                                placeholder="Search by Group Name..."
                                onChange={handleSearch}
                            />
                        </div>
                        <div className="item-Digital-right">
                            <div onClick={() => fetchAllGroups()} className="item-Digital-add">
                                <Refresh
                                    style={{
                                        marginLeft: "2px",
                                        color: "white",
                                        height: "25px",
                                        width: "25px",
                                        alignSelf: "center",
                                        justifySelf: "center",
                                    }}
                                />
                                <p>Refresh</p>
                            </div>


                            <div onClick={() => toggleModal()} className="item-Digital-add">
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
                    <div className="item-digital-table">
                        <HeaderDigital
                            nameEN="Description"
                            sort="Sorting" />

                        <TransitionGroup id="tg" className="item-remove-digital-items">
                            {tData.map(
                                ({
                                    categoryid,
                                    nameEN,
                                    sort,
                                }) => (

                                    <CSSTransition
                                        key={categoryid}
                                        timeout={500}
                                        classNames="item-trans">
                                        <TableDigitalMenu
                                            nameEN={nameEN}
                                            categoryid={categoryid}
                                            sort={sort}
                                            handleDelete={handleDelete}
                                            handleEdit={handleEdit}

                                        />
                                    </CSSTransition>
                                )
                            )}
                        </TransitionGroup>
                    </div>
                </div>

            </div>
            <div className="modal-Digital-spacer"></div>
            <div style={{ marginTop: 10 }}>

                <DigitalMenuItem
                    groupName={menuName}
                />
            </div>




            {
                !first ? (

                    <ModalMenu
                        m="modal"
                        toggleClose={toggleModal}
                        mod={modal}
                        mountedStyle={mountedStyle}
                        unmountedStyle={unmountedStyle}
                        downStyle={downStyle}
                        upStyle={upStyle}
                        handleSubmit={handleModalSubmit}
                    />
                ) : null
            }

            {
                modalEdit ? (
                    <ModalMenuEdit
                        toggleClose={toggleEditModal}
                        mod={modalEdit}
                        currentitem={currentItem}
                        mountedStyle={mountedStyle}
                        unmountedStyle={unmountedStyle}
                        downStyle={downStyle}
                        upStyle={upStyle}
                        handleSubmit={handleModalEdit}
                    />
                ) : null
            }
        </div >
    )
}
export default Digital;