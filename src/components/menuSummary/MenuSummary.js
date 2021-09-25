
import { useState, useEffect } from "react";
import "../../App.css";
import "../../styles/menuSummary.css"
import { useDispatch, useSelector } from "react-redux";
import { Nav, NavLink, Bars, Bars1, NavMenu, NavBtn, NavBtnLink } from './NavBarElements'
import Sidebar from "./sidebar/Sidebar";



const MenuSummary = () => {
    const [menuItems, setMenuItems] = useState([])
    const [menuGroup, setMenuGroup] = useState([])
    const [open, setOpen] = useState(false)
    useEffect(() => {
        var items = JSON.parse(localStorage.getItem("menuItems"))
        var qrMenu = JSON.parse(localStorage.getItem("QrMenu"))
        setMenuItems(items)
        setMenuGroup(qrMenu)
    }, []);

    const options = menuGroup.map(option =>
        <NavLink activeStyle to={"/" + option.menuName}>{option.menuName}</NavLink>
    )
    const openSidebar = () => {
        if (open === false) {
            setOpen(true)
        }
        else {
            setOpen(false)
        }

    }
    return (
        <>

            <Nav>
                <Bars onClick={openSidebar} />
                <NavMenu>
                    {options}
                </NavMenu>
                {
                    open ?
                        <Sidebar
                            menuItems={menuItems}
                            menuGroup={menuGroup} /> : null
                }
            </Nav>
        </>
    )
}
export default MenuSummary;
