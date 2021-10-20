import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "./application/App";
import theme from "./application/theme";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./store/store";
import "./index.css";

const store = configureStore();

<link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;
ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Router>
                    <App />
                </Router>
            </CssBaseline>
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);
