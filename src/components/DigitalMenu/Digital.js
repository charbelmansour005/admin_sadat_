
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
import { deleteQrMenu, saveMenuGroup } from "../../redux/actions";
import DigitalMenuItem from "./MenuItem/DigitalMenuItem";
const Digital = () => {

    const [tData, setTData] = useState([]);
    const [modal, setModal] = useState(false);
    const [first, setFirst] = useState(true);
    const [currentItem, setCurrentItem] = useState({});
    const [modalEdit, setModalEdit] = useState(false);
    const [groupName, setGroupName] = useState('')
    const [isItem, setItem] = useState(false)
    const dispatch = useDispatch();
    const { QRMenu, menuName } = useSelector((state) => state.postReducer);
    const deleteQrMenus = (id) => dispatch(deleteQrMenu(id));
    const saveMenuName = (menu) => dispatch(saveMenuGroup(menu));
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
        setTData(QRMenu)
    }, [QRMenu]);
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
            return data.menuName.toLowerCase().includes(value);
        });
        setTData(result);
        if (value === '') {
            setTData(QRMenu)
        }
    }


    const handleDelete = (groupId) => {
        QRMenu.map((item) => {
            if (item.groupId === groupId) {
                deleteQrMenus(groupId);
            }
        });
        setTData(QRMenu);
        console.log(tData)

    };


    const handleEdit = (groupId) => {

        QRMenu.map((item) => {
            if (item.groupId === groupId) {
                setCurrentItem(item);
                setModalEdit(true);
                setModal(false);
                setFirst(true);
            }
        });
        setTData(QRMenu)
    };
    const handleModalSubmit = (
        e,
        groupId,
        menuName,
        enName,
        menuDesc,
        enDesc,
        sorting

    ) => {
        e.preventDefault();
        let newItem = {
            groupId: groupId,
            menuName: menuName,
            enName: enName,
            menuDesc: menuDesc,
            enDesc: enDesc,
            sorting: sorting

        };

        QRMenu.push(newItem);
        setTData(QRMenu)
        console.log(QRMenu)

        toggleModal();
        e.target.reset();
    };
    return (
        <div id="App" style={{ height: "100%", display: 'flex' }}>
            <div>
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
                            Description="Description" />

                        <TransitionGroup id="tg" className="item-remove-digital-items">
                            {tData.map(
                                ({
                                    groupId,
                                    menuName,

                                }) => (

                                    <CSSTransition

                                        key={groupId}
                                        timeout={500}
                                        classNames="item-trans">
                                        <TableDigitalMenu
                                            menuName={menuName}
                                            groupId={groupId}
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

            <div>

                <DigitalMenuItem
                    groupName={menuName}
                />
            </div>

         


            {!first ? (

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
            ) : null}

            {modalEdit ? (
                <ModalMenuEdit
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
    )
}
export default Digital;