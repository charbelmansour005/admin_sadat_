
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
import Menu from "../../../global/globalvars";
import Items from "../../../models/Items";
import menuz from "../../../models/menuz";
import Refresh from '@material-ui/icons/Refresh'
import Loadingbar from "react-top-loading-bar";
// ITEMS 
const DigitalMenuItem = ({ groupName }) => {

    const [tData, setTData] = useState([]);
    const [modal, setModal] = useState(false);
    const [first, setFirst] = useState(true);
    const [currentItem, setCurrentItem] = useState({});
    const [modalEdit, setModalEdit] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isLoad, setLoad] = useState(false);
    const [allData, setAllData] = useState([]);


    const dispatch = useDispatch();
    const { menuItems, QRMenu, menuName, userInfo } = useSelector((state) => state.postReducer);

    // const options = Menu.groupCategory.map(option =>
    //     <option key={option.categoryid} defaultValue={option.nameEN}>{option.nameEN}</option>
    // )


    useEffect(() => {
        setTData(Menu.groupItems)
    }, [Menu.groupItems]);
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

        // result = tData.filter((data) => {
        //     return data.nameEN[1].toLowerCase().includes(value);
        // });
        setTData(result);
        if (value === '') {
            setTData(Menu.groupItems)
        }
    }
    // const handleSearchMenu = (event) => {
    //     let value = event.target.value.toLowerCase();
    //     let result = [];
    //     result = Menu.groupItems.filter((data) => {
    //         return data.nameEN[0].toLowerCase().includes(value);
    //     });
    //     setTData(result);

    //     if (value === '') {
    //         setTData(Menu.groupItems)
    //     }
    // }
    const openInNewTab = (url) => {
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
        localStorage.setItem("menuItems", JSON.stringify(menuItems))
        localStorage.setItem("menuGroup", JSON.stringify(Menu.groupCategory))
        localStorage.setItem("menuItems", JSON.stringify(Menu.groupItems))
        localStorage.setItem("customerId", userInfo.userid)
    };

    // const handleDelete = (itemId) => {
    //     deleteItem(itemId)
    // };
    const handleEdit = (itemId) => {

        Menu.groupItems.map((item) => {
            if (item.itemid === itemId) {
                setCurrentItem(item);
                setModalEdit(true);
                setModal(false);
                setFirst(true);
            }
        });
    };
    const handleModalSubmit = (e,) => {
        e.preventDefault();
        fetchAllSadatItems()
        toggleModal();
        e.target.reset();
    };
    const handleModalEdit = (e) => {
        e.preventDefault();
        fetchAllSadatItems()

    }
    let fetchAllSadatItems = () => {
        console.log('Sadat Items R MODE') //send to nicolas
        setLoad(true)
        setProgress(20)
        // const apiUrl = "http://localhost:3002/api/DigitalMenu/getAllItems"
        const apiUrl = "http://192.34.109.55/BlaseExtra/Api/QRGELLALL"
        var item = Object.create(menuz)
        item.rest = "REST1";
        // item.categ = "ALL";
        item.mode = "R";
        item.code = "";
        item.nameEN = "";
        item.nameAR = "";
        item.description = "";
        item.price = 0;
        item.category = "ALL";
        item.rest = "REST1";
        fetch(apiUrl, {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then (function (response) {
            return response.json();
        })
        .then(function (responsejson) {
            console.log(responsejson.ProductsManagement);
        });
    }


    useEffect(() =>{
        console.log('jebet data');
        fetch("http://192.34.109.55/BlaseExtra/Api/QRGELLALL",{
            method: "POST",
            headers:{
                Accept: "application/json",
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                rest:"REST1",
                categ:"APPETIZERS",
                mode:"R",
                code:"",
                nameEN:"",
                nameAR:"",
                description:"",
                price:0,
                category:"ALL",
            }),
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (responsejson) {
            console.log(responsejson.ProductsManagement);
            setAllData(responsejson.ProductsManagement);
        });
    },[]);

    

    // let deleteItem = (Itemid) => {
    //     const apiUrl = "http://localhost:3002/api/DigitalMenu/sendItem"
    //     var item = Object.create(Items)
    //     item.mode = "D";
    //     item.Itemid = Itemid;
    //     item.cusotmerid = userInfo.userid;
    //     item.branchid = 1;
    //     item.categoryid = "";
    //     item.nameEN = "";
    //     item.nameAR = "";
    //     item.descpt = "";
    //     item.sort = 0;
    //     item.prices = 0;
    //     item.images = "";
    //     item.search = ""
    //     fetch(apiUrl, {
    //         method: "POST",
    //         mode: "cors",
    //         headers: {
    //             Accept: "application/json",
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(item)
    //     }).then((res) => res.json()).then((resJson) => {
    //         Menu.groupItems = resJson.data.Items
    //         setTData(Menu.groupItems)
    //     })
    // }

    return (
        <div id="App" style={{ height: "100%", display: 'flex' }}>
            {
                isLoad ? <div>
                    <Loadingbar transitionTime={300} shadow={true} height={4} onLoaderFinished={() => setProgress(0)} color="#ffb703" progress={progress}></Loadingbar>
                </div> : null
            }
            <div>
                <div style={{ display: "flex", width: '100%' }}>
                    <div style={{ width: '50%' }}>
                        <h1 className="item-Digital">Menu Items</h1>
                    </div>
                    {
                        Menu.groupItems.length > 0 ?
                            <div onClick={() =>
                                openInNewTab("http://localhost:3000/MenuSummary")}
                                style={{ justifyContent: 'flex-end', alignItems: "center", display: 'flex', width: "50%" }}>
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
                                    <p style={{ marginLeft: 5 }}> Menu Summary</p>
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

                        {/* <div style={{ marginLeft: 10 }}>
                            <select onChange={(e) => handleSearchMenu(e)} className="branch">
                                <option disabled>
                                    Select Group Name
                                </option>
                                <option value="">
                                    All
                                </option>
                                {options}
                            </select>
                        </div> */}

                        <div className="item-Digital-right">
                            <div onClick={() => fetchAllSadatItems()} className="item-Digital-add">
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
                            {/* ADD ONCLICK THAT ENTERS API CALL */}
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
                    {/* HERE */}
                        <HeaderMenuItem
                            // nameEN="ItemName"
                            // price="ItemPrice"
                            // categ="Category"
                            // cur="currency"
                            // sort="Sorting" 
                            code="code"
                            nameEN="nameEN"
                            nameAR="nameAR"
                            description="description"
                            price="price"
                            cur="cur"
                            category="Category"
                            image="image"
                            />


                        <TransitionGroup id="tg" className="item-remove-digital-items">
                            {allData.map( //setAllData
                                ({
                                    // code,
                                    code,
                                    nameEN,
                                    nameAR,
                                    description,
                                    price,
                                    cur,
                                    category,
                                    image,

                                }) => (
                                    <CSSTransition
                                        // key={code}
                                        timeout={500}
                                        classNames="item-trans">
                                        <TableMenuItem
                                            code={code}
                                            nameEN={nameEN}
                                            nameAR={nameAR}
                                            description={description}
                                            price={price}
                                            cur={cur}
                                            category={category}
                                            image={image}
                                            // sort={sort}
                                            // handleDelete={handleDelete}
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
                        handleSubmit={handleModalEdit}
                    />
                ) : null
            }
        </div >
    )
}
export default DigitalMenuItem;