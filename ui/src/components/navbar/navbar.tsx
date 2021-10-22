import React from "react";
import { AppBar, Toolbar, useTheme, useMediaQuery } from "@material-ui/core";
import DrawerComponent from "./drawer";
import { NavMenu, NavLink, NavBtn, NavBtnLink, LogoContainer } from "./navbar-elements";
import Logo from "../../assets/images/logo.png";
import { TabConfig } from "./tab-config";

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <AppBar position="static">
            <Toolbar>
                <NavLink to="/">
                    <LogoContainer>
                        <img src={Logo} alt="Crystoro" />
                    </LogoContainer>
                </NavLink>
                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <NavMenu>
                        {TabConfig.map((tab, index) => (
                            <NavLink key={index} exact={tab.exact} to={tab.path}>
                                <li>{tab.title}</li>
                            </NavLink>
                        ))}
                        <NavBtn>
                            <NavBtnLink to="/signin">Sign In</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                )}
            </Toolbar>
        </AppBar>
    );
};
export default Navbar;
