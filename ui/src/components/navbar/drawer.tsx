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
import { NavLink } from "./styles";
import { TabConfig } from "./tab-config";

const useStyles = makeStyles(() => ({
    icon: {
        display: "flex",
        flex: "1",
        justifyContent: "flex-end",
        color: "navy-blue",
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
                                        <NavLink exact to={tab.path}>
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
                            <NavLink to="/signin">
                                <li>Sign In</li>
                            </NavLink>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                </List>
            </Drawer>
            <div className={classes.icon}>
                <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                    <MenuIcon />
                </IconButton>
            </div>
        </>
    );
}
export default DrawerComponent;
