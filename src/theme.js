import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#FF5733",
        },
    },
    typography: {
        h1: {
            fontSize: "20px",
        },
    },
    breakpoints: {
        values: {
            xs: "100px",
        },
    },
});
