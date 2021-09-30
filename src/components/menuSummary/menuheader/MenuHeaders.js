
import { useState, useEffect } from "react";
import '../../../styles/Menuheaders.css';
import '../../../styles/MenuAll.css';
import { NavLink } from 'react-router-dom';
import MenuAll from "../menuall/MenuAll";
import Menu from "../../../global/globalvars";

const MenuHeaders = () => {
    var customerid = localStorage.getItem("customerId")
    var group = JSON.parse(localStorage.getItem("menuGroup"))
    var item = JSON.parse(localStorage.getItem("menuItems"))
    const [categ, setCateg] = useState('')
    const [load, setLoad] = useState(false);
    const [filteredItem, setFilteredItem] = useState([])
    useEffect(() => {
        var db = require('../../../global/globalfunctions')
        db.fetchAllGroups(customerid);
        db.fetchAllItems(customerid);
        console.log(group)
        console.log(item)
    }, []);

    const options = group.map(option =>
        <li onClick={() => fetchCat(option)} className="nav-item" >
            <a className="menu-group" href={"#menu" + option.nameEN}>{option.nameEN}
            </a>
        </li>
    )


    const subMenu = Menu.filteredCategory.map(option =>
        <div class="col-xs-12 col-sm-6">
            <div className="menu-section">
                <div className="menu-item">
                    <div className="menu-item-name">{option.nameEN[1]}</div>
                    <div className="menu-item-price"> {option.price} </div>
                    <div className="menu-item-description"> {option.description}</div>
                </div>
            </div>
        </div>
    )



    let fetchCat = (item1) => {
        var category = item1.categoryid;
        Menu.filteredCategory = item.filter((ite) => ite.categoryid === category);
        setLoad(true)
    }




    return (
        <div>
            <section className="menuHeader">
                <p className="menuTitle">MENU</p>
                <ul>
                    <li>
                        <NavLink to="/">Home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">Menu </NavLink>
                    </li>
                </ul>
            </section>

            <section className="menu-options">
                <div>
                    <nav class="navbar navbar-expand-lg navbar navbar-light bg-light" style={{ width: "100%", textAlign: "center" }}>
                        <ul class="navbar-nav ml-auto" className="menu-cat">
                            {options}
                        </ul>
                    </nav>

                    {
                        load ? <div class="row" id="menu/Appetizers">
                            <div>
                                {
                                    Menu.filteredCategory.length > 0 ?
                                        <h2 className="menu-section-title" >{Menu.filteredCategory[0].nameEN[0]}
                                        </h2>
                                        : null
                                }

                            </div>
                            {subMenu}

                        </div> : null
                    }

                </div>
            </section>
            {/* <Footer /> */}
        </div>
    );


}

export default MenuHeaders;