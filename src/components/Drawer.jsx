import React, { useState } from "react";
import {
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Drawers = ({ links }) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Drawer
                PaperProps={{ sx: { background: "rgba(58,118,180,1)" } }}
                open={open}
                onClose={() => setOpen(!open)}
            >
                <List>
                    {links.map((link, index) => (
                        <ListItemButton
                            key={index}
                            divider
                            sx={{ color: "white" }}
                        >
                            <ListItemText>{link}</ListItemText>
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>

            <IconButton
                sx={{ marginLeft: "auto", color: "white" }}
                onClick={() => setOpen(!open)}
            >
                {open ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
            </IconButton>
        </div>
    );
};

export default Drawers;
