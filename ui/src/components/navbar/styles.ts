import styled from "styled-components";

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    color: black;
    a {
        text-decoration: none;
    }
    a,
    a:visited,
    a:link,
    a:active {
        text-decoration: none;
        color: black;
    }
`;

export const NavLinks = styled.ul`
    width: 40%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
`;
