
import { useState, useEffect } from "react";
import "../../App.css";
import "../../styles/menuSummary.css"
import Menu from "../../global/globalvars";
import MenuHeaders from "./menuheader/MenuHeaders";

const MenuSummary = () => {
    const [menuItems, setMenuItems] = useState([])
    const [menuGroup, setMenuGroup] = useState([])
    const [open, setOpen] = useState(false)
    var db = require('../../global/globalfunctions')
    useEffect(() => {

        var customerid = localStorage.getItem("customerId")
        db.fetchAllGroups(customerid);
        db.fetchAllItems(customerid);

        setMenuItems(Menu.groupItems);
        setMenuGroup(Menu.groupCategory);

    }, []);

    // const options = menuGroup.map(option =>
    //     <NavLink activeStyle to={"/" + option.menuName}>{option.menuName}</NavLink>
    // )

    return (
        <div>
         <MenuHeaders />
        </div>
    )
}
export default MenuSummary;
