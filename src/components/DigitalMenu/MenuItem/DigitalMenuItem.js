
import { useState, useEffect } from "react";
import "../../../App.css";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import MenuOpen from "@material-ui/icons/MenuBookOutlined";
import TableMenuItem from "./TableMenuItem";
import HeaderMenuItem from "./HeaderMenuItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../../styles/Digital.css";
import ModalMenuItem from "./ModalMenuItem";
import ModalEditMenuItem from "./ModalEditMenuItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteMenuItem } from "../../../redux/actions";
import { Switch, Route, Link, HashRouter } from "react-router-dom";
const DigitalMenuItem = ({ groupName }) => {

    const [tData, setTData] = useState([]);
    const [modal, setModal] = useState(false);
    const [first, setFirst] = useState(true);
    const [currentItem, setCurrentItem] = useState({});
    const [modalEdit, setModalEdit] = useState(false);

    // const [groupName, setGroupName] = useState('')

    const dispatch = useDispatch();
    const { menuItems, QRMenu, menuName } = useSelector((state) => state.postReducer);
    const deleteMenuItems = (id) => dispatch(deleteMenuItem(id));
    const options = QRMenu.map(option =>
        <option key={option.groupId} defaultValue={option.menuName}>{option.menuName}</option>
    )



    useEffect(() => {

        setTData(menuItems)
        console.log(menuItems)
    }, [menuItems]);
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
            return data.ItemName.toLowerCase().includes(value);
        });
        setTData(result);
        if (value === '') {
            setTData(menuItems)
        }
    }
    const handleSearchMenu = (event) => {
        let value = event.target.value.toLowerCase();

        let result = [];
        let result1 = [];

        result = menuItems.filter((data) => {
            return data.groupId.toLowerCase().includes(value);
        });
        setTData(result);

        if (value === '') {
            setTData(menuItems)
            // result1 = menuItems.filter((data) => {
            //     return data;
            // })
            // setTData(result1)

        }
    }
    const openInNewTab = (url) => {
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
        localStorage.setItem("menuItems",JSON.stringify(menuItems))
        localStorage.setItem("QrMenu",JSON.stringify(QRMenu))
    };

    const handleDelete = (itemId) => {
        menuItems.map((item) => {
            if (item.itemId === itemId) {
                deleteMenuItems(itemId);
            }
        });

        setTData(menuItems)
    };
    const handleEdit = (itemId) => {

        menuItems.map((item) => {
            if (item.itemId === itemId) {
                setCurrentItem(item);
                setModalEdit(true);
                setModal(false);
                setFirst(true);
            }
        });
    };
    const handleModalSubmit = (
        e,
        itemId,
        ItemName,
        ItemPrice,
        Ingredients,
        groupId,


    ) => {
        e.preventDefault();
        let newItem = {
            itemId: itemId,
            ItemName: ItemName,
            ItemPrice: ItemPrice,
            Ingredients: Ingredients,
            groupId: groupId,


        };

        menuItems.push(newItem);
        setTData(menuItems)
        console.log(menuItems)

        toggleModal();
        e.target.reset();
    };
    return (
        <div id="App" style={{ height: "100%", display: 'flex' }}>
            <div>
                <div style={{ display: "flex", width: '100%' }}>
                    <div style={{ width: '50%' }}>
                        <h1 className="item-Digital">Menu Items</h1>
                    </div>
                    {
                        menuItems.length > 0 ?


                            <div onClick={() =>
                                openInNewTab("http://localhost:3000/MenuSummary")}
                                style={{ width: '50%', justifyContent: 'flex-end', alignItems: "center", display: 'flex' }}>
                                <div className="item-Digital-menu">
                                    <MenuOpen
                                        style={{
                                            marginLeft: "2px",
                                            color: "white",
                                            height: "25px",
                                            width: "25px",
                                            alignSelf: "center",
                                            justifySelf: "center",
                                        }}
                                    />
                                    <p style={{ marginLeft: 5 }}>Show Menu Summary</p>
                                </div>

                            </div> : null
                    }


                </div>


                <div className="item-Menu-box">
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
                                placeholder="Search by Item Name..."
                                onChange={handleSearch}
                            />
                        </div>

                        <div style={{ marginLeft: 10 }}>
                            <select onChange={(e) => handleSearchMenu(e)} className="branch">
                                <option disabled>
                                    Select Group Name
                                </option>
                                <option value="">
                                    All
                                </option>
                                {options}
                            </select>
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
                        <HeaderMenuItem
                            ItemName="ItemName"
                            ItemPrice="ItemPrice"
                            groupId="Group Name" />
                            

                        <TransitionGroup onClick={() => console.log(groupName)} id="tg" className="item-remove-digital-items">
                            {tData.map(
                                ({
                                    itemId,
                                    ItemName,
                                    ItemPrice,
                                    groupId

                                }) => (
                                    <CSSTransition
                                        key={itemId}
                                        timeout={500}
                                        classNames="item-trans">
                                        <TableMenuItem
                                            ItemName={ItemName}
                                            ItemPrice={ItemPrice}
                                            itemId={itemId}
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


            {
                !first ? (

                    <ModalMenuItem
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
                    <ModalEditMenuItem
                        toggleClose={toggleEditModal}
                        mod={modalEdit}
                        currentitem={currentItem}
                        mountedStyle={mountedStyle}
                        unmountedStyle={unmountedStyle}
                        downStyle={downStyle}
                        upStyle={upStyle}
                    />
                ) : null
            }
        </div >
    )
}
export default DigitalMenuItem;