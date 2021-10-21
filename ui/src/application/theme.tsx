import red from "@material-ui/core/colors/red";
import { createTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: "#d1c4e9",
        },
        secondary: {
            main: "#b2ff59",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#fff",
        },
    },
});

export default theme;
