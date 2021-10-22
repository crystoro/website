import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/navbar";
import { MainApp } from "./styles";
import { TabConfig, TabConfigType } from "../components/navbar/tab-config";

const App = () => (
    <MainApp>
        <Router>
            <Navbar />
            <Switch>
                {TabConfig.map((tab: TabConfigType, index: number) => (
                    <Route
                        key={index}
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
