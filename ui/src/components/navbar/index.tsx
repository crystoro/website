import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    LogoContainer,
} from "./navbar-elements";
import { TabConfig, TabConfigType } from "./tab-config";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    };
    return (
        <Nav>
            <NavLink to="/">
                <LogoContainer>
                    <img src={Logo} alt="Crystoro" />
                </LogoContainer>
            </NavLink>
            <Bars onClick={handleToggle} />
            <NavMenu>
                {TabConfig.map((tab: TabConfigType) => {
                    <NavLink exact to={tab.path}>
                        <li>{tab.title}</li>
                    </NavLink>
                })}
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </NavMenu>
        </Nav>
    );
};
export default Navbar;
