import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import { MainApp } from "./styles";
import { TabConfig, TabConfigType } from "../components/navbar/tab-config";
import Home from "../pages/home/index";

const App = () => (
    <MainApp>
        <Router>
            <Navbar />
            <Switch>
                {TabConfig.map((tab: TabConfigType) => (
                    <Route
                        exact={tab.exact}
                        path={tab.path}
                        component={tab.component}
                    />
                ))}
            </Switch>
        </Router>
    </MainApp>
);

export default App;
