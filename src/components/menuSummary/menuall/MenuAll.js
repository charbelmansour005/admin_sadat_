


import { useState, useEffect } from "react";
import '../../../styles/MenuAll.css';

const MenuAll = ({ categ }) => {
    useEffect(() => {
        console.log(localStorage.getItem("catId"))
    }, []);

    return (
        <div>
            {/* <div class="col-xs-12 col-sm-6">
            <div className="menu-section">
                <h2 className="menu-section-title" >{option.nameEN[0]}</h2>
                <div className="menu-item">
                    <div className="menu-item-name">{option.nameEN}</div>
                    <div className="menu-item-price"> {option.price} L.L </div>
                    <div className="menu-item-description"> {option.description}</div>
                </div>
            </div>
        </div> */}
        </div>

    );


}

export default MenuAll;