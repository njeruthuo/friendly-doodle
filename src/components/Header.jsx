import React, { useState } from "react";
import {
    AppBar,
    Box,
    Button,
    Grid,
    Tab,
    Tabs,
    Toolbar,
    useTheme,
    Typography,
    useMediaQuery,
} from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Drawers from "./Drawer";

const Header = ({ links }) => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

    const [value, setValue] = useState();
    return (
        <AppBar
            sx={{
                background:
                    "linear-gradient(90deg, rgba(253,85,29,0.7539390756302521) 4%, rgba(58,118,180,1) 35%, rgba(176,69,252,0.6811099439775911) 90%)",
            }}
        >
            <Toolbar>
                {isMatch ? (
                    <>
                        <Typography sx={{ marginRight: "auto" }}>
                            <ShoppingCartCheckoutIcon />
                        </Typography>
                        <Drawers links={links} />
                    </>
                ) : (
                    <Grid sx={{ placeItems: "center" }} container>
                        <Grid item xs={2}>
                            <Typography>
                                <ShoppingCartCheckoutIcon />
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Tabs
                                value={value}
                                onChange={(e, val) => setValue(val)}
                                textColor="inherit"
                                indicatorColor="secondary"
                            >
                                {links.map((link, index) => (
                                    <Tab label={link} key={index} />
                                ))}
                            </Tabs>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={3}>
                            <Box display="flex">
                                <Button
                                    sx={{
                                        marginLeft: "auto",
                                        background: "rgb(253, 85, 29)",
                                    }}
                                    variant="contained"
                                >
                                    Login
                                </Button>
                                <Button
                                    sx={{
                                        marginLeft: 1,
                                        background: "rgb(253, 85, 29)",
                                    }}
                                    variant="contained"
                                >
                                    Signup
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
