import Home from "../../pages/home/index";
import Wishlist from "../../pages/wishlist/index";
import Cart from "../../pages/cart/index";
import Shop from "../../pages/shop/index";
import MyAccount from "../../pages/my-account/index";
import ReactComponent from "react";

export type TabConfigType = {
    path: string;
    title: string;
    component: ReactComponent.FC;
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
        path: "/my-account",
        title: "My Account",
        component: MyAccount,
    },
    {
        path: "/wishlist",
        title: "Wishlist",
        component: Wishlist,
    },
    {
        path: "/cart",
        title: "Cart",
        component: Cart,
    },
];
