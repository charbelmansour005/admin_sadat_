
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
import menuz2 from './MenuItem/menuz2'
import DigitalMenuItem from "./MenuItem/DigitalMenuItem";
import Menu from "../../global/globalvars";
import Groups from "../../models/Groups";
import Refresh from "@material-ui/icons/Refresh";
import Loadingbar from "react-top-loading-bar";
import TableMenuItem from "./MenuItem/TableMenuItem";
import CategoryMenuItem from "./MenuItem/CategoryMenuItem";
import TableMenuItemCat from "./MenuItem/TableMenuItemCat";


const Digital = () => {
    // call CATEG API HERE
    // const [allCateg, setAllCateg] = useState([]);
    const [allData, setAllData] = useState([]);

    useEffect(() =>{
        console.log('jebet data');
        fetch("http://192.34.109.55/BlaseExtra/Api/QRGETCATEGORIES",{
            method: "POST",
            headers:{
                Accept: "application/json",
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                rest:"REST1",
            }),
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (responsejson) {
            console.log(responsejson.CategoryList);
            setAllData(responsejson.CategoryList);
        });
    },[]);

    // useEffect(() =>{
    //     console.log('jebet data');
    //     fetch("http://192.34.109.55/BlaseExtra/Api/QRGETCATEGORIES",{
    //         method: "POST",
    //         headers:{
    //             Accept: "application/json",
    //             "Content-Type":"application/json",
    //         },
    //         body: JSON.stringify({
    //             rest:"REST1",
    //         }),
    //     })
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (responsejson) {
    //         console.log(responsejson.ProductsManagement);
    //         setAllCateg(responsejson.ProductsManagement);
    //     });
    // },[]);

    // const showData = () => {
    //     console.log('CATEGORIES')
    //     fetch('http://192.34.109.55/BlaseExtra/Api/QRGETCATEGORIES',{
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //         },
    //         body: JSON.stringify({
    //             rest: "REST1",
    //         }),
    //     }).then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (responsejson){
    //         console.log(responsejson.ProductsManagement);
    //     });
    // };

    let showDataSadatCategories = () => {
        console.log('Sadat Categories') //send to nicolas
        // setLoad(true)
        // setProgress(20)
        // const apiUrl = "http://localhost:3002/api/DigitalMenu/getAllItems"
        const apiUrl = "http://192.34.109.55/BlaseExtra/Api/QRGETCATEGORIES"
        var item = Object.create(menuz2)
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
            console.log(responsejson.CategoryList);
        });
    }


    return (
        <div id="App" className="digitalMenu">
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
                            />
                        </div>
                        <div className="item-Digital-right">
                            {/* ADD ONCLICK */}
                            <div onClick={() => showDataSadatCategories()} className="item-Digital-add">
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
                            <div className="item-Digital-add">
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
                            indexe="Category Code"
                            name="Category Name" />
                        {/* <HeaderDigital
                            indexe="Code"
                            name="Category Name" /> */}

                        <TransitionGroup id="tg" className="item-remove-digital-items">
                        {allData.map( //setAllData
                                ({
                                    // code,
                                    indexe,
                                    name,

                                }) => (
                                    <CSSTransition
                                        // key={code}
                                        timeout={500}
                                        classNames="item-trans">
                                        <TableMenuItemCat
                                            name={name}
                                            indexe={indexe}
                                            // cur={cur}
                                            // categ={categ}
                                            // sort={sort}
                                            // handleDelete={handleDelete}
                                            // handleEdit={handleEdit}
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

                />
            </div>
        </div >
    )
}
export default Digital;