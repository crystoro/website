import Logo from "../../assets/images/logo.png";
import { NavLinks, StyledNav, LogoContainer } from "./styles";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <StyledNav>
            <LogoContainer>
                <img src={Logo} alt="Crystoro" />
            </LogoContainer>
            <NavLinks>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
                <Link to="/my-account">
                    <li>My Account</li>
                </Link>
                <Link to="/wishlist">
                    <li>Wishlist</li>
                </Link>
                <Link to="/cart">
                    <li>Cart</li>
                </Link>
            </NavLinks>
        </StyledNav>
    );
};
export default Navbar;
