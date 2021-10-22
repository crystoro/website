import React from "react";
import Home from "../../pages/home/index";
import Wishlist from "../../pages/wishlist/index";
import Cart from "../../pages/cart/index";
import Shop from "../../pages/shop/index";
import Profile from "../../pages/profile/index";
import ReactComponent from "react";
import { FiHome, FiHeart, FiUser, FiShoppingBag, FiShoppingCart } from "react-icons/fi";

export type TabConfigType = {
    path: string;
    title: string;
    component: ReactComponent.FC;
    icon?: any;
    exact?: boolean;
};

export const TabConfig: TabConfigType[] = [
    {
        path: "/",
        title: "Home",
        component: Home,
        exact: true,
    },
    {
        path: "/shop",
        title: "Shop",
        component: Shop,
    },
    {
        path: "/profile",
        title: "Profile",
        component: Profile,
        icon: <FiUser />,
    },
    {
        path: "/wishlist",
        title: "Wishlist",
        component: Wishlist,
        icon: <FiHeart />,
    },
    {
        path: "/cart",
        title: "Cart",
        component: Cart,
        icon: <FiShoppingCart />,
    },
];
