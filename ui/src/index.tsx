import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import App from "./application/App";
import theme from "./application/theme";
import configureStore from "./store/store";
import "./index.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
const store = configureStore();

<link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;
ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <CssBaseline>
                <App />
            </CssBaseline>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById("root"),
);
