import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    z-index: 10;
`;

export const LogoContainer = styled.div`
    justify-content: start;
    padding: 0;
    flexgrow: 1;
    cursor: "pointer";
    &:hover {
        border: 0;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100vw;
    white-space: nowrap;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavLink = styled(Link)`
    color: #301b70;
    display: flex;
    align-items: center;
    list-style: none;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: var(--darkgray);
    }
    &:hover {
        color: #004940;
        border-bottom: 0.0625rem solid white;
    }
    @media screen and (max-width: 768px) {
        // margin: 2.5rem 0;
        // color: #000;
        // width: auto;
        // text-align: left;
        // line-height: 2.5rem;
        // &.active {
        //     color: cyan;
        // }
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #000;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0.75rem;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.2rem;
        cursor: pointer;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin: 0 1rem 0 0.75rem;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    display: flex;
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;
