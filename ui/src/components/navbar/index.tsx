import React from "react";
import { Toolbar, useTheme, useMediaQuery } from "@material-ui/core";
import DrawerComponent from "./drawer";
import NavbarComponent from "./navbar";
import { LogoContainer, StyledAppBar } from "./styles";
import Logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <StyledAppBar position="static">
            <Toolbar>
                <NavLink to="/">
                    <LogoContainer>
                        <img src={Logo} alt="Crystoro" />
                    </LogoContainer>
                </NavLink>
                {isMobile ? <DrawerComponent /> : <NavbarComponent />}
            </Toolbar>
        </StyledAppBar>
    );
};
export default Navbar;
