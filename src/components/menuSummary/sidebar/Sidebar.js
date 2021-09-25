import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
@media screen and (max-width: 768px) {
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
`;

const SidebarNav = styled.nav`
@media screen and (max-width: 768px) {
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
 
  // left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
}
`;

const SidebarWrap = styled.div`
@media screen and (max-width: 768px) {
  width: 100%;
}
`;

const Sidebar = ({ menuItems, menuGroup }) => {
    const [sidebar, setSidebar] = useState(true);
    useEffect(() => {
        console.log(menuGroup)
    }, []);
    return (
        <>

            {
                sidebar ? <SidebarNav sidebar={sidebar} >
                    <SidebarWrap>
                        <NavIcon to="#">
                        </NavIcon>
                        {menuGroup.map((item, index) => {
                            return <SubMenu item={item} key={item.groupId} />;
                        })}
                    </SidebarWrap>
                </SidebarNav> : null
            }


        </>
    );
};

export default Sidebar;