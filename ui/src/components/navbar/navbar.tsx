import React from "react";
import { NavMenu, NavLink, NavBtn, NavTab } from "./styles";
import { TabConfig } from "./tab-config";

const NavbarComponent = () => {
    return (
        <NavMenu>
            {TabConfig.map((tab, index) => (
                <NavTab key={index}>
                    <NavLink exact={tab.exact} to={tab.path}>
                        <li>
                            {tab.title} {tab.icon}
                        </li>
                    </NavLink>
                </NavTab>
            ))}
            <NavBtn>Log In</NavBtn>
        </NavMenu>
    );
};

export default NavbarComponent;
