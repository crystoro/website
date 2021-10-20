import Navbar from "../components/navbar";
import { Switch, Route } from "react-router-dom";
import MyAccount from "../pages/my-account";
import Shop from "../pages/shop";
import Wishlist from "../pages/wishlist";
import Cart from "../pages/cart";
import { MainApp } from "./styles";
import Home from "../pages/home";
const App = () => {
    return (
        <MainApp>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/shop" component={Shop} />
                <Route path="/my-account" component={MyAccount} />
                <Route path="/wishlist" component={Wishlist} />
                <Route path="/cart" component={Cart} />
            </Switch>
        </MainApp>
    );
};

export default App;
