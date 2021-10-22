import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import { AppBar } from "@material-ui/core";
import styled from "styled-components";
import { hoverGrayRadient } from "../../assets/styles/colors";

export const StyledAppBar = styled(AppBar)`
    background-color: #f8ceec;
    background-image: linear-gradient(315deg, #f8ceec 0%, #a88beb 74%);
`;
export const LogoContainer = styled.div`
    justify-content: start;
    padding: 0;
    flex: 1;
    cursor: "pointer";
    &:hover {
        border: 0;
    }
`;
export const NavMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 5;
    white-space: nowrap;
`;
export const NavTab = styled.div`
    height: 100%;
`;
export const NavLink = styled(Link)`
    font-family: "Lora", serif;
    color: #000;
    display: flex;
    list-style: none;
    text-decoration: none;
    padding: 0.5rem 1rem;
    margin: 0.1rem;
    cursor: pointer;
    border-radius: 0.15rem;
    &.active {
        ${hoverGrayRadient}
    }
`;
export const NavBtn = styled.button`
    display: flex;
    border-radius: 0.25rem;
    background-color: #6e45e1;
    align-items: center;
    padding: 10px 22px;
    margin: 0 1rem 0 0.75rem;
    cursor: pointer;
    outline: none;
    border: none;
    text-decoration: none;
    color: #fff;
    &:hover {
        ${hoverGrayRadient}
    }
`;
