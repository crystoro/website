import React from "react";
import { useState } from "react";
import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "./navbar-elements";
import { TabConfig } from "./tab-config";

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: "none",
        color: "charcoal",
        fontSize: "20px",
    },
    icon: {
        color: "white",
    },
}));

function DrawerComponent() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>
                    {TabConfig.map((tab) => {
                        return (
                            <>
                                <ListItem onClick={() => setOpenDrawer(false)}>
                                    <ListItemText>
                                        <NavLink exact to={tab.path} className={classes.link}>
                                            <li>{tab.title}</li>
                                        </NavLink>
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                            </>
                        );
                    })}
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <NavLink to="/signin" className={classes.link}>
                                <li>Sign In</li>
                            </NavLink>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
                <MenuIcon />
            </IconButton>
        </>
    );
}
export default DrawerComponent;
