
import { useState, useEffect } from "react";
import '../../../styles/Menuheaders.css';
import '../../../styles/MenuAll.css';
import { NavLink } from 'react-router-dom';
import MenuAll from "../menuall/MenuAll";
import Menu from "../../../global/globalvars";
import jay from '../../../assets/jay.jpg'
import ReactRoundedImage from 'react-rounded-image'
const MenuHeaders = () => {
    var customerid = localStorage.getItem("customerId")
    var group = JSON.parse(localStorage.getItem("menuGroup"))
    var item = JSON.parse(localStorage.getItem("menuItems"))
    var firstCat = group[0].categoryid
    var filterItem = item.filter((ite) => ite.categoryid === firstCat);
    const [load, setLoad] = useState(false);
    useEffect(() => {
   
        var db = require('../../../global/globalfunctions')
        db.fetchAllGroups(customerid);
        db.fetchAllItems(customerid);

        Menu.filteredCategory = filterItem;
    }, []);

    const options = group.map(option =>
        <li onClick={() => fetchCat(option)} className="nav-item" >
            <a className="menu-group" href={"#" + option.nameEN}>{option.nameEN}
            </a>
        </li>
    )


    const subMenu = Menu.filteredCategory.map(option =>
        <div class="col-xs-12 col-sm-6">
            <div className="menu-section">
                <div className="menu-item">
                    <div className="menu-item-name">{option.nameEN}</div>
                    <div className="menu-item-price"> {option.price} </div>
                    <div className="menu-item-description"> {option.description}</div>
                </div>
            </div>
        </div>
    )

    const subFirstMenu = Menu.filteredCategory.map(option =>
        <div class="col-xs-12 col-sm-6">
            <div className="menu-section">
                <div className="menu-item">
                    <div className="menu-item-name">{option.nameEN}</div>
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
            <div className="menuHeader" style={{ top: 0, left: 0, height: "40vh", backgroundPosition: 'center', backgroundSize: "cover", backgroundImage: "url(" + "https://i0.wp.com/www.moroccoworldnews.com/wp-content/uploads/2020/12/Best-Restaurants-in-Casablanca.jpeg?ssl=1" + ")" }}>
                <div className="subHeader">
                    <div>
                        <p className="menuTitle">MENU</p>
                    </div>
                    <div style={{ alignSelf: "flex-start", display: "flex", alignItems: "flex-end", marginLeft: 15 }}>
                        <div className="logo">
                            <ReactRoundedImage image={jay} roundedColor="#321124"
                                imageWidth="100"
                                imageHeight="100"
                                roundedSize="0"
                                hoverColor="#DD1144" />

                        </div>
                        <div >
                            <label className="quoteTitle">Quotes </label>
                        </div>
                    </div>
                </div>

            </div>
            

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
                                        <h2 className="menu-section-title" >{Menu.filteredCategory[0].categoryname}
                                        </h2>
                                        : null
                                }

                            </div>
                            {subMenu}

                        </div> : <div class="row" id="menu/Appetizers">
                            <div>
                                {
                                    Menu.filteredCategory.length > 0 ?
                                        <h2 className="menu-section-title" >{Menu.filteredCategory[0].categoryname}
                                        </h2>
                                        : null
                                }

                            </div>
                            {subFirstMenu}

                        </div>
                    }

                </div>
            </section>
            {/* <Footer /> */}
        </div>
    );


}

export default MenuHeaders;